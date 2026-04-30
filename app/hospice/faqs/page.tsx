import Link from "next/link";

const faqs = [
  {
    q: "Does choosing hospice mean we're giving up?",
    a: "Not at all. Hospice is an active choice — a decision to focus on quality of life, comfort, and meaningful time together rather than treatments that may cause more suffering than relief. Many families tell us that choosing hospice was the most loving decision they ever made.",
  },
  {
    q: "Can a patient leave hospice if they want to try treatment again?",
    a: "Yes. A patient can choose to leave hospice at any time and return to curative care. If they later choose to re-enroll in hospice, Medicare coverage resumes. It's your choice, always.",
  },
  {
    q: "Can hospice be provided in a nursing home or assisted living facility?",
    a: "Yes. Lasena Health serves patients wherever they call home — including nursing facilities, assisted living communities, and adult family homes. We work alongside facility staff to coordinate care.",
  },
  {
    q: "How quickly can hospice care begin?",
    a: "Often within 24–48 hours of referral. In urgent situations, we can sometimes start care the same day. Call us and we'll work as fast as possible.",
  },
  {
    q: "Will a nurse really be available at 2 a.m.?",
    a: "Yes. Our clinical team is available by phone 24 hours a day, 7 days a week — including nights, weekends, and holidays. You will never face a crisis alone.",
  },
  {
    q: "What happens if symptoms get worse and home care isn't enough?",
    a: "We escalate the level of care to match the need — moving to continuous home care or inpatient care if necessary. Our goal is always to keep the patient as comfortable as possible, wherever that requires.",
  },
  {
    q: "Does hospice hasten death?",
    a: "No. Research consistently shows that hospice patients often live as long — and sometimes longer — than those who continue aggressive treatment, while experiencing significantly better quality of life. Hospice focuses on comfort, not on accelerating or prolonging death.",
  },
  {
    q: "Can children be on hospice?",
    a: "Yes. Pediatric hospice care is available for children with life-limiting illnesses. Our team has experience supporting families through these uniquely challenging circumstances.",
  },
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f4f9f7] border-b border-green-100 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#2e7d5e] text-xs uppercase tracking-widest mb-3 font-medium">Hospice Care</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Hospice FAQs</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">Answers to the questions families ask most often. Don't see yours? Call us — we're happy to talk through anything.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-gray-100 pb-8">
              <h2 className="font-serif font-bold text-gray-800 text-lg mb-3">{faq.q}</h2>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-[#f4f9f7] border border-green-200 rounded p-8 text-center">
          <p className="font-serif font-bold text-gray-800 text-xl mb-2">Still have questions?</p>
          <p className="text-gray-600 mb-5">Call us anytime. There's no pressure and no obligation — just a real conversation.</p>
          <a href="tel:+18005551234" className="inline-block bg-[#2e7d5e] text-white px-6 py-3 text-sm font-semibold rounded hover:bg-[#245f49] transition-colors">📞 (800) 555-1234</a>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100">
          <Link href="/hospice" className="text-gray-400 text-sm hover:underline">← Back to Hospice Care</Link>
        </div>
      </div>
    </div>
  );
}
