import Link from "next/link";

const medicareCovers = [
  "Physician services related to the terminal diagnosis",
  "Skilled nursing visits",
  "Medical equipment (hospital beds, wheelchairs, etc.)",
  "Medications for pain and symptom management",
  "Aide and homemaker services",
  "Social work, counseling, and spiritual care",
  "Bereavement support for up to 13 months",
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f5f4f0] border-b border-stone-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#7A8066] text-xs uppercase tracking-widest mb-3 font-medium">Hospice Care</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Paying for Hospice</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">Most hospice patients have little to no out-of-pocket costs. Here's how hospice care is covered.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        <div>
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">Medicare Hospice Benefit</h2>
          <p className="text-gray-700 leading-relaxed mb-6">Most hospice patients qualify for the Medicare Hospice Benefit, which covers virtually all hospice services at no out-of-pocket cost. This includes:</p>
          <ul className="space-y-3 mb-6">
            {medicareCovers.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#7A8066] mt-1">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 leading-relaxed">To qualify, the patient's physician and the hospice physician must certify that the patient has a life expectancy of six months or less if the illness runs its normal course. The patient must also agree to receive comfort-focused care rather than curative treatment for their terminal diagnosis.</p>
        </div>

        <div className="border-t border-gray-200 pt-10">
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">Medicaid</h2>
          <p className="text-gray-600 leading-relaxed">Medicaid also covers hospice care in most states. Benefits are similar to Medicare. Our team can help determine eligibility and navigate the process.</p>
        </div>

        <div className="border-t border-gray-200 pt-10">
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">Private Insurance</h2>
          <p className="text-gray-600 leading-relaxed">Many private insurance plans cover hospice care, though benefits vary by plan. Our admissions team will verify your insurance and walk you through what's covered before you commit to anything.</p>
        </div>

        <div className="bg-[#7A8066] text-white rounded p-8">
          <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "white" }}>What if I don't have insurance?</h2>
          <p className="text-stone-200 leading-relaxed mb-4">We believe everyone deserves compassionate end-of-life care, regardless of ability to pay. Contact us to discuss your situation — we'll do everything we can to help.</p>
          <a href="tel:+18005551234" className="inline-block bg-white text-[#7A8066] px-5 py-2 text-sm font-semibold rounded hover:bg-stone-50 transition-colors">📞 (800) 555-1234</a>
        </div>

        <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4">
          <Link href="/hospice/faqs" className="text-[#7A8066] text-sm font-medium hover:underline">Next: Hospice FAQs →</Link>
          <Link href="/hospice/our-care-team" className="text-gray-400 text-sm hover:underline ml-auto">← Our Care Team</Link>
        </div>
      </div>
    </div>
  );
}
