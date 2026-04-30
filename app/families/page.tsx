import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f5f4f0] border-b border-stone-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#7A8066] text-xs uppercase tracking-widest mb-3 font-medium">Lasena Health</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">For Families & Caregivers</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">Resources, guidance, and support for those caring for a loved one on hospice.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">        <p className="text-gray-400 italic">Full page content coming soon.</p>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <Link href="/" className="text-[#7A8066] text-sm font-medium hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
