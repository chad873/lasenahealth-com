import Link from "next/link";

const support = [
  "Phone check-ins and personal outreach in the months after loss",
  "Individual grief counseling",
  "Referrals to community grief support groups",
  "Memorial resources and guidance for families navigating death certificates, estate logistics, and next steps",
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f4f9f7] border-b border-green-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2e7d5e] text-xs uppercase tracking-widest mb-3 font-medium">Families & Caregivers</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Grief & Bereavement Support</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">Grief doesn't end when your loved one passes. Lasena Health provides bereavement support for up to 13 months following a loss.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <p className="text-gray-700 leading-relaxed text-lg">Grief shifts, evolves, and surprises you. Lasena Health provides bereavement support to families for up to 13 months following a loss — because we know that's when the real weight of grief often sets in.</p>

        <div>
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">What our bereavement team offers</h2>
          <ul className="space-y-4">
            {support.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="text-[#2e7d5e] mt-1">✓</span>
                <span className="text-gray-700">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#2e7d5e] text-white rounded p-8">
          <h2 className="font-serif text-xl font-bold mb-3" style={{ color: "white" }}>We'll reach out to you.</h2>
          <p className="text-green-100 leading-relaxed">You don't have to reach out to us — we'll reach out to you. Grief is not a crisis to be solved. It's a natural response to love and loss, and you deserve support through it.</p>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <Link href="/families" className="text-gray-400 text-sm hover:underline">← Back to Families & Caregivers</Link>
        </div>
      </div>
    </div>
  );
}
