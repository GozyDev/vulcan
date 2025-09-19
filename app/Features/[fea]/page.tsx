import React from "react";
import { features } from "@/app/data";
import Link from "next/link";

const page = async ({ params }: { params: Promise<{ fea: string }> }) => {
  const { fea } = await params;
  const text = decodeURIComponent(fea);

  const featureShown = features.find((items) => items.title === text);
  return (
    <div className="space-y-[70px] pb-[70px] ">
      <section
        className="py-[70px] pt-[200px] px-[15px] md:px-[30px]  bg-cover bg-center relative"
        style={{ backgroundImage: `url(${featureShown?.image})` }}
      >
        <div className="absolute bg-[rgb(15,15,15,0.99)] backdrop-blur-xl  w-full h-full top-0 left-0" />
        <div className="space-y-5   mx-auto relative ">
          <h1 className="text-6xl md:text-[90px]   tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
            {text}
          </h1>
          <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center max-w-[800px]  mx-auto   ">
            Our features elevate your support, from multilingual conversations
            to advanced integrations, Vulcan comes with powerful extras that
            make your support smarter, faster, and ready to scale.
          </p>
        </div>
      </section>
      <section className="px-[15px] md:px-[30px]  bg-cover bg-center relative">
        <div className="max-w-7xl mx-auto flex-col-reverse lg:flex-row  flex gap-[25px]">
          <div className="">
            {features.map((feature, idx) => (
              <Link key={idx} href={feature.title}>
                <div
                  className={`${
                    feature.title === text
                      ? "bg-gradient-to-b from-[#0F0F0F] to-[#ff620077]"
                      : "bg-[rgb(15,15,15)]"
                  } flex items-center md:w-[300px]  rounded-[10px] mb-[15px]  shadow-[inset_0_0_10px_rgb(225,225,225,0.05)]`}
                >
                  <img
                    src={feature.image}
                    alt=""
                    className="w-[70px] h-[62px] rounded-l-[10px]"
                  />
                  <p className="p-[20px] text-[15px]">{feature.title}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex-1 ">
            <div className=" rounded-[10px] space-y-[25px]">
              {featureShown?.subfeature?.map((sub, idx) => (
                <div key={idx} className="bg-[#0f0f0f] rounded-[10px]">
                  <h3 className="p-[20px] text-[25px] lg:text-[32px]">
                    {sub.text}
                  </h3>
                  <p className="p-[20px] text-[15px] text-[#969696]">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
