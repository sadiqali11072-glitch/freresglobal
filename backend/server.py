from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Freres Global Systems API")
api_router = APIRouter(prefix="/api")


# --- Models ---
class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: Optional[str] = None
    interest: str  # laptops | workstations | servers | desktops | storage | parts | services
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class InquiryCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(default=None, max_length=160)
    interest: str = Field(min_length=1, max_length=40)
    message: str = Field(min_length=5, max_length=4000)


class InquiryPublic(BaseModel):
    id: str
    name: str
    email: EmailStr
    company: Optional[str] = None
    interest: str
    message: str
    created_at: datetime


# --- Routes ---
@api_router.get("/")
async def root():
    return {"message": "Freres Global Systems API", "status": "online"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "service": "freresglobal-api"}


@api_router.post("/inquiries", response_model=InquiryPublic, status_code=201)
async def create_inquiry(payload: InquiryCreate):
    inquiry = Inquiry(**payload.model_dump())
    doc = inquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.inquiries.insert_one(doc)
    return InquiryPublic(**inquiry.model_dump())


@api_router.get("/inquiries", response_model=List[InquiryPublic])
async def list_inquiries(limit: int = 50):
    if limit < 1 or limit > 500:
        raise HTTPException(status_code=400, detail="limit must be 1-500")
    docs = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    result = []
    for d in docs:
        if isinstance(d.get('created_at'), str):
            d['created_at'] = datetime.fromisoformat(d['created_at'])
        result.append(InquiryPublic(**d))
    return result


# --- Static catalog (product categories) ---
CATEGORIES = [
    {
        "slug": "laptops",
        "title": "Laptops",
        "kicker": "Mobile Precision",
        "blurb": "Business ultrabooks, developer workhorses and rugged field machines from Dell, Lenovo, HP and Apple.",
    },
    {
        "slug": "workstations",
        "title": "Workstations",
        "kicker": "Studio-grade Power",
        "blurb": "Xeon and Threadripper towers engineered for CAD, 3D, ML and heavy compute pipelines.",
    },
    {
        "slug": "servers",
        "title": "Servers",
        "kicker": "Rack & Tower",
        "blurb": "PowerEdge, ProLiant and ThinkSystem — configured, racked and delivered globally.",
    },
    {
        "slug": "desktops",
        "title": "Desktops",
        "kicker": "Office Fleet",
        "blurb": "Reliable business desktops deployed at scale with imaging, asset tags and warranty.",
    },
    {
        "slug": "storage",
        "title": "Storage",
        "kicker": "SAN · NAS · Archive",
        "blurb": "All-flash arrays, hybrid NAS and cold archive tiers. NetApp, Pure, Synology, QNAP.",
    },
    {
        "slug": "parts",
        "title": "Parts & Components",
        "kicker": "Every Rack, Every Rev",
        "blurb": "Memory, CPUs, GPUs, PSUs, HBAs, drives and cabling — sourced authentic, tracked to serial.",
    },
]


@api_router.get("/catalog")
async def catalog():
    return {"categories": CATEGORIES}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
