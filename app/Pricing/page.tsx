import React from "react";

const pricingPlans = [
  {
    id: 1,
    title: "Starter – For solo founders",
    price: "29",
    features: [
      "1 brand, 1 channel",
      "3 teammates",
      "Help center + AI chatbot (5k AI msgs/mo)",
      "Basic insights",
    ],
    buttonText: "Start Free",
    popular: false,
  },
  {
    id: 2,
    title: "Growth – For small teams",
    price: "99",
    features: [
      "3 brands, multi-channel (email + chat)",
      "10 teammates",
      "50k AI msgs/mo",
      "Automations & workflows",
      "CSAT + topic analytics",
    ],
    buttonText: "Try Growth",
    popular: true,
  },
  {
    id: 3,
    title: "Scale – For support at volume",
    price: "Custom",
    features: [
      "Unlimited brands",
      "SSO, roles, audit logs",
      "250k+ AI msgs/mo",
      "Custom SLAs & priorities",
      "Dedicated success manager",
    ],
    buttonText: "Book a Demo",
    popular: false,
  },
];
const plans = ["Starter", "Growth", "Scale"];

const features = [
  {
    feature: "Brands & Channels",
    values: ["1 brand, 1 channel", "3 brands, multi-channel", "Unlimited"],
  },
  {
    feature: "Teammates",
    values: ["3", "10", "Unlimited"],
  },
  {
    feature: "AI Messages / Month",
    values: ["5,000", "50,000", "250,000+"],
  },
  {
    feature: "Help Center + AI Chatbot",
    values: ["✔", "✔", "✔"],
  },
  {
    feature: "Automations & Workflows",
    values: ["✔", "✔", "✔"],
  },
  {
    feature: "CSAT & Topic Analytics",
    values: ["—", "✔", "✔"],
  },
  {
    feature: "Single Sign-On (SSO)",
    values: ["—", "—", "✔"],
  },
  {
    feature: "Roles & Audit Logs",
    values: ["—", "—", "✔"],
  },
  {
    feature: "Custom SLAs & Priorities",
    values: ["—", "—", "✔"],
  },
  {
    feature: "Dedicated Success Manager",
    values: ["—", "—", "✔"],
  },
  {
    feature: "Pricing",
    values: ["$29/mo", "$99/mo", "Talk to sales"],
  },
];

const page = () => {
  return (
    <section className="py-[70px] pt-[200px] px-[15px]  md:px-[30px] space-y-[70px] md:space-y-[100px]">
      <div className="space-y-5 max-w-[800px]  mx-auto  ">
        <h1 className="text-4xl md:text-[60px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
          Flexible Pricing Just For You
        </h1>
        <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center">
          Transparent pricing, no surprises. Choose a plan that fits your needs
          and scale up whenever you're ready
        </p>
      </div>

      <div className="">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl p-6 bg-gradient-to-b from-neutral-900 to-black text-white border border-neutral-800 shadow-lg relative flex flex-col justify-between"
            >
              {/* Popular tag */}
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>

              {/* Price */}
              <div className="text-4xl font-bold mb-4">
                {plan.price === "Custom" ? (
                  <span>Custom Pricing</span>
                ) : (
                  <>
                    ${plan.price}
                    <span className="text-lg font-normal">/month</span>
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 text-sm text-neutral-300">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-orange-400">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-lg font-medium text-white  bg-gradient-to-t from-[#F50000] to-[#FF9452] hover:opacity-90 transition cursor-pointer`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <table className="w-full text-left text-white">
          {/* Table Header */}
          <thead>
            <tr>
              <th className="p-4 font-semibold text-lg">Features</th>
              {plans.map((plan) => (
                <th
                  key={plan}
                  className="p-4 font-semibold text-lg text-center bg-gradient-to-b from-[#0F0F0F] to-[#FF620012] rounded-t-md"
                >
                  {plan}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {features.map((row, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-700 hover:bg-[rgba(255,98,0,0.01)] transition"
              >
                <td className="p-4  text-[13px] md:text-[16px]">{row.feature}</td>
                {row.values.map((val, i) => (
                  <td key={i} className={`${val ==="✔" ? "text-green-500" : ''} p-4 text-center text-[13px] md:text-[16px]`}>
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default page;
