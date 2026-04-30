import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
        <div className="md:col-span-1">
          <p className="font-serif font-bold text-white text-xl mb-3">
            <span className="text-[#4caf87]">Lasena</span> Health
          </p>
          <p className="text-sm leading-relaxed mb-4">Compassionate hospice care for patients, families, and the communities we serve.</p>
          <a href="tel:+18005551234" className="text-[#4caf87] font-semibold text-sm hover:underline">📞 (800) 555-1234</a>
          <p className="text-xs text-gray-500 mt-1">Available 24 hours a day, 7 days a week</p>
        </div>

        <div>
          <p className="text-white text-xs uppercase tracking-widest mb-4 font-medium">Hospice Care</p>
          <ul className="space-y-2 text-sm">
            {[
              ["What Is Hospice Care?", "/hospice/what-is-hospice"],
              ["When Is It Time?", "/hospice/when-is-it-time"],
              ["Levels of Care", "/hospice/levels-of-care"],
              ["Our Care Team", "/hospice/our-care-team"],
              ["Paying for Hospice", "/hospice/paying-for-hospice"],
              ["FAQs", "/hospice/faqs"],
            ].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white text-xs uppercase tracking-widest mb-4 font-medium">Families & Caregivers</p>
          <ul className="space-y-2 text-sm">
            {[
              ["What to Expect", "/families/what-to-expect"],
              ["Being a Caregiver", "/families/being-a-caregiver"],
              ["End-of-Life Signs", "/families/end-of-life-signs"],
              ["Grief & Bereavement", "/families/grief-and-bereavement"],
            ].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
          <p className="text-white text-xs uppercase tracking-widest mt-6 mb-4 font-medium">For Professionals</p>
          <ul className="space-y-2 text-sm">
            {[
              ["Refer a Patient", "/professionals/refer-a-patient"],
              ["Eligibility Guidelines", "/professionals/eligibility-guidelines"],
              ["Medicare Benefit", "/professionals/medicare-benefit"],
            ].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-white text-xs uppercase tracking-widest mb-4 font-medium">Company</p>
          <ul className="space-y-2 text-sm">
            {[
              ["About Us", "/about"],
              ["Careers", "/careers"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/professionals/refer-a-patient"
              className="inline-block bg-[#2e7d5e] text-white text-sm px-5 py-3 hover:bg-[#245f49] transition-colors font-medium rounded"
            >
              Refer a Patient →
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col md:flex-row justify-between text-xs text-gray-600 gap-2">
        <p>© {new Date().getFullYear()} Lasena Health. All rights reserved.</p>
        <p>Privacy Policy · Terms of Use · Accessibility</p>
      </div>
    </footer>
  );
}
