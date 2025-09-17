import React from "react";

const CTA = () => {
  return (
    <section className=" space-y-[70px] px-[15px] lg:px-[30px] pb-[150px]">
      <div className="max-w-7xl border mx-auto bg-[#0F0F0F] h-[430px] flex justify-center items-center">
        <div className="space-y-8 flex flex-col items-center justify-center">
          <p className="text-[16px] py-[5px] px-[15px] text-[#969696] bg-white/30 rounded-full w-max">
            Powered by GPT-4
          </p>
          <div className="space-y-5">
            <h1 className="text-4xl md:text-[68px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent text-center">
              Need help getting started?
            </h1>
            <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center">
              Our team and AI assistant are here to guide you—from setup to
              scaling—so you never feel stuck.
            </p>
          </div>
          <button className="text-[16px] tracking-[-0.2667px] bg-gradient-to-t from-[#F50000] to-[#FF9452] py-[15px] px-[25px] rounded cursor-pointer hover:shadow-[0px_0px_10px_#FF9452] transition-all">
            Talk to an expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
