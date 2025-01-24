"use client";
import { NAV_LINKS } from "@/constants";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const servicesLink = NAV_LINKS.find((link) => link.key === "services");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");

  const serviceId = "service_6qfa4gu";
  const templateId = "template_bvr9dm3";
  const publicKey = "Ybn9JtQ7yBDp317Hr";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${fName} ${lName}`,
      to_name: "AJ Apex Media",
      fName: fName,
      lName: lName,
      Message: message,
      email: email,
      phone: phone,
      service: service,
    };
    console.log("Template Params: ", templateParams);

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Mail sent successfully", response);
        setFName("");
        setService("");
        setLName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending mail", error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-orange-100 py-8">
      <div className="bg-orange-50 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-sky-900 text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-center mb-4 text-sky-800 text-lg">
          Fill out the form below and we will get back to you soon!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                className="w-full p-3 border bg-orange-300 shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Second Name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                className="w-full p-3 border bg-orange-300 shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border bg-orange-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border bg-orange-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {servicesLink && servicesLink.subLinks && (
              <select
                name="services"
                value={service}
                onChange={(e) => setService(e.target.value)}
                id="services"
                className="w-full p-3 border bg-orange-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full p-3 border bg-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border bg-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
