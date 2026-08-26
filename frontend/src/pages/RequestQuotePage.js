import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, Check, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import PageHeader from "@/components/site/PageHeader";
import { CONTACT, CUSTOMER_TYPES, PRODUCT_CATEGORIES, SOLUTIONS } from "@/lib/site-data";

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ALL_INTERESTS = [
  ...PRODUCT_CATEGORIES.map((c) => ({ v: c.slug, l: c.title })),
  ...SOLUTIONS.map((s) => ({ v: s.slug, l: s.title })),
];

const ease = [0.2, 0.8, 0.2, 1];

function emptyLine(product = "") {
  return { product, quantity: "", requirements: "" };
}

export default function RequestQuotePage() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    customerType: CUSTOMER_TYPES[0],
  });
  const [lines, setLines] = useState([emptyLine()]);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const interest = searchParams.get("interest");
    if (interest) {
      const match = ALL_INTERESTS.find((i) => i.v === interest);
      if (match) setLines([emptyLine(match.l)]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const updateLine = (idx, k) => (e) => {
    const next = [...lines];
    next[idx] = { ...next[idx], [k]: e.target.value };
    setLines(next);
  };
  const addLine = () => setLines([...lines, emptyLine()]);
  const removeLine = (idx) => setLines(lines.filter((_, i) => i !== idx));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !lines[0]?.product) {
      toast.error("Please complete your details and at least one product line.");
      return;
    }
    setLoading(true);
    try {
      const lineItemsText = lines
        .filter((l) => l.product)
        .map(
          (l, i) =>
            `${i + 1}. ${l.product} — Qty: ${l.quantity || "—"} — ${l.requirements || "No additional notes"}`
        )
        .join("\n");

      const message = `Customer type: ${form.customerType}\nCountry: ${form.country || "—"}\n\nLine items:\n${lineItemsText}`;

      if (WEB3FORMS_KEY) {
        const payload = {
          access_key: WEB3FORMS_KEY,
          subject: `New quote request from ${form.name} (${form.company || "—"})`,
          from_name: "freresglobal.com — Request a Quote",
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company || "—",
          message,
        };
        const res = await axios.post("https://api.web3forms.com/submit", payload, {
          headers: { "Content-Type": "application/json", Accept: "application/json" },
        });
        if (!res?.data?.success) throw new Error(res?.data?.message || "Submission failed");
      } else if (BACKEND_URL) {
        await axios.post(`${BACKEND_URL}/api/quotes`, { ...form, lines });
      } else {
        throw new Error("No form backend configured. Set REACT_APP_WEB3FORMS_KEY.");
      }
      setSent(true);
      toast.success("Quote request received. Our team will respond within one business day.");
      setForm({ name: "", company: "", email: "", phone: "", country: "", customerType: CUSTOMER_TYPES[0] });
      setLines([emptyLine()]);
    } catch (err) {
      const detail =
        err?.response?.data?.detail ||
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong. Please try again.";
      toast.error(typeof detail === "string" ? detail : "Please check your inputs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main data-testid="request-quote-page">
      <PageHeader
        eyebrow="[ Request a Quote ]"
        title="One request. Any number of line items."
        subtitle="A single laptop or a fleet-wide rollout — tell us what you need and we'll price it as one order. Servers, enterprise hardware, bulk and custom sourcing all run through this same flow."
      />

      <section className="relative pb-28 md:pb-40">
        <div className="mx-auto max-w-[900px] px-6 md:px-12">
          <motion.form
            onSubmit={submit}
            data-testid="quote-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="border border-white/[0.08] p-8 md:p-12 bg-[#080808]"
          >
            <div className="mono-label mb-6">Your details</div>
            <div className="grid md:grid-cols-2 gap-8">
              <label className="block">
                <span className="mono-label mb-3 block">Full name</span>
                <input data-testid="qf-name" className="field" value={form.name} onChange={update("name")} required />
              </label>
              <label className="block">
                <span className="mono-label mb-3 block">Company / Organisation</span>
                <input data-testid="qf-company" className="field" value={form.company} onChange={update("company")} />
              </label>
              <label className="block">
                <span className="mono-label mb-3 block">Email</span>
                <input data-testid="qf-email" type="email" className="field" value={form.email} onChange={update("email")} required />
              </label>
              <label className="block">
                <span className="mono-label mb-3 block">Phone</span>
                <input data-testid="qf-phone" className="field" value={form.phone} onChange={update("phone")} required />
              </label>
              <label className="block">
                <span className="mono-label mb-3 block">Country</span>
                <input data-testid="qf-country" className="field" placeholder="Ghana" value={form.country} onChange={update("country")} />
              </label>
              <label className="block">
                <span className="mono-label mb-3 block">Customer type</span>
                <select data-testid="qf-customer-type" className="field" value={form.customerType} onChange={update("customerType")}>
                  {CUSTOMER_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mono-label mb-6 mt-14">Line items</div>
            <div className="space-y-6">
              {lines.map((line, idx) => (
                <div key={idx} className="border border-white/[0.08] p-5 md:p-6 relative">
                  {lines.length > 1 && (
                    <button
                      type="button"
                      data-testid={`qf-remove-line-${idx}`}
                      onClick={() => removeLine(idx)}
                      className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                      aria-label="Remove line item"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                  <div className="grid md:grid-cols-3 gap-6">
                    <label className="block md:col-span-2">
                      <span className="mono-label mb-3 block">Product / model / category</span>
                      <input
                        data-testid={`qf-product-${idx}`}
                        className="field"
                        placeholder="e.g. Lenovo ThinkPad, or 'Servers & Enterprise Compute'"
                        value={line.product}
                        onChange={updateLine(idx, "product")}
                        required={idx === 0}
                      />
                    </label>
                    <label className="block">
                      <span className="mono-label mb-3 block">Quantity</span>
                      <input
                        data-testid={`qf-quantity-${idx}`}
                        className="field"
                        placeholder="1"
                        value={line.quantity}
                        onChange={updateLine(idx, "quantity")}
                      />
                    </label>
                  </div>
                  <label className="block mt-6">
                    <span className="mono-label mb-3 block">Requirements / spec notes</span>
                    <textarea
                      data-testid={`qf-requirements-${idx}`}
                      className="field resize-none"
                      rows={2}
                      placeholder="Spec, timeline, anything we should know"
                      value={line.requirements}
                      onChange={updateLine(idx, "requirements")}
                    />
                  </label>
                </div>
              ))}
            </div>

            <button
              type="button"
              data-testid="qf-add-line"
              onClick={addLine}
              className="btn-pill mt-6"
            >
              <Plus size={14} /> Add another line item
            </button>

            <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-white/[0.07] pt-10">
              <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
                By submitting you agree to be contacted about this request. We
                never share your details. Prefer to call or message?{" "}
                {CONTACT.phones.map((p, i) => (
                  <React.Fragment key={p.number}>
                    {i > 0 && " · "}
                    <a href={p.href} className="ul-link">{p.number}</a>
                  </React.Fragment>
                ))}
                {CONTACT.whatsapp && (
                  <>
                    {" · "}
                    <a href={CONTACT.whatsapp.href} target="_blank" rel="noreferrer" className="ul-link">WhatsApp</a>
                  </>
                )}
              </p>
              <button
                type="submit"
                data-testid="qf-submit"
                disabled={loading || sent}
                className="btn-solid disabled:opacity-60 shrink-0"
              >
                {sent ? (
                  <>Received <Check size={16} /></>
                ) : loading ? (
                  <>Sending…</>
                ) : (
                  <>Send quote request <ArrowUpRight size={16} /></>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
