import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f4f9f7] border-b border-green-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2e7d5e] text-xs uppercase tracking-widest mb-3 font-medium">Families & Caregivers</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Being a Caregiver</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">Caring for someone at the end of life is one of the most meaningful — and challenging — things you will ever do.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <p className="text-gray-700 leading-relaxed text-lg">Caregiving is an act of love — and it's also exhausting, complicated, and sometimes frightening. It's okay to feel all of those things at once.</p>
        <p className="text-gray-700 leading-relaxed">Our social workers and chaplains are here for you, not just your loved one. They can help you process what you're feeling, navigate family dynamics, plan ahead, and find practical resources.</p>

        <div className="bg-[#2e7d5e] text-white rounded p-8">
          <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "white" }}>You deserve a break too.</h2>
          <p className="text-green-100 leading-relaxed mb-4">If you need a break, respite care is available. Medicare covers up to five consecutive days of inpatient respite care — giving you time to rest, recharge, and take care of yourself. Ask your nurse or social worker about scheduling respite care whenever you need it. You don't have to explain or justify needing rest.</p>
          <a href="tel:+18005551234" className="inline-block bg-white text-[#2e7d5e] px-5 py-2 text-sm font-semibold rounded hover:bg-green-50 transition-colors">📞 Talk to our team</a>
        </div>

        <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4">
          <Link href="/families/end-of-life-signs" className="text-[#2e7d5e] text-sm font-medium hover:underline">Next: End-of-Life Signs →</Link>
          <Link href="/families/what-to-expect" className="text-gray-400 text-sm hover:underline ml-auto">← What to Expect</Link>
        </div>
      </div>
    </div>
  );
}
