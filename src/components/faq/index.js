import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I purchase items from your collections?",
      answer:
        "You can purchase directly through our website, or visit one of our partner boutiques worldwide. Online purchases include free shipping for orders over $200.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Items must be unworn, with tags attached, and in original packaging. Final sale items cannot be returned.",
    },
    {
      question: "Do you offer custom sizing?",
      answer:
        "Yes, we provide made-to-measure services for most of our collections. Please contact our customer service at least 4 weeks before you need the garment.",
    },
    {
      question: "How often do you release new collections?",
      answer:
        "We release two main collections annually (Spring/Summer and Fall/Winter), with smaller capsule collections throughout the year.",
    },
    {
      question: "Are your materials sustainably sourced?",
      answer:
        "We're committed to sustainability—85% of our materials are organic, recycled, or sustainably sourced, with a goal of 100% by 2025.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our designs, purchasing
          process, and sustainability efforts.
        </p>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="ml-4 text-pink-600">
                  {activeIndex === index ? (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </span>
              </button>
              <div
                className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pt-2 pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
