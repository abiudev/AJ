"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.1;
      setScrolled(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white sm:bg-sky-950 !important md:bg-sky-950 lg:bg-white xl:bg-white"
          : "bg-sky-950 sm:bg-white !important md:bg-white lg:bg-sky-950 xl:bg-sky-950"
      } flex items-center justify-start max-container py-1`}
    >
      <Link href="/">
        <Image
          src="/aj.png"
          alt="logo"
          width={200}
          height={200}
          className="ml-auto sm:ml-2 mt-2 w-auto h-[50px] transition-all duration-300"
        />
      </Link>

      <ul className="hidden lg:flex text-black h-full gap-6 ml-20">
        {NAV_LINKS.map((link) => (
          <li
            key={link.key}
            className={`relative regular-16 flex p-0.5 items-center cursor-pointer hover:underline h-full ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onMouseEnter={() => setActiveDropdown(link.key)}
          >
            {/* For regular links */}
            {!link.subLinks && (
              <div className="flex flex-col">
                <Link href={link.href}>{link.label}</Link>
                {link.description && (
                  <span
                    className={`text-xs ${
                      scrolled ? "text-gray-500" : "text-gray-300"
                    }`}
                  >
                    {link.description}
                  </span>
                )}
              </div>
            )}

            {/* For dropdown links */}
            {link.subLinks && (
              <div className="relative h-full">
                <div className="flex flex-col">
                  <span>{link.label}</span>
                  {link.description && (
                    <span
                      className={`text-xs ${
                        scrolled ? "text-gray-500" : "text-gray-300"
                      }`}
                    >
                      {link.description}
                    </span>
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="ml-auto bg-orange-500  p-2  rounded-md sm:mr-6">
        <Button
          type="button"
          icon=""
          label="Get a Quote"
          className={`${
            scrolled ? "text-white " : " text-sky-950"
          } py-1 px-3 text-sm`}
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className="inline-block cursor-pointer sm:mr-2 lg:hidden ml-2"
      />

      {activeDropdown === "services" && (
        <div
          className="fixed top-[68px] left-0 right-0 bg-white shadow-lg overflow-x-auto"
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="w-full py-8 ">
            <div className="w-full grid grid-cols-3 grid-rows-2 gap-8 px-8">
              {NAV_LINKS.find((link) => link.key === "services")?.subLinks.map(
                (subLink) => (
                  <Link
                    href={subLink.href}
                    key={subLink.key}
                    className="group block p-2 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:shadow-md"
                  >
                    <div className="font-medium text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                      {subLink.label}
                    </div>
                    {subLink.description && (
                      <p className="text-gray-500 mt-2 group-hover:text-gray-700">
                        {subLink.description}
                      </p>
                    )}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
