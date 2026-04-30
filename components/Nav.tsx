"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Hospice Care",
    href: "/hospice",
    children: [
      { label: "What Is Hospice Care?", href: "/hospice/what-is-hospice" },
      { label: "When Is It Time?", href: "/hospice/when-is-it-time" },
      { label: "Levels of Care", href: "/hospice/levels-of-care" },
      { label: "Our Care Team", href: "/hospice/our-care-team" },
      { label: "Paying for Hospice", href: "/hospice/paying-for-hospice" },
      { label: "FAQs", href: "/hospice/faqs" },
    ],
  },
  {
    label: "Families & Caregivers",
    href: "/families",
    children: [
      { label: "What to Expect", href: "/families/what-to-expect" },
      { label: "Being a Caregiver", href: "/families/being-a-caregiver" },
      { label: "End-of-Life Signs", href: "/families/end-of-life-signs" },
      { label: "Grief & Bereavement", href: "/families/grief-and-bereavement" },
    ],
  },
  {
    label: "Healthcare Professionals",
    href: "/professionals",
    children: [
      { label: "Refer a Patient", href: "/professionals/refer-a-patient" },
      { label: "Eligibility Guidelines", href: "/professionals/eligibility-guidelines" },
      { label: "Medicare Hospice Benefit", href: "/professionals/medicare-benefit" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "About Us", href: "/about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-[#2e7d5e] text-white text-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Compassionate care, available 24/7</span>
          <a href="tel:+18005551234" className="font-semibold hover:underline">📞 (800) 555-1234</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif font-bold text-xl text-[#2e7d5e]">Lasena</span>
          <span className="font-serif font-bold text-xl text-gray-700">Health</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="px-4 py-2 text-sm text-gray-700 hover:text-[#2e7d5e] transition-colors font-medium flex items-center gap-1"
              >
                {item.label}
                {item.children && <span className="text-xs text-gray-400">▾</span>}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 min-w-56 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-2 text-sm text-gray-600 hover:text-[#2e7d5e] hover:bg-green-50 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/professionals/refer-a-patient"
            className="ml-4 bg-[#2e7d5e] text-white text-sm px-5 py-2 hover:bg-[#245f49] transition-colors font-medium rounded"
          >
            Refer a Patient
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden text-gray-600" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          {navItems.map((item) => (
            <div key={item.href}>
              <button
                className="w-full text-left px-6 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 flex justify-between"
                onClick={() => setActiveDropdown(activeDropdown === item.href ? null : item.href)}
              >
                {item.label}
                {item.children && <span>{activeDropdown === item.href ? "▴" : "▾"}</span>}
              </button>
              {item.children && activeDropdown === item.href && (
                <div className="bg-gray-50 border-t border-gray-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-10 py-2 text-sm text-gray-600 hover:text-[#2e7d5e]"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/professionals/refer-a-patient"
              className="block text-center bg-[#2e7d5e] text-white text-sm px-5 py-3 font-medium rounded"
              onClick={() => setOpen(false)}
            >
              Refer a Patient
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
