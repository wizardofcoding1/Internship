import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import Navbar from "../Components/Navbar";  // Import Navbar component

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // reset after 3 seconds
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-900 text-white py-16 px-4 md:px-10 min-h-screen" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Me</h2>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="grid gap-6 bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                required
                className="p-3 rounded-md bg-gray-700 text-white focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 p-3 rounded-md font-semibold"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 bg-green-700/20 p-6 rounded-xl shadow-lg">
              <CheckCircle className="text-green-400" size={60} />
              <h3 className="text-xl font-semibold text-green-300">Message Sent Successfully!</h3>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Contact;
