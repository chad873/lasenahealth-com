import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f4f9f7] border-b border-green-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2e7d5e] text-xs uppercase tracking-widest mb-3 font-medium">Hospice Care</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">When Is It Time for Hospice?</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">This is often the hardest question. Many families wait longer than they need to — and that means missing out on months of support that hospice could have provided.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-gray-700 leading-relaxed mb-8 text-lg">It may be time to consider hospice when:</p>
        <ul className="space-y-4 mb-10">
          {[
            "A doctor has said that curative treatment is no longer working or is not an option",
            "Your loved one is spending more time in the hospital than at home",
            "Daily functioning has significantly declined — eating, mobility, or basic self-care",
            "Pain or other symptoms are becoming harder to manage",
            "Your loved one has expressed a wish to focus on comfort, not aggressive treatment",
            "You and your family are exhausted and need support",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-[#2e7d5e] mt-1 text-lg">•</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <div className="bg-[#2e7d5e] text-white rounded p-8 mb-10">
          <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "white" }}>Not sure? Just call us.</h2>
          <p className="text-green-100 leading-relaxed mb-4">If you're unsure, call us. There's no obligation — we'll help you figure out whether hospice is right for your family right now.</p>
          <a href="tel:+18005551234" className="inline-block bg-white text-[#2e7d5e] px-5 py-2 text-sm font-semibold rounded hover:bg-green-50 transition-colors">📞 (800) 555-1234</a>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-4">
          <Link href="/hospice/levels-of-care" className="text-[#2e7d5e] text-sm font-medium hover:underline">Next: Levels of Hospice Care →</Link>
          <Link href="/hospice/what-is-hospice" className="text-gray-400 text-sm hover:underline ml-auto">← What Is Hospice Care?</Link>
        </div>
      </div>
    </div>
  );
}
