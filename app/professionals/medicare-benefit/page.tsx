import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f4f9f7] border-b border-green-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2e7d5e] text-xs uppercase tracking-widest mb-3 font-medium">Lasena Health</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Medicare Hospice Benefit</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">The Medicare Hospice Benefit covers virtually all hospice services, with little to no cost to the patient. Lumen will write the full content here.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-yellow-50 border border-yellow-200 rounded p-6 mb-8 text-sm text-yellow-800">
          📝 <strong>Copy placeholder</strong> — Lumen is writing the content for this page.
        </div>
        <p className="text-gray-400 italic">Full page content coming soon.</p>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/" className="text-[#2e7d5e] text-sm font-medium hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
