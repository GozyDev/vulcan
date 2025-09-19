"use client";
import { ChevronLeft, ChevronRight, Percent, X } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";

const slider = [
  "/homepage/c1.png",
  "/homepage/c2.png",
  "/homepage/c3.png",
  "/homepage/c4.png",
];

const HomepageHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to go to next slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slider.length);
  }, [isTransitioning]);

  // Function to go to previous slide
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
  }, [isTransitioning]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Reset transitioning state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  return (
    <section className="pt-[150px] md:pt-[200px] px-[15px] md:px-[30px]">
      <div className="max-w-7xl mx-auto space-y-[70px]">
        <div className="flex flex-col lg:flex-row gap-7 items-center justify-center">
          {/* content */}
          <div className="lg:w-1/2 space-y-8">
            <p className="text-[16px] py-[5px] px-[15px] text-[#969696] bg-white/30 rounded-full w-max">
              Powered by GPT-4
            </p>
            <div className="space-y-5">
              <h1 className="text-4xl md:text-[68px] md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                AI helpdesk <br /> that answers <br /> customers 24/7
              </h1>
              <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696]">
                Launch a self-serve help center, train a smart chatbot on your
                docs, and hand off complex tickets to humans
              </p>
            </div>
            <button className="text-[16px] tracking-[-0.2667px] bg-gradient-to-t from-[#F50000] to-[#FF9452] py-[15px] px-[25px] rounded cursor-pointer hover:opacity-90 transition-opacity">
              See it in action
            </button>
          </div>

          {/* image carousel */}
          <div className="lg:w-[557px] h-max rounded-3xl relative">
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 -right-2 z-10 bg-black/30 hover:bg-black/50 rounded-full p-1 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight
                size={35}
                className="text-white opacity-80 hover:opacity-100"
              />
            </button>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 -left-2 z-10 bg-black/30 hover:bg-black/50 rounded-full p-1 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft
                size={35}
                className="text-white opacity-80 hover:opacity-100"
              />
            </button>

            <div className="w-full h-full flex overflow-hidden rounded-3xl">
              <div
                className="flex w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slider.map((slide, idx) => (
                  <div key={idx} className="w-full flex-shrink-0">
                    <img
                      src={slide}
                      alt={`Feature ${idx + 1}`}
                      className="w-full h-full rounded-3xl object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {slider.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentSlide(idx);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === idx
                      ? "bg-orange-500 scale-125"
                      : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-7 items-center justify-around w-full">
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
              className="flex flex-col lg:flex-row items-center gap-3"
            >
              <img src={img.img} alt="" className="w-[40px]" />
              <div className="flex flex-col items-center lg:items-start gap-3">
                <p className="text-3xl flex items-center gap-1">
                  {img.per}{" "}
                  {img.per === "2.4" ? <X size={30} /> : <Percent size={34} />}{" "}
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
