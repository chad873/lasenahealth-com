"use client";

export default function ReferAPatientPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#7A8066] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-300 text-xs uppercase tracking-widest mb-3 font-medium">Healthcare Professionals</p>
          <h1 className="font-serif text-4xl font-bold text-white mb-4" style={{ color: "white" }}>Refer a Patient</h1>
          <p className="text-stone-200 text-lg max-w-2xl leading-relaxed">
            Our team is available 24/7 to accept referrals and coordinate seamless transitions. Complete the form below or call us directly.
          </p>
          <p className="text-white font-bold text-xl mt-4">📞 (800) 555-1234</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6">Patient Referral Form</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient First Name *</label>
              <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Patient Last Name *</label>
              <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
              <input type="date" className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Primary Diagnosis *</label>
              <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Location *</label>
            <select className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066] bg-white">
              <option value="">Select location type...</option>
              <option>Home</option>
              <option>Hospital</option>
              <option>Skilled Nursing Facility</option>
              <option>Assisted Living</option>
              <option>Other</option>
            </select>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-800 mb-4">Referring Physician / Contact</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Physician / Contact Name *</label>
                <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input type="tel" className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Practice / Facility</label>
              <input type="text" className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
            <textarea rows={4} className="w-full border border-gray-300 px-4 py-3 text-sm rounded focus:outline-none focus:border-[#7A8066]" placeholder="Urgency, insurance info, family contact, other relevant details..." />
          </div>

          <button type="submit" className="w-full bg-[#7A8066] text-white py-4 text-sm font-semibold hover:bg-[#5e6350] transition-colors rounded">
            Submit Referral
          </button>
          <p className="text-xs text-gray-400 text-center">For urgent referrals, please call us directly at (800) 555-1234</p>
        </form>
      </div>
    </div>
  );
}
