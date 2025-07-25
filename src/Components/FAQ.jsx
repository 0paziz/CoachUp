import React, { useState } from 'react';

const faqs = [
  {
    question: "What coaching services do you offer?",
    answer: "We offer personalized training plans, one-on-one coaching, group sessions, and online workshops tailored to your goals."
  },
  {
    question: "How do I get started with coaching?",
    answer: "Simply contact us through the website or book a free consultation call to discuss your goals and create a plan."
  },
  {
    question: "What makes your coaching different?",
    answer: "Our coaching is customized to your individual needs, backed by experience, and focused on sustainable progress."
  },
  {
    question: "Do you offer remote coaching?",
    answer: "Yes, all coaching sessions and plans can be conducted remotely via video calls and online platforms."
  },
  {
    question: "How often will I have coaching sessions?",
    answer: "Session frequency depends on your goals; typically weekly or bi-weekly sessions are recommended."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-10 mt-20 py-20">
      <p className="text-center text-base text-gray-500 uppercase mb-2">FAQ</p>
      <h2 className="text-5xl mb-10 text-center">Everything you need to know</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left text-xl font-semibold focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 text-lg">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
