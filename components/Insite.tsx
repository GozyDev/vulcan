"use client";
import React, { useMemo } from "react";

const Insite = () => {
  const logos = [
    "API & Webhooks",
    "Multilingual Replies",
    "Custom Workflows",
    "Feedback & ratings loop",
    "Role-based Permissions",
  ];

  // Create enough duplicates for seamless looping
  const duplicatedLogos = useMemo(() => {
    return [...logos, ...logos, ...logos, ...logos];
  }, [logos]);
  return (
    <section className="space-y-[70px] px-[15px] lg:px-[30px] pb-[150px]">
      <div className="space-y-5 max-w-[800px]  mx-auto  ">
        <h1 className="text-4xl md:text-[56px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
          Features highlights
        </h1>
        <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center">
          Powerful features designed to streamline support and scale with your
          business.
        </p>
      </div>
      <div>
        <div className="relative flex overflow-hidden group py-4 max-w-7xl mx-auto">
          <div className="relative flex overflow-hidden group py-4">
            <div className="flex gap-5 animate-marquee-right whitespace-nowrap ">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`row2-${index}`}
                  className="inline-flex items-center  transition-all duration-300 hover:scale-100 flex-shrink-0 cursor-pointer"
                >
                  <div
                    key={`row1-${index}`}
                    className="inline-flex items-center gap-2  transition-all duration-300 hover:scale-110 flex-shrink-0 py-[20px] px-[30px] bg-gradient-to-b from-[#FF945263] to-[#F50000] rounded-[12px]"
                  >
                   <img src='kni.svg' alt="" /> {logo}
                  </div>
                </div>
              ))}
            </div>

            {/* Mirror element for seamless looping */}
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 80s linear infinite;
        }

        /* Pause animation on hover */
        .group:hover .animate-marquee-left,
        .group:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Insite;
