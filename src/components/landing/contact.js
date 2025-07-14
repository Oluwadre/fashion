import { useState } from 'react'


const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://your-api-endpoint.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Interested in our collections or want to collaborate? Reach out to
            us.
          </p>
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
              There was an error submitting your message. Please try again.
            </div>
          )}

          <form className="bg-white p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={data.email}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Your email"
                    onChange={handleChange}
                    />
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">
                Subject
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={data.subject}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Subject"
                  onChange={handleChange}
                  />
              </label>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={data.message}
                  name="message"
                  onChange={handleChange}
                  placeholder="Your message"
                ></textarea>
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-pink-600 mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Our Studio</h4>
              <p className="text-gray-600 text-sm">
                123 Ayetoro Rd, Itele Ota. Ogun State
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-pink-600 mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
              <a
                href="tel:+2347069034085"
                className="text-gray-600 text-sm hover:underline"
              >
                +2347069034085
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-pink-600 mb-3">
                <svg
                  className="w-8 h-8 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
              <a
                href="mailto:abiodunepebinu@gmail.com"
                className="text-gray-600 text-sm hover:underline"
              >
                abiodunepebinu@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
