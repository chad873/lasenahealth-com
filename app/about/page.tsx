import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f5f4f0] border-b border-stone-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#7A8066] text-xs uppercase tracking-widest mb-3 font-medium">About Us</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Our Story & Mission</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">Lasena Health was founded on a simple conviction: that every person deserves to spend the end of their life with dignity, comfort, and the people they love.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <p className="text-gray-700 leading-relaxed text-lg">We are a hospice provider serving patients and families in our communities. Our team includes experienced nurses, physicians, social workers, chaplains, and aides, all of whom chose this work because they believe it matters.</p>

        <p className="text-gray-700 leading-relaxed">Our mission is straightforward: to deliver the highest quality compassionate care to every patient we serve, and to support the families who love them, from the first call through bereavement and beyond.</p>

        <p className="text-gray-700 leading-relaxed">We measure success not in patient volumes or revenue metrics, but in the families who tell us they felt supported, the patients who died peacefully at home, and the caregivers who say they could not have done it without us.</p>

        <div className="bg-[#7A8066] text-white rounded p-8">
          <h2 className="font-serif text-2xl font-bold mb-3" style={{ color: "white" }}>Service Areas</h2>
          <p className="text-stone-200">Lasena Health proudly serves patients and families throughout the Columbia, South Carolina area, including Richland, Lexington, Fairfield, Kershaw, Calhoun, Orangeburg, and Newberry counties. Call us to find out if we serve your area.</p>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-4">
          <Link href="/contact" className="text-[#7A8066] text-sm font-medium hover:underline">Contact Us →</Link>
          <Link href="/careers" className="text-[#7A8066] text-sm font-medium hover:underline">Join Our Team →</Link>
        </div>
      </div>
    </div>
  );
}
