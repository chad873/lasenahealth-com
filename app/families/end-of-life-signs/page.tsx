import Link from "next/link";

const signs = [
  "Sleeping more, or being difficult to rouse",
  "Eating and drinking less — or stopping entirely",
  "Withdrawal from conversation or the people around them",
  "Increased periods of confusion or restlessness",
  "Changes in breathing — slower, faster, or with longer pauses (Cheyne-Stokes breathing)",
  "Mottled skin on the hands, feet, and legs",
  "Hands and feet feeling cool to the touch",
  "A long pause in breathing, followed by very slow, shallow breaths",
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f4f9f7] border-b border-green-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2e7d5e] text-xs uppercase tracking-widest mb-3 font-medium">Families & Caregivers</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">End-of-Life Signs</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">As a loved one approaches the end of life, you may notice changes in their body, breathing, and behavior. These signs are normal — they are signs that the body is gently preparing.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <p className="text-gray-700 leading-relaxed">Common changes in the final weeks and days include:</p>
        <ul className="space-y-4">
          {signs.map((s) => (
            <li key={s} className="flex items-start gap-3 border-b border-gray-100 pb-4">
              <span className="text-[#2e7d5e] mt-1 text-lg">•</span>
              <span className="text-gray-700">{s}</span>
            </li>
          ))}
        </ul>

        <div className="bg-[#f4f9f7] border border-green-200 rounded p-6">
          <p className="font-semibold text-gray-800 mb-2">You are not alone in this.</p>
          <p className="text-gray-600 leading-relaxed">Call us any time you have a question or concern. Our nurses are trained to help you understand what you're seeing, and we'll be with you every step of the way.</p>
          <a href="tel:+18005551234" className="inline-block mt-4 bg-[#2e7d5e] text-white px-5 py-2 text-sm font-semibold rounded hover:bg-[#245f49] transition-colors">📞 (800) 555-1234</a>
        </div>

        <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4">
          <Link href="/families/grief-and-bereavement" className="text-[#2e7d5e] text-sm font-medium hover:underline">Next: Grief & Bereavement →</Link>
          <Link href="/families/being-a-caregiver" className="text-gray-400 text-sm hover:underline ml-auto">← Being a Caregiver</Link>
        </div>
      </div>
    </div>
  );
}
