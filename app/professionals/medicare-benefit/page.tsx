import Link from "next/link";

const keyPoints = [
  { title: "Physician certification", desc: "The attending physician and hospice medical director must both certify a six-month prognosis at enrollment, and again at each benefit period renewal." },
  { title: "Attending physician's role", desc: "You remain the patient's attending physician throughout hospice. Lasena Health's medical director oversees hospice-related care, but the attending physician continues to direct overall medical care. Billing for physician visits continues as normal for non-hospice diagnoses." },
  { title: "Communication", desc: "Our clinical team will provide regular updates on the patient's status, care plan changes, and significant clinical events. We will contact you promptly for any urgent changes." },
  { title: "Medication management", desc: "The MHB covers medications related to the terminal diagnosis. Medications for other conditions continue to be covered by Medicare Part D." },
  { title: "Documentation", desc: "We handle NOPP, election statements, and benefit period certifications. We will coordinate with your office for required physician signatures." },
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#7A8066] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-300 text-xs uppercase tracking-widest mb-3 font-medium">Healthcare Professionals</p>
          <h1 className="font-serif text-4xl font-bold text-white mb-4" style={{ color: "white" }}>Medicare Hospice Benefit</h1>
          <p className="text-stone-200 text-lg max-w-2xl leading-relaxed">A clinical overview for referring physicians and healthcare professionals.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <p className="text-gray-700 leading-relaxed text-lg">The Medicare Hospice Benefit (MHB) covers a comprehensive range of services under a per-diem payment model. Key points for referring clinicians:</p>

        <div className="space-y-6">
          {keyPoints.map((kp) => (
            <div key={kp.title} className="border border-gray-200 rounded p-6">
              <h2 className="font-semibold text-gray-800 mb-2">{kp.title}</h2>
              <p className="text-gray-600 leading-relaxed text-sm">{kp.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded p-8">
          <p className="font-serif font-bold text-xl mb-3" style={{ color: "white" }}>Questions?</p>
          <p className="text-gray-300 mb-4">Contact our medical director or referral team directly.</p>
          <a href="tel:+18005551234" className="inline-block bg-[#7A8066] text-white px-5 py-2 text-sm font-semibold rounded hover:bg-[#5e6350] transition-colors">📞 (800) 555-1234</a>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <Link href="/professionals" className="text-gray-400 text-sm hover:underline">← Healthcare Professionals</Link>
        </div>
      </div>
    </div>
  );
}
