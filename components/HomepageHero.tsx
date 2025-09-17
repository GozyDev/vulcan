import { Percent, X } from "lucide-react";
import React from "react";

const HomepageHero = () => {
  return (
    <section className="pt-[150px] md:pt-[200px] px-[15px] md:px-[30px]">
      <div className="max-w-7xl mx-auto space-y-[70px]">
        <div className="  flex flex-col lg:flex-row gap-7 ">
          {/* content */}
          <div className="lg:w-1/2 space-y-8">
            <p className="text-[16px] py-[5px] px-[15px] text-[#969696] bg-white/30 rounded-full w-max">
              Powered by GPT-4
            </p>
            <div className="space-y-5">
              <h1 className="text-4xl md:text-[68px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent ">
                AI helpdesk <br /> that answers <br /> customers 24/7
              </h1>
              <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696]">
                Launch a self-serve help center, train a smart chatbot on your
                docs, and hand off complex tickets to humans
              </p>
            </div>
            <button className="text-[16px] tracking-[-0.2667px] bg-gradient-to-t from-[#F50000] to-[#FF9452] py-[15px] px-[25px] rounded cursor-pointer">
              See it in action
            </button>
          </div>
          {/* image */}
          <div className="bg-orange-600/20 lg:w-1/2 h-[500px] rounded-3xl"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-7  items-center justify-around w-full  ">
          {[
            { img: "/homepage/image 5.svg", per: "56", txt: "Ticket Volume" },
            {
              img: "/homepage/image 6.svg",
              per: "2.4",
              txt: "Quicker Replies",
            },
            {
              img: "/homepage/image 7.svg",
              per: "98",
              txt: "Helpfulness Score",
            },
          ].map((img, idx) => (
            <div
              key={idx}
              className="flex flex-col lg:flex-row items-center  gap-3"
            >
              <img src={img.img} alt="" className="w-[40px]" />
              <div className="flex flex-col  items-center lg:items-start  gap-3">
                <p className="text-3xl flex items-center gap-1">
                  {img.per} {img.per === "2.4" ? <X size={30} /> : <Percent size={34}/>}{" "}
                </p>
                <p className="text-[14px]">{img.txt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
