import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "How do I choose the right tutor?",
      answer: "Use our advanced matching system that considers your learning goals, schedule, and preferred teaching style."
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, mobile money (including MTN MoMo), and secure bank transfers."
    },
    {
      id: 3,
      question: "Can I reschedule a session?",
      answer: "Yes, you can reschedule up to 24 hours before your session through your dashboard with no extra charges."
    },
    {
      id: 4,
      question: "Do you offer group sessions?",
      answer: "Absolutely! You can request group sessions at discounted rates when booking with multiple learners."
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-xl">
            Quick answers to common learning queries
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="border border-gray-800 rounded-xl bg-gray-800/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                className="w-full flex justify-between items-center p-6 text-left"
                aria-expanded={openItem === faq.id}
              >
                <span className="text-xl font-medium text-white pr-4">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-blue-500 transform transition-transform ${
                    openItem === faq.id ? 'rotate-180' : ''
                  }`}
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
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openItem === faq.id ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Still have questions? Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;