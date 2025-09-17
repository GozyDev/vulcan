import Image from "next/image";
import { features } from "@/app/data";
import Link from "next/link";

export default function FeatureCards() {
  return (
    <section className="py-[70px] pt-[200px] px-[15px]  md:px-[30px] space-y-[70px]">
      <div className="space-y-5 max-w-[800px]  mx-auto  ">
        <h1 className="text-6xl md:text-[90px]  md:leading-[64px] tracking-[-2.7506px] bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent  text-center ">
          Features
        </h1>
        <p className="text-[15px] md:text-[18px] leading-[27px] text-[#969696] text-center">
          Our features elevate your support, from multilingual conversations to
          advanced integrations, Vulcan comes with powerful extras that make
          your support smarter, faster, and ready to scale.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#0F0F0F] rounded-2xl p-4 shadow-lg hover:shadow-xl transition"
            >
              <Link href={`/Features/${feature.title}`}>
                <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <h3 className="text-white text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-[#969696] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
