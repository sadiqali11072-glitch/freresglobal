"""Backend API tests for Freres Global Systems."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://systems-hub-7.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health ---
def test_health(client):
    r = client.get(f"{API}/health", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "healthy"
    assert "service" in data


# --- Catalog ---
def test_catalog_returns_6_categories(client):
    r = client.get(f"{API}/catalog", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert "categories" in data
    slugs = {c["slug"] for c in data["categories"]}
    assert slugs == {"laptops", "workstations", "servers", "desktops", "storage", "parts"}
    # each category has title + blurb
    for c in data["categories"]:
        assert c.get("title")
        assert c.get("blurb")


# --- Inquiries validation ---
def test_inquiry_missing_email_returns_422(client):
    r = client.post(f"{API}/inquiries", json={
        "name": "TEST_NoEmail",
        "interest": "laptops",
        "message": "Need pricing on 20 laptops please."
    }, timeout=15)
    assert r.status_code == 422


def test_inquiry_invalid_email_returns_422(client):
    r = client.post(f"{API}/inquiries", json={
        "name": "TEST_BadEmail",
        "email": "not-an-email",
        "interest": "servers",
        "message": "Some message here"
    }, timeout=15)
    assert r.status_code == 422


# --- Inquiries create + persistence ---
def test_create_inquiry_and_verify_persistence(client):
    payload = {
        "name": "TEST_John Doe",
        "email": "test_john@freresglobal-test.com",
        "company": "TEST Corp",
        "interest": "workstations",
        "message": "Please quote 5 workstations for our CAD team."
    }
    r = client.post(f"{API}/inquiries", json=payload, timeout=15)
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["interest"] == payload["interest"]
    assert "id" in data and len(data["id"]) > 10
    assert "created_at" in data
    assert "_id" not in data
    created_id = data["id"]

    # Verify GET returns it, and most recent first
    r2 = client.get(f"{API}/inquiries?limit=50", timeout=15)
    assert r2.status_code == 200
    items = r2.json()
    assert isinstance(items, list)
    assert any(i["id"] == created_id for i in items)
    # descending order check
    ts = [i["created_at"] for i in items]
    assert ts == sorted(ts, reverse=True)


def test_list_inquiries_bad_limit(client):
    r = client.get(f"{API}/inquiries?limit=0", timeout=15)
    assert r.status_code == 400
