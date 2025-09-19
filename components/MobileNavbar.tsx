"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navigationData = [
  {
    id: "1",
    name: "Home",
    href: "/#",
  },

  {
    id: "2",
    name: "Features",
    href: "/Features",
  },
  {
    id: "3",
    name: "About Us",
    href: "/About",
  },

  {
    id: "4",
    name: "Pricing",
    href: "/Pricing",
  },
  ,
];

const MobileNavbar = () => {
  const pathname = usePathname();

  const [navigation, setNavigation] = useState(navigationData);
  const [active, setActive] = useState(false);

  return (
    <div className="lg:hidden relative px-3 ">
      <nav className="bg-[#0F0F0F]   rounded-full w-full max-w-7xl  h-[72px] flex  items-center justify-between  py-[10px] px-5 ">
        <Link
          href="/"
          onClick={() => (setActive(false), setNavigation(navigationData))}
        >
          <div className="">
            <img src="/vulcan.png" alt="" />
          </div>
        </Link>

        {active && (
          <>
            <div
              className="bg-black/50 w-full h-full fixed z-[-998] left-0 top-0 backdrop-blur-xs"
              onClick={() => (setActive(false), setNavigation(navigationData))}
            />
            <section className="absolute  w-full top-[100px] left-0 px-3 z-[999]">
              <div className="bg-[#0F0F0F]  rounded-3xl p-6 space-y-[30px] ">
                <ul className="flex flex-col gap-[30px]">
                  {navigation.map((nav, index) =>
                    nav ? (
                      <li
                        key={index}
                        className="cursor-pointer relative group bg-transparent "
                      >
                        <Link
                          href={nav.href}
                          className={` ${
                            pathname.startsWith(`${nav.href}`)
                              ? "text-[#FF9452] "
                              : ""
                          } hover:text-[#FF9452] transition-all text-[18px] `}
                          onClick={() => (
                            setActive(false), setNavigation(navigationData)
                          )}
                        >
                          <p>{nav.name}</p>{" "}
                        </Link>
                      </li>
                    ) : null
                  )}
                </ul>
                {
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/Contact"
                      onClick={() => (
                        setActive(false), setNavigation(navigationData)
                      )}
                    >
                      <button className="text-[16px] tracking-[-0.2667px] bg-gradient-to-t from-[#F50000] to-[#FF9452] py-[15px] px-[25px] rounded cursor-pointer hover:shadow-[0px_0px_10px_#FF9452] transition-all text-white">
                        Create your agent
                      </button>
                    </Link>
                  </div>
                }
              </div>
            </section>
          </>
        )}

        <div onClick={() => setActive(!active)} className="cursor-pointer">
          {!active ? <Menu size={40} /> : <X size={40} />}
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
