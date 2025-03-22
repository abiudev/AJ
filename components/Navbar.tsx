"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./button"
import { useEffect, useState, useRef } from "react"
import { IoIosArrowDown, IoMdClose } from "react-icons/io"
import { Poppins } from "next/font/google"

const poppinsFont = Poppins({ subsets: ["latin"], weight: "400" })

interface SubLink {
  href: string
  key: string
  label: string
  description?: string
  icon?: React.ReactNode
}

interface NavLink {
  href?: string
  key: string
  label: string
  subLinks?: SubLink[]
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const threshold = window.innerHeight * 0.1
      setScrolled(scrollPosition > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setActiveDropdown(key)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // 300ms delay before hiding dropdown
  }

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out bg-white sm:bg-sky-950 md:bg-sky-950 lg:bg-sky-950 xl:bg-sky-950 ${
        scrolled
          ? "bg-white !sm:bg-sky-950 md:bg-sky-950 lg:bg-white xl:bg-white"
          : "bg-sky-950 sm:bg-white md:bg-white lg:bg-sky-950 xl:bg-sky-950"
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
            <div className="relative" onMouseEnter={() => handleMouseEnter(link.key)} onMouseLeave={handleMouseLeave}>
              <Link href={link.href || "#"} className="flex items-center">
                {link.label}
                {link.key === "services" && <IoIosArrowDown className="ml-1" />}
              </Link>

              {link.key === "services" && activeDropdown === link.key && link.subLinks && (
                <div
                  ref={dropdownRef}
                  className="fixed left-0 right-0 bg-white shadow-lg rounded-b-lg z-20"
                  style={{
                    top: scrolled ? "64px" : "64px",
                    width: "100%",
                  }}
                  onMouseEnter={() => handleMouseEnter(link.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="container mx-auto px-4 py-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {link.subLinks.map((subLink: SubLink) => (
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
            </div>
          </li>
        ))}
      </ul>

      <div className="ml-auto bg-orange-500 p-2 rounded-md sm:mr-6">
        <Link href="/contact">
          <Button
            type="button"
            label="Get a Quote"
            className={`${scrolled ? "text-white" : "text-sky-950"} py-1 px-3 text-sm`}
          />
        </Link>
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className="inline-block cursor-pointer sm:mr-2 lg:hidden ml-2"
        onClick={() => setMenuOpen(true)}
      />

      {menuOpen && (
        <div
          className="fixed top-0 right-0 w-4/5 max-w-xs bg-white h-full z-20 shadow-lg p-4 lg:hidden overflow-y-auto"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 8px",
            maxHeight: "calc(65vh - 20px)",
          }}
        >
          <button onClick={() => setMenuOpen(false)} className="text-gray-800 text-xl absolute top-4 right-4">
            <IoMdClose />
          </button>

          <ul className="mt-8 space-y-8 pb-16">
            {NAV_LINKS.map((link: NavLink) => (
              <li key={link.key} className="text-gray-800">
                {link.subLinks ? (
                  <div>
                    <button
                      className="flex justify-between items-center w-full"
                      onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}
                    >
                      {link.label} <IoIosArrowDown />
                    </button>
                    {activeDropdown === link.key && link.subLinks && (
                      <ul className="mt-2 space-y-4 pl-4">
                        {link.subLinks.map((subLink: SubLink) => (
                          <li key={subLink.key} className="py-2">
                            <Link
                              href={subLink.href}
                              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                            >
                              {subLink.icon}
                              <span>{subLink.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={link.href || "#"}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar

