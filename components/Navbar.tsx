import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const navigation = [
  {
    name: "Home",
    href: "/#",
  },

  {
    name: "Features",
    href: "/Pricing",
  },
  {
    name: "About Us",
    href: "/#solutions",
  },

  {
    name: "Pricing",
    href: "/Pricing",
  },
];

const Navbar = () => {
  return (
    <div className="hidden lg:block px-3">
      <nav className="bg-[#0F0F0F]  rounded-[17px] max-w-7xl mx-auto h-[72px] flex  items-center justify-between pl-[40px] px-[20px] py-[40px] shadow-[inset_0_0_5px_rgb(225,225,225,0.05)]">
        <Link href="/">
          <div className="">
            <img src="/vulcan.png" alt="" />
          </div>
        </Link>

        <div>
          <ul className="flex gap-9">
            {navigation.map((nav, index) => (
              <li
                key={index}
                className="cursor-pointer relative group bg-transparent "
              >
                <Link
                  href={nav.href}
                  className="hover:text-[#FF9452] transition-all text-[18px] "
                >
                  <p>{nav.name}</p>{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex">
          <Link href="/signup">
            <button className="text-[16px] tracking-[-0.2667px] bg-gradient-to-t from-[#F50000] to-[#FF9452] py-[15px] px-[25px] rounded cursor-pointer hover:shadow-[0px_0px_10px_#FF9452] transition-all text-white">
              Create your agent
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
