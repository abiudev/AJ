import { NAV_LINKS } from "@/constants";
const Contact = () => {
  const servicesLink = NAV_LINKS.find((link) => link.key === "services");

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-100 py-8">
      <div className="bg-orange-50 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-sky-900 text-center mb-6">
          Get in Touch
        </h2>

        <form>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Second Name"
                className="w-full p-3 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full p-3 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {servicesLink && servicesLink.subLinks && (
              <select
                name="services"
                id="services"
                className="w-full p-3 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {servicesLink.subLinks.map((subLink) => (
                  <option key={subLink.key} value={subLink.href}>
                    {subLink.label}
                  </option>
                ))}
              </select>
            )}

            <div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-orange-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-sky-900 text-white py-2 px-6 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
