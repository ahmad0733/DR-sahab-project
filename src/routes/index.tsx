import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroFarm from "@/assets/hero-farm.jpg";
import doctorAsset from "@/assets/doctor-portrait.png.asset.json";

const WHATSAPP_NUMBER = "923005567345";
const WHATSAPP_DISPLAY = "+92 300 5567345";

const TITLE = "Dr. Shehzad Bajwa, DVM — Poultry Health & Farm Consultant";
const DESC =
  "Expert poultry health and farm management consultancy. Reduce mortality, improve FCR, and increase farm profitability with Dr. Shehzad Bajwa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function waUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Landing() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-neutral-900">
      <JsonLd />
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Process />
      <Tools />
      <SymptomChecker />
      <Stories />
      <Testimonials />
      <Certifications />
      <Resources />
      <Appointment />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Shehzad Bajwa",
    medicalSpecialty: "Veterinary - Poultry",
    telephone: WHATSAPP_DISPLAY,
    description: DESC,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function Nav() {
  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Tools", "#tools"],
    ["Stories", "#stories"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-40 glass border-b border-white/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--color-brand)] text-white font-bold">
            S
          </span>
          <span className="font-display text-xl leading-none">
            Dr. Shehzad Bajwa
          </span>
        </a>
        <nav className="hidden gap-7 md:flex">
          {links.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="text-sm font-medium text-neutral-700 hover:text-[var(--color-brand)] transition"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#appointment"
          className="rounded-full bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 hover:bg-[var(--color-brand-dark)] transition"
        >
          Book Appointment
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroFarm}
        alt="Modern poultry farm"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-dark)]/85 via-[var(--color-brand)]/70 to-black/70" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
        <div className="animate-float-up text-white">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-medium tracking-wide uppercase text-white/90">
            <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
            Poultry Health Consultant
          </span>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Dr. Shehzad <br />
            <span className="italic text-[var(--color-gold-light)]">Bajwa</span>, DVM
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">
            Poultry Health & Farm Management Consultant
          </p>
          <p className="mt-3 text-base text-white/75">
            Reduce Mortality · Improve FCR · Increase Farm Profitability
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#appointment"
              className="rounded-full bg-[var(--color-gold)] px-6 py-3 font-semibold text-neutral-900 shadow-xl shadow-amber-900/30 hover:bg-[var(--color-gold-light)] transition"
            >
              Book Appointment
            </a>
            <a
              href={waUrl("Assalam-o-Alaikum Dr. Shehzad Bajwa. I would like a consultation.")}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-white/40 glass-dark px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              WhatsApp Consultation
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-white/80">
            <Stat n="15+" l="Years Experience" />
            <Stat n="500+" l="Farms Served" />
            <Stat n="3%" l="Avg Mortality Achieved" />
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm animate-float-up">
          <div className="absolute -inset-4 rounded-3xl bg-[var(--color-gold)]/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border-4 border-white/30 shadow-2xl">
            <img
src={doctorAsset.url}
              alt="Dr. Shehzad Bajwa portrait"
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-[var(--color-gold-light)]">{n}</div>
      <div className="text-xs uppercase tracking-wider text-white/70">{l}</div>
    </div>
  );
}

function SectionHead({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
        {tag}
      </span>
      <h2 className="mt-3 font-display text-4xl md:text-5xl text-neutral-900">{title}</h2>
      {sub && <p className="mt-4 text-neutral-600">{sub}</p>}
    </div>
  );
}

function About() {
  const quals = [
    "Doctor of Veterinary Medicine (DVM)",
    "M.Sc. Poultry Science",
    "Certified Poultry Health Specialist",
    "15+ years field consultancy",
  ];
  const expertise = [
    "Broiler & Layer Management",
    "Disease Diagnosis & Control",
    "Vaccination & Biosecurity",
    "Feed & Nutrition Optimization",
    "Hatchery Performance",
    "Farm Profitability Analysis",
  ];
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead tag="About" title="A consultant farmers trust" />
      <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-[var(--color-brand)]/10 blur-xl" />
          <img
            src={doctorAsset.url}
            alt="Dr. Shehzad Bajwa"
            loading="lazy"
            className="relative w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
        <div>
          <p className="text-lg leading-relaxed text-neutral-700">
            Dr. Shehzad Bajwa has spent over a decade and a half helping commercial
            poultry farms in Pakistan and beyond cut losses, raise productivity,
            and run profitable, modern operations. His approach blends field-tested
            biosecurity, evidence-based vaccination, and data-driven feed strategy.
          </p>
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Card title="Qualifications" items={quals} />
            <Card title="Expertise" items={expertise} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl glass p-5 shadow-md">
      <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand)]">
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex gap-2 text-sm text-neutral-700">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

const SERVICES = [
  { t: "Disease Diagnosis", d: "Rapid field diagnosis and lab-correlated treatment protocols for ND, IB, Gumboro, coccidiosis and more.", i: "🩺" },
  { t: "Vaccination Programs", d: "Customized vaccination schedules tailored to your strain, region, and disease pressure.", i: "💉" },
  { t: "Biosecurity Planning", d: "Farm-specific biosecurity audits and SOPs to keep diseases out and birds healthy.", i: "🛡️" },
  { t: "Farm Visits", d: "On-site inspections, performance reviews, and corrective action plans.", i: "🚜" },
  { t: "Feed Optimization", d: "Ration analysis and feed strategy to improve FCR and lower cost per kg.", i: "🌾" },
  { t: "Hatchery Consultancy", d: "Hatchability, chick quality, and incubation parameter optimization.", i: "🥚" },
];

function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          tag="Services"
          title="Built for serious farms"
          sub="Six core consultancy services covering the full lifecycle of a poultry operation."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.t}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[var(--color-brand)] hover:shadow-xl"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-brand)]/10 text-2xl">
                {s.i}
              </div>
              <h3 className="mt-4 font-display text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section id="tools" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-brand-dark)] to-[var(--color-brand)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-light)]">
            Free Tools
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-white">
            Poultry calculators
          </h2>
          <p className="mt-3 text-white/75">
            Run the numbers on your flock right here. Free, instant, no signup.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <MortalityCalc />
          <FcrCalc />
          <FeedCostCalc />
          <ProfitCalc />
        </div>
      </div>
    </section>
  );
}

function ToolShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-6 shadow-xl">
      <h3 className="font-display text-2xl text-[var(--color-brand-dark)]">{title}</h3>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function Field({ label, value, onChange, suffix }: {
  label: string; value: string; onChange: (v: string) => void; suffix?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">{label}</span>
      <div className="mt-1 flex items-center rounded-lg border border-neutral-300 bg-white/80 focus-within:border-[var(--color-brand)]">
        <input
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent px-3 py-2 outline-none"
        />
        {suffix && <span className="px-3 text-sm text-neutral-500">{suffix}</span>}
      </div>
    </label>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-2 rounded-lg bg-[var(--color-brand)] px-4 py-3 text-white">
      <div className="text-xs uppercase tracking-wider text-white/70">{label}</div>
      <div className="font-display text-2xl text-[var(--color-gold-light)]">{value}</div>
    </div>
  );
}

function MortalityCalc() {
  const [total, setTotal] = useState("1000");
  const [dead, setDead] = useState("30");
  const t = +total || 0; const d = +dead || 0;
  const m = t > 0 ? (d / t) * 100 : 0;
  return (
    <ToolShell title="Mortality Calculator">
      <Field label="Total Birds" value={total} onChange={setTotal} />
      <Field label="Dead Birds" value={dead} onChange={setDead} />
      <Result label="Mortality Rate" value={`${m.toFixed(2)}%`} />
    </ToolShell>
  );
}

function FcrCalc() {
  const [feed, setFeed] = useState("3200");
  const [weight, setWeight] = useState("2000");
  const f = +feed || 0; const w = +weight || 0;
  const fcr = w > 0 ? f / w : 0;
  return (
    <ToolShell title="FCR Calculator">
      <Field label="Total Feed Consumed" value={feed} onChange={setFeed} suffix="kg" />
      <Field label="Total Weight Gain" value={weight} onChange={setWeight} suffix="kg" />
      <Result label="Feed Conversion Ratio" value={fcr.toFixed(2)} />
    </ToolShell>
  );
}

function FeedCostCalc() {
  const [kg, setKg] = useState("3200");
  const [rate, setRate] = useState("140");
  const c = (+kg || 0) * (+rate || 0);
  return (
    <ToolShell title="Feed Cost Calculator">
      <Field label="Feed Quantity" value={kg} onChange={setKg} suffix="kg" />
      <Field label="Price per kg" value={rate} onChange={setRate} suffix="PKR" />
      <Result label="Total Feed Cost" value={`PKR ${c.toLocaleString()}`} />
    </ToolShell>
  );
}

function ProfitCalc() {
  const [revenue, setRevenue] = useState("600000");
  const [cost, setCost] = useState("450000");
  const p = (+revenue || 0) - (+cost || 0);
  const margin = +revenue > 0 ? (p / +revenue) * 100 : 0;
  return (
    <ToolShell title="Profit Calculator">
      <Field label="Total Revenue" value={revenue} onChange={setRevenue} suffix="PKR" />
      <Field label="Total Cost" value={cost} onChange={setCost} suffix="PKR" />
      <Result label={`Net Profit (${margin.toFixed(1)}% margin)`} value={`PKR ${p.toLocaleString()}`} />
    </ToolShell>
  );
}

const STORIES = [
  { farm: "Broiler Farm, Sheikhupura", before: "Mortality 10%", after: "Mortality 3%", note: "Biosecurity overhaul + revised vaccination" },
  { farm: "Layer Farm, Lahore", before: "FCR 1.95", after: "FCR 1.62", note: "Feed reformulation and brooding correction" },
  { farm: "Layer Farm, Faisalabad", before: "78% production", after: "92% production", note: "Lighting program & nutrition tuning" },
];

function Stories() {
  return (
    <section id="stories" className="bg-[var(--color-cream)] py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead tag="Success Stories" title="Real farms. Real results." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {STORIES.map((s) => (
            <div key={s.farm} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-wider text-neutral-500">{s.farm}</div>
              <div className="mt-4 flex items-center gap-3">
                <span className="rounded-lg bg-red-50 px-3 py-1 text-sm font-semibold text-red-700 line-through">
                  {s.before}
                </span>
                <span className="text-neutral-400">→</span>
                <span className="rounded-lg bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {s.after}
                </span>
              </div>
              <p className="mt-4 text-sm text-neutral-600">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Appointment() {
  const [form, setForm] = useState({
    name: "", phone: "", farmType: "Broiler", birds: "", problem: "",
  });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Assalam-o-Alaikum Dr. Shehzad Bajwa. I would like a consultation.

Name: ${form.name}
Phone: ${form.phone}
Farm Type: ${form.farmType}
Number of Birds: ${form.birds}
Problem: ${form.problem}`;
    window.open(waUrl(msg), "_blank");
  };

  const input = "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-[var(--color-brand)]";

  return (
    <section id="appointment" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-dark)] via-[var(--color-brand)] to-[var(--color-brand-dark)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center">
        <div className="text-white">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-light)]">
            Appointment
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Book a consultation</h2>
          <p className="mt-4 text-white/80">
            Tell us about your farm. We'll continue the conversation on WhatsApp
            so you get a fast, personal reply from Dr. Shehzad's team.
          </p>
          <div className="mt-6 rounded-2xl glass-dark p-5">
            <div className="text-sm text-white/80">Prefer to chat now?</div>
            <a
              href={waUrl("Assalam-o-Alaikum Dr. Shehzad Bajwa.")}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center gap-2 font-semibold text-[var(--color-gold-light)]"
            >
              WhatsApp {WHATSAPP_DISPLAY} →
            </a>
          </div>
        </div>
        <form onSubmit={submit} className="rounded-3xl glass p-6 shadow-2xl">
          <div className="grid gap-3 sm:grid-cols-2">
            <input required placeholder="Your name" value={form.name} onChange={update("name")} className={input} />
            <input required placeholder="Phone number" value={form.phone} onChange={update("phone")} className={input} />
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <select value={form.farmType} onChange={update("farmType")} className={input}>
              <option>Broiler</option>
              <option>Layer</option>
              <option>Breeder</option>
              <option>Hatchery</option>
            </select>
            <input required placeholder="Number of birds" value={form.birds} onChange={update("birds")} className={input} />
          </div>
          <textarea
            required placeholder="Describe the problem you're facing..."
            value={form.problem} onChange={update("problem")} rows={4}
            className={`${input} mt-3 resize-none`}
          />
          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-[var(--color-brand)] py-3 font-semibold text-white shadow-lg hover:bg-[var(--color-brand-dark)] transition"
          >
            Send via WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-neutral-600">
            Opens WhatsApp with your details pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}

const FAQS = [
  { q: "How quickly can you visit my farm?", a: "Typical on-site visits are scheduled within 48–72 hours depending on location and urgency." },
  { q: "Do you handle small backyard flocks?", a: "Our focus is commercial operations (1,000+ birds), but we offer remote consultations for smaller flocks." },
  { q: "What information should I share first?", a: "Flock age, breed, mortality pattern, feed type, and recent vaccinations help us respond fastest." },
  { q: "Do you work outside Pakistan?", a: "Yes — remote consultancy is available globally over WhatsApp and video call." },
  { q: "What are your consultation fees?", a: "Fees depend on flock size and scope. Share your details and we'll send a quote on WhatsApp." },
];

function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHead tag="FAQ" title="Common questions" />
        <div className="mt-10 divide-y divide-neutral-200">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-neutral-900">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-cream)] py-24">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
        <ContactCard icon="💬" title="WhatsApp" lines={[WHATSAPP_DISPLAY, "24/7 inquiries"]} href={waUrl("Hello Dr. Shehzad")} />
        <ContactCard icon="📍" title="Service Area" lines={["Punjab, Pakistan", "Remote globally"]} />
        <ContactCard icon="🕐" title="Hours" lines={["Mon–Sat 9am – 8pm", "Emergency: anytime"]} />
      </div>
    </section>
  );
}

function ContactCard({ icon, title, lines, href }: { icon: string; title: string; lines: string[]; href?: string }) {
  const inner = (
    <div className="h-full rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-[var(--color-brand)] hover:shadow-lg">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-3 font-display text-2xl">{title}</h3>
      {lines.map((l) => <p key={l} className="text-sm text-neutral-600">{l}</p>)}
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener">{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="bg-[var(--color-brand-dark)] py-10 text-center text-sm text-white/70">
      © {new Date().getFullYear()} Dr. Shehzad Bajwa Poultry Consultancy. All rights reserved.
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a
      href={waUrl("Assalam-o-Alaikum Dr. Shehzad Bajwa.")}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="animate-pulse-ring fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl ring-4 ring-[var(--color-gold)]/40 hover:scale-110 transition"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.93 11.93 0 0 0 12.05 0C5.5 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.31-1.66a11.9 11.9 0 0 0 5.73 1.46h.01c6.55 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.43-8.41ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.46 4.45-9.9 9.91-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.45 9.89-9.91 9.89Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}

/* ---------- Trust marquee ---------- */
function TrustBar() {
  const partners = [
    "Big Bird Feeds", "Sadiq Poultry", "Olympia Feeds", "Hi-Tech Feeds",
    "Islamabad Hatchery", "Punjab Broilers", "Salman Poultry", "Pak Layers",
  ];
  const row = [...partners, ...partners];
  return (
    <section aria-label="Trusted by" className="border-y border-neutral-200 bg-white py-6 overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Trusted by leading poultry operations
        </p>
      </div>
      <div className="relative mt-5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-5">
          {row.map((p, i) => (
            <span key={i} className="font-display text-xl text-neutral-400 hover:text-[var(--color-brand)] transition">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */
function Process() {
  const steps = [
    { n: "01", t: "Share your problem", d: "Send flock details on WhatsApp or via the form. Get a response within hours." },
    { n: "02", t: "Diagnosis", d: "Symptom review, lab correlation, and a clear root-cause report for your farm." },
    { n: "03", t: "Action plan", d: "Custom vaccination, biosecurity, feed, and management protocol tailored to your flock." },
    { n: "04", t: "Follow-up", d: "Weekly performance review until KPIs (mortality, FCR, production) are back on track." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead tag="Process" title="How a consultation works" sub="A simple 4-step engagement model designed for busy farm managers." />
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl border border-neutral-200 bg-[var(--color-cream)] p-6">
              <div className="font-display text-5xl text-[var(--color-gold)]">{s.n}</div>
              <h3 className="mt-3 font-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-[-14px] top-1/2 hidden h-px w-7 bg-[var(--color-brand)]/30 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Symptom Checker ---------- */
const SYMPTOMS = [
  { id: "resp", label: "Coughing / sneezing / gasping", group: "respiratory" },
  { id: "swell", label: "Facial / sinus swelling", group: "respiratory" },
  { id: "drop", label: "Sudden egg production drop", group: "newcastle" },
  { id: "nerv", label: "Twisted neck / paralysis", group: "newcastle" },
  { id: "diar", label: "Watery / greenish diarrhea", group: "newcastle" },
  { id: "blood", label: "Bloody droppings", group: "cocci" },
  { id: "pale", label: "Pale comb, ruffled feathers", group: "cocci" },
  { id: "bursa", label: "Whitish watery droppings (young birds)", group: "gumboro" },
  { id: "depr", label: "Severe depression in 3–6 week birds", group: "gumboro" },
];

const DIAGNOSES: Record<string, { name: string; advice: string }> = {
  respiratory: { name: "Likely Respiratory Disease (IB / Mycoplasma)", advice: "Isolate flock, check ventilation and ammonia, and consult immediately for antibiotic + vaccination review." },
  newcastle: { name: "Suspected Newcastle Disease (ND)", advice: "Urgent — confirm with lab, enforce strict biosecurity, and review ND vaccination titres." },
  cocci: { name: "Suspected Coccidiosis", advice: "Inspect litter and intestines, start anticoccidial therapy, and review brooding hygiene." },
  gumboro: { name: "Suspected Gumboro (IBD)", advice: "Boost biosecurity, supportive therapy with vitamins/electrolytes, and revise vaccination program." },
};

function SymptomChecker() {
  const [picked, setPicked] = useState<Set<string>>(new Set());
  const toggle = (id: string) => {
    const n = new Set(picked);
    n.has(id) ? n.delete(id) : n.add(id);
    setPicked(n);
  };
  const tally: Record<string, number> = {};
  SYMPTOMS.forEach((s) => { if (picked.has(s.id)) tally[s.group] = (tally[s.group] || 0) + 1; });
  const top = Object.entries(tally).sort((a, b) => b[1] - a[1])[0];
  const diag = top ? DIAGNOSES[top[0]] : null;

  return (
    <section className="bg-[var(--color-cream)] py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHead tag="Interactive Tool" title="Disease Symptom Checker" sub="Tick the symptoms you observe. Get an instant indicative diagnosis — not a substitute for a vet visit." />
        <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand)]">Symptoms observed</h4>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {SYMPTOMS.map((s) => (
                <label key={s.id} className={`flex cursor-pointer items-start gap-2 rounded-lg border p-3 text-sm transition ${picked.has(s.id) ? "border-[var(--color-brand)] bg-[var(--color-brand)]/5" : "border-neutral-200 hover:border-[var(--color-brand)]/40"}`}>
                  <input type="checkbox" checked={picked.has(s.id)} onChange={() => toggle(s.id)} className="mt-1 accent-[var(--color-brand)]" />
                  <span>{s.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[var(--color-brand-dark)] to-[var(--color-brand)] p-6 text-white shadow-xl">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-gold-light)]">Indicative diagnosis</h4>
            {diag ? (
              <>
                <p className="mt-4 font-display text-2xl text-[var(--color-gold-light)]">{diag.name}</p>
                <p className="mt-3 text-sm text-white/85">{diag.advice}</p>
              </>
            ) : (
              <p className="mt-4 text-sm text-white/75">Select symptoms on the left to see a likely diagnosis.</p>
            )}
            <a
              href={waUrl("Dr. Shehzad, I used the symptom checker. Please advise on next steps.")}
              target="_blank"
              rel="noopener"
              className="mt-6 inline-block rounded-full bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-[var(--color-gold-light)] transition"
            >
              Confirm with Dr. Shehzad →
            </a>
            <p className="mt-3 text-xs text-white/60">Educational tool — confirm with a clinical visit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const TESTIMONIALS = [
  { n: "Muhammad Asif", role: "Broiler Farm Owner, Sheikhupura", q: "Dr. Shehzad turned our farm around in one cycle. Mortality dropped from 10% to under 3% — his vaccination plan is gold.", a: "MA" },
  { n: "Fatima Trading Co.", role: "Layer Operation, Lahore", q: "We saved over PKR 1.2M in feed cost in 6 months after his FCR consultation. Highly recommended.", a: "FT" },
  { n: "Imran Khalid", role: "Hatchery Manager, Faisalabad", q: "Hatchability went from 78% to 91%. Professional, responsive, and deeply technical.", a: "IK" },
];

function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead tag="Testimonials" title="What clients say" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.n} className="flex flex-col rounded-2xl border border-neutral-200 bg-[var(--color-cream)] p-6 shadow-sm">
              <div className="text-[var(--color-gold)]">★★★★★</div>
              <blockquote className="mt-3 flex-1 text-neutral-700">"{t.q}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-brand)] font-bold text-white">{t.a}</span>
                <div>
                  <div className="font-semibold text-neutral-900">{t.n}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Certifications ---------- */
function Certifications() {
  const items = [
    { t: "PVMC Registered", d: "Pakistan Veterinary Medical Council" },
    { t: "WPSA Member", d: "World's Poultry Science Association" },
    { t: "Ceva Certified", d: "Advanced vaccination protocols" },
    { t: "HACCP Trained", d: "Food safety & biosecurity" },
  ];
  return (
    <section className="bg-[var(--color-cream)] py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead tag="Credentials" title="Certifications & affiliations" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.t} className="rounded-2xl border border-[var(--color-gold)]/40 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[var(--color-gold)]/15 text-2xl text-[var(--color-gold)]">
                ✓
              </div>
              <h4 className="mt-4 font-display text-lg">{i.t}</h4>
              <p className="mt-1 text-sm text-neutral-600">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Resources ---------- */
const RESOURCES = [
  { t: "Broiler Vaccination Schedule", d: "Day 1 to market — a printable timeline.", tag: "PDF Guide" },
  { t: "Biosecurity Checklist", d: "30-point audit for commercial poultry farms.", tag: "Checklist" },
  { t: "Brooding Temperature Chart", d: "Week-by-week temperature & humidity targets.", tag: "Chart" },
];

function Resources() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead tag="Free Resources" title="Guides for farm managers" sub="Practical, field-ready documents — request any of these on WhatsApp." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {RESOURCES.map((r) => (
            <a
              key={r.t}
              href={waUrl(`Please send me the resource: ${r.t}`)}
              target="_blank"
              rel="noopener"
              className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-[var(--color-cream)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-brand)] hover:shadow-xl"
            >
              <div>
                <span className="inline-block rounded-full bg-[var(--color-brand)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-brand)]">
                  {r.tag}
                </span>
                <h4 className="mt-4 font-display text-xl">{r.t}</h4>
                <p className="mt-2 text-sm text-neutral-600">{r.d}</p>
              </div>
              <div className="mt-5 text-sm font-semibold text-[var(--color-brand)] group-hover:translate-x-1 transition">
                Request via WhatsApp →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

