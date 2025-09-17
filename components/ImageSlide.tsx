"use client";
import React, { useMemo } from "react";
import Image from "next/image";

const ImageSlide = () => {
  const logos = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    src: `/ImageSlide/is${i + 1}.png`,
    alt: `Logo ${i + 1}`,
  }));

  // Create enough duplicates for seamless looping
  const duplicatedLogos = useMemo(() => {
    return [...logos, ...logos, ...logos, ...logos];
  }, [logos]);

  return (
    <section className="pt-[80px] py-[80px] lg:py-[110px] px-[15px] lg:px-[40px] overflow-hidden">
      <div className="">
        <div className="space-y-8  ">
          {/* Row 1: Right → Left */}
          <div className="relative flex overflow-hidden group py-4">
            <div className="flex gap-5 animate-marquee-left whitespace-nowrap">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`row1-${index}`}
                  className="inline-flex items-center  transition-all duration-300 hover:scale-110 flex-shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={250}
                    height={380}
                    className="drop-shadow-xl  w-[290] h-[380px] object-cover rounded-[9px]"
                  />
                </div>
              ))}
            </div>
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
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
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

export default ImageSlide;
