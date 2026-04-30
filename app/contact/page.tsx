"use client";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="bg-[#f5f4f0] border-b border-stone-200 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#7A8066] text-xs uppercase tracking-widest mb-3 font-medium">Contact</p>
          <h1 className="font-serif text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">We know that reaching out about hospice isn't easy. There's no pressure and no obligation — just a real conversation with a compassionate person who wants to help.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">Phone (24/7)</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-xs text-yellow-700 mb-2">📝 Confirm phone number with Chad</div>
              <a href="tel:+18005551234" className="text-[#7A8066] text-xl font-bold hover:underline">📞 (800) 555-1234</a>
              <p className="text-gray-500 text-sm mt-1">Available 24 hours a day, 7 days a week</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">Email</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-xs text-yellow-700 mb-2">📝 Confirm contact email with Chad</div>
              <a href="mailto:info@lasenahealth.com" className="text-[#7A8066] font-medium hover:underline">info@lasenahealth.com</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">Office Hours</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-xs text-yellow-700 mb-2">📝 Confirm office hours with Chad</div>
              <p className="text-gray-700">Monday–Friday, [X] a.m. – [X] p.m.</p>
              <p className="text-gray-500 text-sm">For after-hours clinical needs, our nursing team is available 24/7.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">Address</p>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-xs text-yellow-700">📝 Confirm office address with Chad</div>
            </div>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <h2 className="font-serif font-bold text-xl text-gray-800 mb-4">Send a Message</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
              <select className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066] bg-white">
                <option value="">Select a topic...</option>
                <option>I have questions about hospice</option>
                <option>I'd like to refer a patient</option>
                <option>I'm interested in a career</option>
                <option>General inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" placeholder="Tell us how we can help..." />
            </div>
            <button type="submit" className="w-full bg-[#7A8066] text-white py-4 text-sm font-semibold hover:bg-[#5e6350] transition-colors rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
