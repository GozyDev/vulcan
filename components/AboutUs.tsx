import React from "react";
import Image from "next/image";
import { Percent, X } from "lucide-react";
const vidsec = [
  {
    feature: "Michael Lawson",
    txt: "Founder / CEO ",
    vid: "/About/a6.png",
  },
  {
    feature: "Priya Mehta",
    txt: "Head of Engineering",
    vid: "/About/a5.png",
  },
  {
    feature: "Brianne Kim",
    txt: "Product Manager",
    vid: "/About/a7.png",
  },
  {
    feature: "Kenji Tanaka",
    txt: "AI/ML Engineer",
    vid: "/About/a4.png",
  },
  {
    feature: "Sarah Lopez",
    txt: "Head of Customer Success",
    vid: "/About/a3.png",
  },
  {
    feature: "Johnson Enoch",
    txt: "Senior Product Designer",
    vid: "/About/a2.png",
  },
];

const AboutUs = () => {
  return (
    <section className="py-[70px]  pt-[150px] md:pt-[200px] px-[15px]  md:px-[30px] space-y-[70px]">
      <div className="space-y-5 max-w-[800px]  mx-auto  ">
        <h1 className="text-6xl md:text-[90px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
          About Us
        </h1>
        <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center">
          Building smarter support with Vulcan, one conversation at a time.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-[90px]">
        <div className="">
          <img
            src="/About/a1.jpg"
            alt=""
            className="h-[500px] w-full object-cover rounded-[20px]"
          />
        </div>

        <div className="space-y-5  mx-auto  ">
          <h2 className="text-6xl md:text-[70px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
            Who We Are
          </h2>
          <p className="text-[15px] md:text-[17px] leading-[27px] text-[#969696] text-center">
            At <b>Vulcan</b>, we’re redefining how businesses connect with their
            customers. Our platform combines the power of AI automation with
            human-focused design, helping teams deliver faster, smarter, and
            more personal support at scale.
          </p>

          <p className="text-[15px] md:text-[17px] leading-[27px] text-[#969696] text-center">
            We started with a simple belief: customer support should be
            effortless. Today, we’re proud to serve businesses across
            industries—ecommerce, fintech, SaaS, and beyond—by turning complex
            workflows into seamless conversations.
          </p>
        </div>

        <div className="space-y-5  mx-auto  ">
          <h2 className="text-6xl md:text-[70px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
            Our Mission
          </h2>
          <p className="text-[15px] md:text-[17px] leading-[27px] text-[#969696] text-center">
            To empower businesses of all sizes with tools that make customer
            interactions easier, more efficient, and more impactful.
          </p>

          <p className="text-[15px] md:text-[17px] leading-[27px] text-[#969696] text-center">
            We’re not here just to reduce ticket volume—we’re here to improve
            experiences, build trust, and help teams grow without losing their
            personal touch.
          </p>
        </div>

        <div className="space-y-5  mx-auto  ">
          <h2 className="text-6xl md:text-[70px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
            Our Values
          </h2>
          <p className="text-[15px] md:text-[17px] leading-[27px] text-[#969696] text-center">
            <b>Innovation with Purpose</b> → Every feature we build is designed
            to solve real customer challenges.
          </p>
          <p className="text-[15px] md:text-[17px] leading-[27px] text-[#969696] text-center">
            <b>Transparency & Trust → </b>We believe great support starts with
            honesty and reliability.
          </p>
          <p className="text-[15px] md:text-[17px] leading-[27px] text-[#969696] text-center">
            <b>Scalability for All →</b> Whether you’re a startup or enterprise,
            our tools grow with you.
          </p>
          <p className="text-[15px] md:text-[17px] leading-[27px] text-[#969696] text-center">
            <b>Human + AI Synergy → </b>Technology should amplify people, not
            replace them.
          </p>
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
                  {img.per}{" "}
                  {img.per === "2.4" ? <X size={30} /> : <Percent size={34} />}{" "}
                </p>
                <p className="text-[14px]">{img.txt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-[70px] ">
        <div className="space-y-5 max-w-[800px]  mx-auto  ">
          <h1 className="text-4xl md:text-[56px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
            Support that scales
          </h1>
          <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center">
            Unlock the Full Potential of Your Experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[25px] h-max ">
          {vidsec.map((vid, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-neutral-900 to-black w-full p-10 rounded-[16.6px] flex flex-col items-center justify-center space-y-[25px]"
            >
              <img src={vid.vid} className="w-[180px] h-[180px] object-cover rounded-full"></img>
              <div className="">
                <h4 className="text-[22px] text-center">{vid.feature}</h4>
                <p className="text-[16px] mt-3 text-[#969696] text-center">
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

export default AboutUs;
