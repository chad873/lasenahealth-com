import Link from "next/link";

const criteria = [
  "Two physicians certify a prognosis of six months or less if the illness runs its normal course (the patient's attending physician and the hospice medical director)",
  "The patient has a terminal diagnosis, including cancer, heart failure, COPD, dementia, renal failure, liver disease, ALS, stroke, and others",
  "The patient elects comfort-focused care and agrees to forgo curative treatment for the terminal diagnosis",
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#7A8066] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-300 text-xs uppercase tracking-widest mb-3 font-medium">Healthcare Professionals</p>
          <h1 className="font-serif text-4xl font-bold text-white mb-4" style={{ color: "white" }}>Hospice Eligibility Guidelines</h1>
          <p className="text-stone-200 text-lg max-w-2xl leading-relaxed">A clinical reference for physicians and other referring providers.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div>
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">Medicare Hospice Eligibility Criteria</h2>
          <p className="text-gray-700 leading-relaxed mb-6">A patient is eligible for the Medicare Hospice Benefit when:</p>
          <ul className="space-y-4">
            {criteria.map((c) => (
              <li key={c} className="flex items-start gap-3 border-b border-gray-100 pb-4">
                <span className="text-[#7A8066] mt-1">✓</span>
                <span className="text-gray-700">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#f5f4f0] border border-stone-300 rounded p-6">
          <p className="font-semibold text-gray-800 mb-2">Important clinical notes</p>
          <p className="text-gray-600 leading-relaxed">The six-month prognosis is a clinical judgment, not a guarantee. Patients can remain on hospice beyond six months if they continue to decline. If a patient improves, they can be discharged from hospice and re-enrolled later.</p>
          <p className="text-gray-600 leading-relaxed mt-3">Common clinical indicators for specific diagnoses are available on request. Contact our medical director if you have questions about a specific patient.</p>
        </div>

        <div className="bg-gray-900 text-white rounded p-8">
          <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "white" }}>Questions about a specific patient?</h2>
          <p className="text-gray-300 mb-4">Call our referral line, we'll help you assess eligibility at no obligation.</p>
          <a href="tel:+18005551234" className="inline-block bg-[#7A8066] text-white px-5 py-2 text-sm font-semibold rounded hover:bg-[#5e6350] transition-colors">📞 (800) 555-1234</a>
        </div>

        <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4">
          <Link href="/professionals/medicare-benefit" className="text-[#7A8066] text-sm font-medium hover:underline">Next: Medicare Hospice Benefit →</Link>
          <Link href="/professionals/refer-a-patient" className="text-gray-400 text-sm hover:underline ml-auto">← Refer a Patient</Link>
        </div>
      </div>
    </div>
  );
}
