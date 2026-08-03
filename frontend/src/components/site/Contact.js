import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const INTERESTS = [
  { v: "laptops", l: "Laptops" },
  { v: "workstations", l: "Workstations" },
  { v: "servers", l: "Servers" },
  { v: "desktops", l: "Desktops" },
  { v: "storage", l: "Storage" },
  { v: "parts", l: "Parts" },
  { v: "services", l: "IT Services" },
];

const ease = [0.2, 0.8, 0.2, 1];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "servers",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/inquiries`, form);
      setSent(true);
      toast.success("Inquiry received. Our team will respond within one business day.");
      setForm({ name: "", email: "", company: "", interest: "servers", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail || "Something went wrong. Please try again.";
      toast.error(typeof detail === "string" ? detail : "Please check your inputs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-28 md:py-40 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="md:col-span-5"
          >
            <div className="mono-label mb-6">[ 06 · Brief us ]</div>
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-[0.98]">
              Tell us what
              <br />
              you need to ship.
            </h2>
            <p className="mt-8 text-zinc-400 leading-relaxed max-w-md">
              Send us a rough spec — fleet size, timeline, region. A senior
              account architect will scope it and quote within one business day.
            </p>

            <div className="mt-14 space-y-6">
              <div>
                <div className="mono-label mb-2">Sales</div>
                <a href="mailto:sales@freresglobal.com" data-testid="email-sales" className="ul-link text-lg">
                  sales@freresglobal.com
                </a>
              </div>
              <div>
                <div className="mono-label mb-2">Support</div>
                <a href="mailto:support@freresglobal.com" data-testid="email-support" className="ul-link text-lg">
                  support@freresglobal.com
                </a>
              </div>
              <div>
                <div className="mono-label mb-2">Offices</div>
                <p className="text-zinc-300 leading-relaxed">
                  Amsterdam · Dubai · Lagos
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            data-testid="contact-form"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="md:col-span-7 border border-white/[0.08] p-8 md:p-12 bg-[#080808]"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <label className="block">
                <span className="mono-label mb-3 block">Your name</span>
                <input
                  data-testid="input-name"
                  className="field"
                  placeholder="Ada Lovelace"
                  value={form.name}
                  onChange={update("name")}
                  required
                />
              </label>
              <label className="block">
                <span className="mono-label mb-3 block">Work email</span>
                <input
                  data-testid="input-email"
                  className="field"
                  type="email"
                  placeholder="ada@company.com"
                  value={form.email}
                  onChange={update("email")}
                  required
                />
              </label>
              <label className="block md:col-span-2">
                <span className="mono-label mb-3 block">Company</span>
                <input
                  data-testid="input-company"
                  className="field"
                  placeholder="Company / Organisation"
                  value={form.company}
                  onChange={update("company")}
                />
              </label>
            </div>

            <div className="mt-10">
              <span className="mono-label mb-4 block">I am interested in</span>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((i) => {
                  const active = form.interest === i.v;
                  return (
                    <button
                      type="button"
                      key={i.v}
                      data-testid={`interest-${i.v}`}
                      onClick={() => setForm({ ...form, interest: i.v })}
                      className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                        active
                          ? "bg-white text-black border-white"
                          : "border-white/15 text-zinc-300 hover:border-white/40"
                      }`}
                    >
                      {i.l}
                    </button>
                  );
                })}
              </div>
            </div>

            <label className="block mt-10">
              <span className="mono-label mb-3 block">Project brief</span>
              <textarea
                data-testid="input-message"
                className="field resize-none"
                rows={5}
                placeholder="Rough spec, quantities, timeline, region…"
                value={form.message}
                onChange={update("message")}
                required
              />
            </label>

            <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <p className="text-xs text-zinc-500 max-w-sm leading-relaxed">
                By submitting you agree to be contacted about your inquiry. We
                never share your details.
              </p>
              <button
                type="submit"
                data-testid="submit-inquiry"
                disabled={loading || sent}
                className="btn-solid disabled:opacity-60"
              >
                {sent ? (
                  <>
                    Received <Check size={16} />
                  </>
                ) : loading ? (
                  <>Sending…</>
                ) : (
                  <>
                    Send inquiry <ArrowUpRight size={16} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
