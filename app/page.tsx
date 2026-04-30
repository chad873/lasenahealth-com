import Link from "next/link";
import Image from "next/image";

const audiences = [
  {
    title: "Patients & Families",
    href: "/families/what-to-expect",
    icon: "🤝",
    desc: "You don't have to navigate this alone. Whether you're exploring hospice for a loved one or ready to make the call, our team is here to answer your questions and be by your side.",
  },
  {
    title: "Healthcare Professionals",
    href: "/professionals/refer-a-patient",
    icon: "🩺",
    desc: "When curative treatment is no longer the goal, hospice gives your patients the comfort and expert symptom management they deserve — while giving you a trusted partner to coordinate their care.",
  },
  {
    title: "Join Our Team",
    href: "/careers",
    icon: "💙",
    desc: "If you're a nurse, social worker, chaplain, or aide who believes in the power of compassionate end-of-life care, we'd love to talk.",
  },
];

const hospiceLinks = [
  { label: "What Is Hospice Care?", href: "/hospice/what-is-hospice" },
  { label: "When Is It Time for Hospice?", href: "/hospice/when-is-it-time" },
  { label: "Levels of Hospice Care", href: "/hospice/levels-of-care" },
  { label: "Our Care Team", href: "/hospice/our-care-team" },
  { label: "Paying for Hospice", href: "/hospice/paying-for-hospice" },
  { label: "Hospice FAQs", href: "/hospice/faqs" },
];

export default function Home() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1800&q=85"
            alt="Compassionate hospice care"
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <p className="text-[#4caf87] text-sm uppercase tracking-widest mb-4 font-medium">Lasena Health</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl" style={{ color: "white" }}>
            Compassionate Care. Peaceful Moments.
          </h1>
          <p className="text-gray-200 text-lg max-w-xl mb-10 leading-relaxed">
            Lasena Health brings expert hospice care into the comfort of home — supporting patients, families, and caregivers through every step of the journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/hospice/what-is-hospice" className="bg-[#2e7d5e] text-white px-7 py-4 text-sm font-medium hover:bg-[#245f49] transition-colors rounded">
              Learn About Hospice
            </Link>
            <Link href="/professionals/refer-a-patient" className="border border-white text-white px-7 py-4 text-sm font-medium hover:bg-white hover:text-gray-900 transition-colors rounded">
              Refer a Patient
            </Link>
          </div>
        </div>
      </section>

      {/* Mission intro */}
      <section className="bg-[#f4f9f7] py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Lasena Health, we believe that the end of life deserves the same care and dignity as any other chapter. Our hospice team — nurses, physicians, social workers, chaplains, and aides — works alongside patients and families to provide comfort, manage symptoms, and honor the life being lived.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Hospice is not about giving up. It's about choosing quality of life. And we're here to help you do that, on your terms, in your home.
          </p>
        </div>
      </section>

      {/* Audience cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="font-serif text-3xl font-bold text-gray-800 mb-2">How can we help you?</h2>
        <p className="text-gray-500 mb-10 text-lg">We're here for patients and families, referring physicians, and those looking to join our team.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <Link key={a.href} href={a.href} className="group border border-gray-200 p-8 hover:border-[#2e7d5e] hover:shadow-md transition-all rounded">
              <span className="text-3xl mb-4 block">{a.icon}</span>
              <h3 className="font-serif font-bold text-gray-800 text-xl mb-3 group-hover:text-[#2e7d5e] transition-colors">{a.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.desc}</p>
              <span className="text-[#2e7d5e] text-sm font-medium group-hover:underline">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* About hospice strip */}
      <section className="bg-[#f4f9f7] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#2e7d5e] text-xs uppercase tracking-widest mb-3 font-medium">Understanding Hospice</p>
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-5">Hospice is about living, not giving up.</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hospice care focuses on comfort, dignity, and quality of life for people nearing the end of a serious illness. It's not about giving up hope — it's about shifting focus to what matters most: time with the people you love.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Most hospice patients qualify for the Medicare Hospice Benefit, which covers virtually all hospice services at no out-of-pocket cost. Our team will walk you through every option before you commit to anything.
            </p>
            <ul className="space-y-3">
              {hospiceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#2e7d5e] text-sm font-medium hover:underline flex items-center gap-2">
                    <span className="text-[#4caf87]">→</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 rounded overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
              alt="Hospice care team"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-[#2e7d5e] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-white font-serif text-5xl leading-none mb-6 opacity-40">"</p>
          <blockquote className="font-serif text-white text-2xl md:text-3xl leading-relaxed mb-6">
            You matter because you are you, and you matter to the last moment of your life.
          </blockquote>
          <p className="text-green-200 text-sm">— Dame Cicely Saunders, founder of the modern hospice movement</p>
        </div>
      </section>

      {/* For families & professionals */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="rounded overflow-hidden border border-gray-200 group">
            <div className="relative h-72 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80"
                alt="Families and caregivers"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <p className="text-[#2e7d5e] text-xs uppercase tracking-widest mb-2 font-medium">Resources</p>
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">For Families & Caregivers</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">You're doing one of the hardest things a person can do. Lasena Health is here to support you, not just your loved one.</p>
              <Link href="/families/what-to-expect" className="text-[#2e7d5e] text-sm font-medium hover:underline">Explore resources →</Link>
            </div>
          </div>
          <div className="rounded overflow-hidden border border-gray-200 group">
            <div className="relative h-72 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                alt="Healthcare professionals"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8">
              <p className="text-[#2e7d5e] text-xs uppercase tracking-widest mb-2 font-medium">Clinicians</p>
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">For Healthcare Professionals</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">Refer a patient, review eligibility criteria, or learn about the Medicare Hospice Benefit. We make transitions simple and seamless.</p>
              <Link href="/professionals/refer-a-patient" className="text-[#2e7d5e] text-sm font-medium hover:underline">Refer a patient →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">We're here when you need us.</h2>
          <p className="text-gray-400 mb-2 text-lg">Call us anytime — 24 hours a day, 7 days a week.</p>
          <p className="text-gray-500 text-sm mb-8">There's no pressure and no obligation. Just a real conversation with a compassionate person who wants to help.</p>
          <a href="tel:+18005551234" className="inline-block bg-[#2e7d5e] text-white px-10 py-4 text-lg font-semibold hover:bg-[#245f49] transition-colors rounded">
            📞 (800) 555-1234
          </a>
          <p className="text-gray-500 text-sm mt-6">Or <Link href="/contact" className="text-[#4caf87] hover:underline">send us a message</Link></p>
        </div>
      </section>

    </div>
  );
}
