import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f5f4f0] border-b border-stone-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#7A8066] text-xs uppercase tracking-widest mb-3 font-medium">Hospice Care</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">What Is Hospice Care?</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">Hospice is a philosophy of care, not a place, and it may be the most compassionate choice you can make for someone you love.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 prose prose-lg prose-gray max-w-none">
        <p>Hospice is a philosophy of care, not a place. It can happen in a patient's home, a nursing facility, or an inpatient hospice unit, wherever the patient is most comfortable.</p>
        <p>Hospice care is for people with a terminal illness who have chosen to focus on quality of life rather than curative treatment. It addresses physical symptoms like pain and shortness of breath, but also emotional, spiritual, and practical needs, for both the patient and the family.</p>
        <p>Medicare covers hospice 100% for eligible patients, meaning no out-of-pocket costs for most families. A physician certifies that the patient has six months or less to live if the illness runs its natural course, and the patient elects to receive comfort-focused care rather than aggressive treatment.</p>

        <h2>What hospice is not</h2>
        <p>Hospice is not giving up. It is not choosing death. It is not the absence of hope. Many families tell us that enrolling in hospice was one of the best decisions they made, that it gave their loved one more peace, more comfort, and more quality time than continuing aggressive treatment would have.</p>
        <p>Research consistently shows that hospice patients often live as long, and sometimes longer, than patients who continue curative treatment, while experiencing significantly better quality of life.</p>

        <h2>Who is hospice for?</h2>
        <p>Hospice is appropriate for people with any terminal diagnosis who have a prognosis of six months or less if the illness runs its normal course. Common diagnoses include cancer, congestive heart failure, COPD, dementia, renal failure, liver disease, ALS, and stroke, but hospice is available for any life-limiting illness.</p>

        <div className="bg-[#f5f4f0] border border-stone-300 rounded p-6 my-8 not-prose">
          <p className="font-semibold text-gray-800 mb-2">Ready to learn more?</p>
          <p className="text-gray-600 text-sm mb-4">Call us anytime, we'll answer your questions with no pressure and no obligation.</p>
          <a href="tel:+18005551234" className="inline-block bg-[#7A8066] text-white px-5 py-2 text-sm font-medium rounded hover:bg-[#5e6350] transition-colors">📞 (800) 555-1234</a>
        </div>

        <div className="pt-8 border-t border-gray-100 not-prose flex flex-wrap gap-4">
          <Link href="/hospice/when-is-it-time" className="text-[#7A8066] text-sm font-medium hover:underline">Next: When Is It Time for Hospice? →</Link>
          <Link href="/hospice" className="text-gray-400 text-sm hover:underline ml-auto">← Back to Hospice Care</Link>
        </div>
      </div>
    </div>
  );
}
