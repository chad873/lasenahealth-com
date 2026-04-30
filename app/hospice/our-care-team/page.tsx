import Link from "next/link";

const team = [
  { role: "Hospice Physician", desc: "Oversees the patient's medical care, certifies eligibility, and works with the attending physician to manage symptoms and adjust the care plan." },
  { role: "Registered Nurses", desc: "Your primary clinical contact. RNs make regular home visits, manage medications and symptoms, educate caregivers, and are available 24/7 by phone." },
  { role: "Hospice Aides", desc: "Provide personal care, bathing, grooming, and light household assistance, giving families a reliable extra set of hands." },
  { role: "Medical Social Workers", desc: "Help navigate practical and emotional challenges: family dynamics, advance directives, financial concerns, community resources, and discharge planning." },
  { role: "Chaplains & Spiritual Care", desc: "Offer non-denominational spiritual support to patients and families of all backgrounds. Chaplains meet patients where they are, spiritually and emotionally." },
  { role: "Bereavement Counselors", desc: "Grief doesn't end when the patient passes. Our bereavement team supports family members for up to 13 months following a loss." },
  { role: "Volunteers", desc: "Trained hospice volunteers provide companionship, respite, and practical help, sitting with patients, running errands, and giving caregivers a break." },
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f5f4f0] border-b border-stone-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#7A8066] text-xs uppercase tracking-widest mb-3 font-medium">Hospice Care</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Our Care Team</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">Hospice is a team effort. Every Lasena Health patient is served by an interdisciplinary group of professionals, all working together around what the patient and family need.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((t) => (
            <div key={t.role} className="border border-gray-200 rounded p-6">
              <h2 className="font-serif font-bold text-[#7A8066] text-lg mb-3">{t.role}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
          <Link href="/hospice/paying-for-hospice" className="text-[#7A8066] text-sm font-medium hover:underline">Next: Paying for Hospice →</Link>
          <Link href="/hospice/levels-of-care" className="text-gray-400 text-sm hover:underline ml-auto">← Levels of Care</Link>
        </div>
      </div>
    </div>
  );
}
