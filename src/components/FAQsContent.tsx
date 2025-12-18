"use client";

import { useState } from "react";

const categories = [
  "General Questions",
  "Buying and Renting",
  "Agent Services",
  "Property Listings",
];

const faqData: Record<string, { question: string; answer: string }[]> = {
  "General Questions": [
    {
      question: "What is the most popular type of real estate?",
      answer:
        "Residential properties are the most popular type of real estate, including single-family homes, condominiums, and apartments. These properties are primarily used for living purposes and represent the largest segment of the real estate market.",
    },
    {
      question: "How do I start investing in real estate?",
      answer:
        "Start by researching the market, setting a budget, and understanding different investment strategies. Consider working with a real estate agent and financial advisor to make informed decisions.",
    },
    {
      question: "What factors affect property value?",
      answer:
        "Location, property condition, market trends, nearby amenities, school districts, and economic factors all play significant roles in determining property value.",
    },
    {
      question: "How long does it typically take to sell a property?",
      answer:
        "The time to sell varies based on market conditions, pricing, and property location. On average, it takes 30-60 days, but well-priced properties in desirable areas can sell within weeks.",
    },
    {
      question: "What documents do I need for a real estate transaction?",
      answer:
        "Common documents include proof of identity, income verification, bank statements, tax returns, and property documents. Your agent will provide a complete checklist based on your specific situation.",
    },
  ],
  "Buying and Renting": [
    {
      question: "What is the difference between buying and renting?",
      answer:
        "Buying gives you ownership and equity building potential, while renting offers flexibility and lower upfront costs. The best choice depends on your financial situation and long-term goals.",
    },
    {
      question: "How much down payment do I need to buy a home?",
      answer:
        "Down payments typically range from 3% to 20% of the purchase price, depending on the loan type and lender requirements. Some programs offer zero down payment options for qualified buyers.",
    },
    {
      question: "What should I look for when renting a property?",
      answer:
        "Consider location, rental price, lease terms, property condition, amenities, and the landlord's reputation. Always read the lease agreement carefully before signing.",
    },
    {
      question: "What are closing costs and who pays them?",
      answer:
        "Closing costs include fees for loan processing, title insurance, appraisals, and legal services. They typically range from 2-5% of the purchase price and can be negotiated between buyer and seller.",
    },
    {
      question: "Can I negotiate the rental price?",
      answer:
        "Yes, rental prices are often negotiable, especially for longer lease terms or during off-peak seasons. Research comparable rentals in the area to support your negotiation.",
    },
  ],
  "Agent Services": [
    {
      question: "Why should I work with a real estate agent?",
      answer:
        "Real estate agents provide market expertise, negotiation skills, access to listings, and guidance through complex paperwork. They can save you time and help you make better decisions.",
    },
    {
      question: "How are real estate agents compensated?",
      answer:
        "Agents typically earn a commission based on the sale price, usually paid by the seller. Commission rates vary but generally range from 5% to 6% of the sale price.",
    },
    {
      question: "What questions should I ask a potential agent?",
      answer:
        "Ask about their experience, local market knowledge, communication style, availability, and references from past clients. Understanding their approach will help you find the right fit.",
    },
    {
      question: "How do I know if an agent is reputable?",
      answer:
        "Check their license status, read online reviews, ask for references, and verify their track record. A reputable agent will be transparent about their experience and success rate.",
    },
    {
      question: "What services do your agents provide?",
      answer:
        "Our agents offer comprehensive services including property search, market analysis, negotiation, paperwork handling, and post-sale support. We ensure a smooth experience from start to finish.",
    },
  ],
  "Property Listings": [
    {
      question: "What is the most popular type of real estate?",
      answer:
        "Residential properties including single-family homes, condos, and townhouses are the most popular. Commercial properties like office buildings and retail spaces also form a significant market segment.",
    },
    {
      question: "How often are new listings added?",
      answer:
        "New listings are added daily. We recommend setting up alerts to be notified when properties matching your criteria become available.",
    },
    {
      question: "Can I schedule a property viewing online?",
      answer:
        "Yes, you can schedule viewings directly through our website or contact our agents. We also offer virtual tours for select properties.",
    },
    {
      question: "Are the listed prices negotiable?",
      answer:
        "Most listed prices have room for negotiation. Our agents can help you understand the market value and craft a competitive offer strategy.",
    },
    {
      question: "How can I save my favorite listings?",
      answer:
        "Create an account on our website to save favorites, set up search alerts, and track price changes. You can also share listings with family and friends easily.",
    },
  ],
};

const FAQsContent = () => {
  const [activeCategory, setActiveCategory] = useState("Property Listings");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const currentFaqs = faqData[activeCategory] || [];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light mb-2">
            <span className="text-white">Explore Our Handpicked</span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-light text-gray-500">
            Selection Of The Most Exquisite.
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#af8e5b] text-white"
                  : "border border-gray-600 text-white hover:border-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {currentFaqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-gray-500 text-2xl font-light">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-white text-lg">{faq.question}</span>
                </div>
                <svg
                  className={`w-6 h-6 text-white transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="pb-8 pl-16">
                  <p className="text-gray-400 leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsContent;
