import Link from "next/link";

const reasons = [
  "You know your patients and their families — not just their chart",
  "Your colleagues know your name and what you're dealing with on any given day",
  "Leadership is accessible — we're building something together",
  "Your clinical judgment is trusted and valued",
];

const roles = [
  "Registered Nurse (RN) — Case Manager",
  "Hospice Aide / Certified Nursing Assistant (CNA)",
  "Medical Social Worker (MSW)",
  "Chaplain / Spiritual Care Coordinator",
  "Bereavement Counselor",
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f5f4f0] border-b border-stone-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#7A8066] text-xs uppercase tracking-widest mb-3 font-medium">Careers</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Join Our Team</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">Hospice is not for everyone. But for those who feel called to this work, it is unlike anything else in healthcare.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        <div>
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">Why Work at Lasena Health</h2>
          <p className="text-gray-700 leading-relaxed mb-6">At Lasena Health, you'll spend your days doing what most healthcare workers get into the field to do — actually caring for people. Not rushing through a 10-minute appointment. Not managing a 40-patient floor. Being present with a person and their family during one of the most meaningful times of their lives.</p>
          <p className="text-gray-700 leading-relaxed mb-6">We are a smaller, community-focused operation. That means:</p>
          <ul className="space-y-3 mb-6">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <span className="text-[#7A8066] mt-1">✓</span>
                <span className="text-gray-700">{r}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed">If you're a nurse, social worker, aide, chaplain, or bereavement counselor who believes that end-of-life care is a calling — not just a job — we'd like to hear from you.</p>
        </div>

        <div className="border-t border-gray-200 pt-10">
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">Open Positions</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 text-sm text-yellow-800 mb-6">
            📝 Confirm current open roles and application method with Chad before publishing.
          </div>
          <ul className="space-y-3 mb-8">
            {roles.map((r) => (
              <li key={r} className="border border-gray-200 rounded px-5 py-4 text-gray-700 font-medium">{r}</li>
            ))}
          </ul>
          <a href="mailto:jobs@lasenahealth.com" className="inline-block bg-[#7A8066] text-white px-6 py-3 text-sm font-semibold rounded hover:bg-[#5e6350] transition-colors">Apply Now →</a>
        </div>

        <div className="pt-8 border-t border-gray-100">
          <Link href="/" className="text-gray-400 text-sm hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
