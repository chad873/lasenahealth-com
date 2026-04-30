import Link from "next/link";

const levels = [
  {
    name: "Routine Home Care",
    desc: "The most common level. Our team visits the patient at home — or wherever they call home, including nursing facilities — providing skilled nursing, medication management, aide services, and more. Family caregivers receive education, support, and 24/7 phone access to our clinical team.",
  },
  {
    name: "Continuous Home Care",
    desc: "When a patient's symptoms need intensive management during a short-term crisis, we can provide extended nursing care at home — keeping the patient in familiar surroundings rather than sending them to a hospital or facility.",
  },
  {
    name: "General Inpatient Care",
    desc: "For symptoms that cannot be managed at home — severe pain, uncontrolled nausea, or respiratory distress — we arrange inpatient care at a contracted facility. Our team remains involved in the patient's care throughout.",
  },
  {
    name: "Respite Care",
    desc: "Caring for a seriously ill loved one is exhausting. Respite care gives family caregivers a short-term break — up to five consecutive days — while the patient receives care in an inpatient setting. It's a benefit covered by Medicare, and it's there for you to use.",
  },
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f4f9f7] border-b border-green-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2e7d5e] text-xs uppercase tracking-widest mb-3 font-medium">Hospice Care</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Levels of Hospice Care</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">Hospice care is provided at four levels, depending on the needs of the patient. Our team will always recommend the level of care that best fits your situation.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {levels.map((l, i) => (
            <div key={l.name} className="border border-gray-200 rounded p-8">
              <div className="flex items-start gap-4">
                <span className="bg-[#2e7d5e] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">{i + 1}</span>
                <div>
                  <h2 className="font-serif text-xl font-bold text-gray-800 mb-3">{l.name}</h2>
                  <p className="text-gray-600 leading-relaxed">{l.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
          <Link href="/hospice/our-care-team" className="text-[#2e7d5e] text-sm font-medium hover:underline">Next: Our Care Team →</Link>
          <Link href="/hospice/when-is-it-time" className="text-gray-400 text-sm hover:underline ml-auto">← When Is It Time?</Link>
        </div>
      </div>
    </div>
  );
}
