"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./button";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const poppinsFont = Poppins({ subsets: ["latin"], weight: "400" });

interface SubLink {
  href: string;
  key: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavLink {
  href?: string;
  key: string;
  label: string;
  subLinks?: SubLink[];
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    setActiveDropdown(null);
    router.push(href);
  };

  const handleDropdownEnter = (key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out bg-white ${
        scrolled ? "!sm:bg-white" : "sm:bg-sky-950"
      } flex items-center justify-start max-container py-1`}
    >
      <Link href="/">
        <Image
          src="/aj.png"
          alt="logo"
          width={200}
          height={200}
          className="mt-2 lg:ml-48 sm:ml-0 w-auto h-[50px] transition-all duration-300"
        />
      </Link>

      <ul className={`hidden lg:flex text-sm h-full gap-6 ml-20 ${poppinsFont.className}`}>
        {NAV_LINKS.map((link: NavLink) => (
          <li
            key={link.key}
            className={`relative regular-16 flex items-center cursor-pointer hover:underline h-full ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.subLinks ? (
              <div
                onMouseEnter={() => handleDropdownEnter(link.key)}
                onMouseLeave={handleDropdownLeave}
                className="h-full flex items-center"
              >
                <Link href="#" className="flex items-center">
                  {link.label}
                  <IoIosArrowDown className="ml-1" />
                </Link>
              </div>
            ) : (
              <Link href={link.href || "#"}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>

      <div className="ml-auto bg-orange-500 p-2 rounded-md sm:mr-6">
        <Button
          type="button"
          label="Get a Quote"
          className={`${scrolled ? "text-white" : "text-sky-950"} py-1 px-3 text-sm`}
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className="inline-block cursor-pointer sm:mr-2 lg:hidden ml-2"
        onClick={() => setMenuOpen(true)}
      />
      
      {activeDropdown && (
        <div 
          className="absolute left-0 right-0 top-full bg-white shadow-lg z-20 hidden lg:block"
          onMouseEnter={() => {
            if (dropdownTimeoutRef.current) {
              clearTimeout(dropdownTimeoutRef.current);
              dropdownTimeoutRef.current = null;
            }
          }}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="h-4 absolute -top-4 left-0 right-0"></div>
          
          <div className="max-w-screen-xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {NAV_LINKS.find(link => link.key === activeDropdown)?.subLinks?.map((subLink) => (
                <div
                  key={subLink.key}
                  className="group p-4 transition-all duration-200 hover:bg-gray-50 hover:shadow-md rounded-lg border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {subLink.icon}
                    <Link
                      href={subLink.href}
                      className="font-medium text-sm text-sky-950 group-hover:text-orange-600"
                    >
                      {subLink.label}
                    </Link>
                  </div>
                  {subLink.description && (
                    <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-700">
                      {subLink.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-0 right-0 w-4/5 max-w-xs bg-white h-full z-20 shadow-lg p-4 lg:hidden overflow-y-auto rounded-l-lg"
          style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 8px" }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 text-xl absolute top-4 right-4"
          >
            <IoMdClose />
          </button>

          <ul className="mt-8 space-y-8 pb-16">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="text-gray-800">
                {link.subLinks ? (
                  <div>
                    <button
                      className="flex justify-between items-center w-full"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.key ? null : link.key
                        )
                      }
                    >
                      {link.label} <IoIosArrowDown />
                    </button>
                    {activeDropdown === link.key && (
                      <ul className="mt-2 space-y-4 pl-4">
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.key} className="py-2 bg-orange-100 rounded-md">
                            <button
                              onClick={() => handleLinkClick(subLink.href)}
                              className="flex items-center gap-2 text-sky-950 hover:text-sky-800 p-2 w-full text-left"
                            >
                              {subLink.icon}
                              <span>{subLink.label}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <button onClick={() => handleLinkClick(link.href || "#")} className="text-left w-full block">
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;