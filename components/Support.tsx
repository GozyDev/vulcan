import React from "react";
const vidsec = [
  {
    feature: "Smooth Onboarding",
    txt: "It's easy for new users or customers to get started without friction.",
    vid: "/Support/image 17.png",
  },
  {
    feature: "Functional Dashboard",
    txt: "Neatly organized data with an easy-to-navigate interface.",
    vid: "/Support/image 18.png",
  },
  {
    feature: "Dedicated Admins",
    txt: "Rely on human admins you guide you through your vulcan journey.",
    vid: "/Support/image 19.png",
  },
];
const Support = () => {
  return (
    <section className="space-y-[70px] px-[15px] lg:px-[30px] pb-[150px]">
      <div className="space-y-5 max-w-[800px]  mx-auto  ">
        <h1 className="text-4xl md:text-[56px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
          Support that scales
        </h1>
        <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center">
          Unlock the Full Potential of Your Experience
        </p>
      </div>

      <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col lg:flex-row gap-[25px] h-max ">
            {vidsec.map((vid, idx) => (
              <div
                key={idx}
                className="bg-[#0F0F0F] w-full p-10 rounded-[16.6px] flex flex-col items-center justify-center space-y-[25px]"
              >
                <img src={vid.vid} className="w-[120px] h-[120px] md:w-[180px] md:h-[180px]" alt=""></img>
                <div className="">
                  <h4 className="text-[20px] md:text-[22px] text-center">{vid.feature}</h4>
                  <p className="text-[14px] md:text-[16px] mt-3 text-[#969696] text-center">
                    {vid.txt}
                  </p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Support;
