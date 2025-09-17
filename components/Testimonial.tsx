import { Divide } from "lucide-react";
import React from "react";
export type Testimonial = {
  id: string;
  name?: string;
  role?: string;
  company?: string;
  message?: string;
  rating?: number;
  image?: string; // profile image of the person
  containerImage?: string; // big background/container image (for image-only boxes)
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Daisy Morgan",
    role: "Manager",
    company: "HTC Vive",
    message:
      "Our business has saved over $200,000 in costs from refund and return ticket requests—thanks to Vulcan’s AI-powered agent!",
    rating: 5,
    image: "/testimonials/m1.png",
  },
  {
    id: "2",
    containerImage: "/testimonials/m6.png", // the one with the man & phone
  },
  {
    id: "3",
    name: "Mike Hudson",
    role: "CMO",
    company: "Wee Chat",
    message:
      "Even though Vulcan automates a lot, our customers feel like they’re chatting with a real person. It’s smart, fast, and still human.",
    rating: 5,
    image: "/testimonials/m2.png",
  },
  {
    id: "4",
    name: "Adriana Odin",
    role: "Ecommerce Specialist",
    message:
      "The automation flows are a lifesaver. Vulcan handles routine requests instantly, so my team can focus on real customer needs.",
    rating: 5,
    image: "/testimonials/m4.png",
  },
  {
    id: "5",
    containerImage: "/testimonials/m7.png", // the one with phone + keyboard
  },
  {
    id: "6",
    name: "Steven Corey",
    role: "CTO",
    company: "nHub Africa",
    message:
      "As our SaaS grew, we needed a tool that could keep up. Vulcan’s multilingual replies and role-based permissions made global support easy.",
    rating: 5,
    image: "/testimonials/m5.png",
  },
];

const Testimonial = () => {
  return (
    <section className="space-y-[70px] px-[15px] lg:px-[30px] pb-[150px]">
      <div className="space-y-5 max-w-[800px]  mx-auto  ">
        <h1 className="text-4xl md:text-[56px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
          Loved by Teams Everywhere
        </h1>
        <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center">
          See how businesses use Vulcan to deliver faster replies, smarter
          workflows, and happier customers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[35px]">
        {testimonials.map((card) => (
          <div key={card.id} className="">
            {!card.containerImage && (
              <div
                className={`space-y-[30px] bg-gradient-to-b from-[#0F0F0F] to-[#FF620012] p-[20px] h-full rounded-[17px] ${
                  card.id === "1" ? "rotate-3" : card.id === "3" ? "-rotate-3" :card.id === "4" ? "-rotate-3" : card.id === '6' ? "rotate-3" : ""
                }`}
              >
                <p className="text-[15px]">{card.message}</p>

                <div className="text-[18px] flex items-center gap-3">{card.rating}.0 <img src="/testimonials/star.png" alt="" className="w-[110px]" /></div>

                <div className="flex  gap-3">
                  <img
                    src={card.image}
                    alt=""
                    className="w-[35px] h-[35px] object-cover rounded-full border border-[#FF6200]"
                  />
                  <div>
                    <p className="text-[14px]">{card.name}</p>
                    <p className="text-[12px]">{card.role}</p>
                  </div>
                </div>
              </div>
            )}

            {card.containerImage && (
              <div className="h-[269px] w-full">
                <img
                  src={card.containerImage}
                  alt=""
                  className="h-full w-full rounded-[17px]"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
