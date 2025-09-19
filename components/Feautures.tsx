import Image from "next/image";

const vidsec = [
  {
    feature: "Personalized Chatbot",
    txt: "Reliable answers with our AI assistant designed to understand, assist, and resolve in real time.",
    vid: "/Feautures/vid1.mp4",
  },
  {
    feature: "Help Center & Docs",
    txt: "Beautiful, searchable knowledge base with categories, tags, and versioning.",
    vid: "/Feautures/vid2.webm",
  },
  {
    feature: "Smart Ticketing",
    txt: "Routes and summarizes tickets. One view for email, chat, and form submissions.",
    vid: "/Feautures/vid3.webm",
  },
];

const vidsec2 = [
  {
    feature: "Custom Automations",
    txt: "Rules for SLAs, autoresponses, tagging, and follow-ups. No-code, with templates.",
    vid: "/Feautures/vid4.webp",
  },
  {
    feature: "Detailed Insights",
    txt: "Topic clusters, deflection rate, time-to-first-response, and satisfaction trends.",
    vid: "/Feautures/vid5.webp",
  },
];

const logos = [
  "/Feautures/el1.png",
  "/Feautures/el2.png",
  "/Feautures/el3.png",
];
const logo2 = [
  "/Feautures/el4.png",
  "/Feautures/el5.png",
  "/Feautures/el6.png",
];
// Create enough duplicates for seamless looping
const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];
const duplicatedLogos2 = [...logo2, ...logo2, ...logo2, ...logo2];

const Feautures = () => {
  return (
    <section className="py-[150px] pt-[50px] px-[15px] md:px-[30px] space-y-[70px]">
      <div className="space-y-5 max-w-[800px]  mx-auto  ">
        <h1 className="text-4xl md:text-[56px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
          You don&apos;t need a support team, You need vulcan
        </h1>
        <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center">
          Vulcan gives you the full toolkit to deliver great customer
          experiences.
        </p>
      </div>

      <div className=" max-w-7xl mx-auto space-y-[25px]">
        <div className="flex flex-col lg:flex-row gap-[25px] h-max">
          {vidsec.map((vid, idx) => (
            <div
              key={idx}
              className="bg-[#0F0F0F] w-full p-10 px-6 md:px-10 rounded-[16.6px] md:flex items-center gap-6 lg:block   "
            >
              <div>
                <h4 className="text-[22px] ">{vid.feature}</h4>
                <p className="text-[16px] mt-3 text-[#969696]">{vid.txt}</p>
              </div>
              <video
                src={vid.vid}
                autoPlay
                loop
                muted
                playsInline
                poster="/fallback.jpg"
                aria-hidden="true"
                className="w-[300px] h-[220px] mx-auto mt-8"
              ></video>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row  gap-[25px] h-max ">
          {vidsec2.map((vid, idx) => (
            <div
              key={idx}
              className="bg-[#0F0F0F] w-full p-10 rounded-[16.6px] md:flex items-center gap-6 lg:block"
            >
              <div>
                <h4 className="text-[22px] ">{vid.feature}</h4>
                <p className="text-[16px] mt-3 text-[#969696]">{vid.txt}</p>
              </div>
              <img
                src={vid.vid}
                className=" md:w-1/2 lg:w-full rounded-2xl h mt-8"
                alt=""
              ></img>
            </div>
          ))}
        </div>

        <div className="bg-[#0F0F0F] w-full p-10 rounded-[16.6px] gap-6 flex flex-col-reverse md:flex-row justify-between items-center overflow-hidden">
          <div>
            <h4 className="text-[22px] ">Integrations</h4>
            <p className="text-[16px] mt-3 text-[#969696]">
              Connect Google-meet, WordPress, Slack, Gmail, Zapier/Make,
              HubSpot.
            </p>
          </div>

          <div className="max-w-[520px] space-y-[10px] relative">
            <div className="absolute bg-[#0F0F0F] z-[10] h-full w-[10px] md:w-[50px] top-0 left-0 shadow-[5px_0px_5px_#0F0F0F]"/>
            <div className="absolute bg-[#0F0F0F] z-[10] h-full w-[10px] md:w-[50px] top-0 right-0 shadow-[-5px_0px_5px_#0F0F0F]"/>
            {/* Row 1: Right → Left */}
            <div className="relative flex overflow-hidden group  w-full ">
              <div className="flex animate-marquee-left whitespace-nowrap">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={`row1-${index}`}
                    className="inline-flex items-center  transition-all duration-300 hover:scale-110 flex-shrink-0"
                  >
                    <Image
                      src={logo}
                      alt={logo}
                      width={140}
                      height={70}
                      className="drop-shadow-xl w-[110px] h-[110px] mx-1 rounded-3xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Left → right */}
            <div className="relative flex overflow-hidden group w-full">
              <div className="flex animate-marquee-right whitespace-nowrap">
                {duplicatedLogos2.map((logo, index) => (
                  <div
                    key={`row2-${index}`}
                    className="inline-flex items-center  transition-all duration-300 hover:scale-110 flex-shrink-0"
                  >
                    <Image
                      src={logo}
                      alt={logo}
                      width={140}
                      height={70}
                      className="drop-shadow-xl w-[110px] h-[110px] mx-1 rounded-3xl"
                    />
                  </div>
                ))}
              </div>

              {/* Mirror element for seamless looping */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feautures;
