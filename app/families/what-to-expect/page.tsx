import Link from "next/link";

const ongoing = [
  "Regular nursing visits, frequency depends on the patient's needs, typically several times per week",
  "Scheduled aide visits for personal care and light assistance",
  "Social worker and chaplain visits as needed",
  "24/7 phone access to our clinical team for questions, concerns, or emergencies",
  "Ongoing medication delivery and equipment management",
  "Regular family meetings to review the care plan and answer questions",
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f5f4f0] border-b border-stone-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#7A8066] text-xs uppercase tracking-widest mb-3 font-medium">Families & Caregivers</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">What to Expect from Hospice</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">Understanding what happens when hospice care begins can bring peace of mind during a difficult time.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-10">
        <div>
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">The first days</h2>
          <p className="text-gray-700 leading-relaxed">In the first days after enrolling, a lot happens. Our team will visit the home to assess your loved one's needs, set up medical equipment, deliver medications, and create a care plan. It can feel overwhelming at first, but our team will walk you through every step.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">What you can expect on an ongoing basis</h2>
          <ul className="space-y-3">
            {ongoing.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#7A8066] mt-1">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#f5f4f0] border border-stone-300 rounded p-6">
          <p className="font-semibold text-gray-800 mb-2">You are part of the care team.</p>
          <p className="text-gray-600">We will teach you how to manage medications, recognize changes in your loved one's condition, and know when to call us. You will never be left to figure it out alone.</p>
        </div>
        <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-4">
          <Link href="/families/being-a-caregiver" className="text-[#7A8066] text-sm font-medium hover:underline">Next: Being a Caregiver →</Link>
          <Link href="/families" className="text-gray-400 text-sm hover:underline ml-auto">← Families & Caregivers</Link>
        </div>
      </div>
    </div>
  );
}
