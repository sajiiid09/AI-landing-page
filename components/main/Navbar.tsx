
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const racoOptions = [
  { label: "AI for everyone", href: "/everyone" },
  { label: "AI for business", href: "/business" },
  { label: "AI custom solution and consultancy", href: "/custom" },
];

const Navbar = () => {
  const [isRacoMenuOpen, setIsRacoMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isRacoMenuOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsRacoMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsRacoMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRacoMenuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-[65px] max-w-6xl items-center justify-between px-6 sm:px-10">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            aria-expanded={isRacoMenuOpen}
            aria-controls="raco-menu"
            onClick={() => setIsRacoMenuOpen((prev) => !prev)}
            className="flex h-auto w-auto flex-row items-center focus:outline-none"
          >
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />

            <span className="ml-3 hidden text-base font-semibold text-slate-100 md:block">
              RACO AI
            </span>
          </button>

          <AnimatePresence>
            {isRacoMenuOpen && (
              <motion.div
                id="raco-menu"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute left-0 top-full mt-3 max-w-[calc(100vw-2rem)]"
              >
                <div className="flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 backdrop-blur-xl shadow-xl sm:flex-nowrap">
                  {racoOptions.map((option) => (
                    <Link
                      key={option.href}
                      href={option.href}
                      onClick={() => setIsRacoMenuOpen(false)}
                      className="whitespace-nowrap cursor-pointer rounded-xl px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10"
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden w-[500px] max-w-full flex-1 items-center justify-end md:flex">
          <div className="flex w-full items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-2 text-slate-100">
            <a href="#about-me" className="text-sm font-medium transition-colors hover:text-white">
              RACO
            </a>
            <a href="#skills" className="text-sm font-medium transition-colors hover:text-white">
              Agents
            </a>
            <a href="#projects" className="text-sm font-medium transition-colors hover:text-white">
              Company
            </a>
            <a href="#projects" className="text-sm font-medium transition-colors hover:text-white">
              Career
            </a>
            <a href="#projects" className="text-sm font-medium transition-colors hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <button className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-white/10">
            Join RACO
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
