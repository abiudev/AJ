"use client";

import type React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./button";
import { useEffect, useState, useRef, useCallback } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { Poppins } from "next/font/google";

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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLImageElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Fix hydration mismatch
  useEffect(() => setIsClient(true), []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside handler for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Click outside handler for mobile menu
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuButtonRef.current &&
        !menuButtonRef.current.contains(target) &&
        !document.querySelector(".mobile-menu-container")?.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Handle mobile link click
  const handleMobileLinkClick = useCallback((href: string) => {
    setMenuOpen(false);
    router.push(href);
  }, [router]);

  if (!isClient) {
    return <nav className="fixed top-0 left-0 right-0 z-30 bg-white py-1"></nav>;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white text-gray-700" : "bg-sky-950 text-white"
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
          <li key={link.key} className="relative flex items-center cursor-pointer hover:underline h-full">
            <div className="relative" onMouseEnter={() => setActiveDropdown(link.key)} onMouseLeave={() => setActiveDropdown(null)}>
              <Link href={link.href || "#"} className="flex items-center">
                {link.label}
                {link.subLinks && <IoIosArrowDown className="ml-1" />}
              </Link>

              {activeDropdown === link.key && link.subLinks && (
                <div ref={dropdownRef} className="fixed left-0 right-0 bg-white shadow-lg rounded-b-lg z-20" style={{ top: "64px" }}>
                  <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {link.subLinks.map((subLink: SubLink) => (
                      <div key={subLink.key} className="group p-4 transition-all duration-200 hover:bg-gray-50 hover:shadow-md rounded-lg border border-gray-100">
                        <div className="flex items-center gap-3 mb-2">
                          {subLink.icon}
                          <Link href={subLink.href} className="font-medium text-sm text-sky-950 group-hover:text-orange-600">
                            {subLink.label}
                          </Link>
                        </div>
                        {subLink.description && <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-700">{subLink.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="ml-auto bg-orange-500 p-2 rounded-md sm:mr-6">
        <Link href="/contact">
          <Button type="button" label="Get a Quote" className="py-1 px-3 text-sm text-white" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <Image
        ref={menuButtonRef}
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className="inline-block cursor-pointer sm:mr-2 lg:hidden ml-2"
        onClick={() => setMenuOpen(true)}
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-4/5 max-w-xs bg-white h-full z-20 shadow-lg p-4 lg:hidden overflow-y-auto rounded-l-lg mobile-menu-container">
          <button onClick={() => setMenuOpen(false)} className="text-gray-800 text-xl absolute top-4 right-4">
            <IoMdClose />
          </button>

          <ul className="mt-8 space-y-8 pb-16">
            {NAV_LINKS.map((link: NavLink) => (
              <li key={link.key} className="text-gray-800">
                {link.subLinks ? (
                  <div>
                    <button className="flex justify-between items-center w-full" onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}>
                      {link.label} <IoIosArrowDown />
                    </button>
                    {activeDropdown === link.key && link.subLinks && (
                      <ul className="mt-2 space-y-4 pl-4">
                        {link.subLinks.map((subLink: SubLink) => (
                          <li key={subLink.key} className="py-2 bg-orange-100 rounded-md">
                            <button onClick={() => handleMobileLinkClick(subLink.href)} className="flex items-center gap-2 text-sky-950 hover:text-sky-800 p-2 w-full text-left">
                              {subLink.icon}
                              <span>{subLink.label}</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <button onClick={() => handleMobileLinkClick(link.href || "#")} className="text-left w-full">
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
