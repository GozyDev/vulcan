import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const faqs = [
  {
    id: "1",
    question: "Does Vulcan replace my support team?",
    answer:
      "Not at all. Vulcan is designed to support and scale your team, not replace it. By handling repetitive, straightforward questions with high accuracy, it frees up your human agents to focus on complex issues and high-value interactions.",
  },
  {
    id: "2",
    question: "Can Vulcan handle refunds or ticket-related queries?",
    answer:
      "Yes. Vulcan is trained on your policies and workflows, meaning it can assist with returns, refunds, and ticketing processes. For example, businesses using Vulcan have reported saving over $200,000 in costs from refund and return requests, thanks to the AI’s consistency and efficiency.",
  },
  {
    id: "3",
    question: "How accurate are Vulcan’s answers?",
    answer:
      "Vulcan’s AI agent only provides answers based on your verified documentation. Instead of “hallucinating” or guessing, it cites directly from your content, so responses remain accurate, trustworthy, and consistent with your business guidelines.",
  },
  {
    id: "4",
    question: "What happens if the AI isn’t sure?",
    answer:
      "If Vulcan encounters a question that isn’t covered in your docs or knowledge base, it won’t attempt to guess. Instead, the agent politely escalates the query to a human team member, ensuring your customers never receive misleading information.",
  },

   {
    id: "5  ",
    question: "How customizable is the AI agent?",
    answer:
      "Every response can be tailored to match your brand voice, tone, and style. You decide what information is available to the agent, what tone it uses, and how it handles specific customer scenarios.",
  },
];

const Faq = () => {
  return (
    <section className="space-y-[70px] px-[15px] lg:px-[30px] pb-[150px]">
      <div className="space-y-5 max-w-[800px]  mx-auto  ">
        <h1 className="text-4xl md:text-[56px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
          Frequently Asked Questions
        </h1>
        <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center">
          We&apos;ve got the right answers to any doubts or questions you might be
          having
        </p>
      </div>

      <div className="max-w-4xl  mx-auto">
        <Accordion type="single" collapsible className="space-y-[25px]">
          {faqs.map((faq) => (
            <div className="" key={faq.id}>
                <AccordionItem value={`item-${faq.id}`} className="border px-[18px] py-[7px] rounded-[17px] bg-white/5 cursor-pointer">
                  <AccordionTrigger className="text-[19px] cursor-pointer">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-[#969696] text-[15px]">
                    {faq.answer }
                  </AccordionContent>
                </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
