"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔁 Detect scroll to apply bg-blur + shadow

  //   window.addEventListener("scroll", handleScroll)
  // This tells the browser:
  // 👉 “Hey, whenever the user scrolls the page, run the handleScroll function.”

  // return () => window.removeEventListener("scroll", handleScroll)
  // This is a cleanup function.

  // When your component is removed from the screen, it tells the browser:
  // 👉 “Stop listening to scroll events now — clean up to prevent memory leaks.”

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between px-4 py-5 max-w-7xl mx-auto sm:px-6 lg:px-8">
          <h1 className="text-2xl lg:text-3xl font-bold gradient-text">Jitesh Gopale</h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-7 text-sm lg:text-lg font-medium cursor-pointer">
            <Link href="/" className="transition-colors hover:text-blue-500">
              Home
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-blue-500"
            >
              About
            </Link>
            <Link
              href="/skills"
              className="transition-colors hover:text-blue-500"
            >
              Skills
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-blue-500"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-blue-500"
            >
              Contact
            </Link>
          </ul>
          <div className="hidden md:flex gap-5 items-center">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Jitugopale" target="_blank">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/jitesh-gopale-144565242"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:jiteshgopale26@gmail.com?subject=Opportunity%20for%20Full%20Stack%20Developer&body=Hi%20Jitesh,%0D%0A%0D%0AI%20came%20across%20your%20portfolio...">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Mobile Navigation */}
          {isOpen && (
            // <ul className='absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center gap-4 py-4 md:hidden'>
            //   <Link href="#" className='transition-colors hover:text-blue-500'>Home</Link>
            //   <Link href="#" className='transition-colors hover:text-blue-500'>About</Link>
            //   <Link href="#" className='transition-colors hover:text-blue-500'>Skills</Link>
            //   <Link href="#" className='transition-colors hover:text-blue-500'>Projects</Link>
            //   <Link href="#" className='transition-colors hover:text-blue-500'>Contact</Link>
            // </ul>
            <ul className="px-10 pt-5 pb-3 space-y-1 flex flex-col absolute shadow-lg top-16 left-0 bg-white dark:bg-gray-800 w-full md:hidden gap-7 text-sm font-medium cursor-pointer">
              <Link
                href="/"
                className="transition-colors hover:text-blue-500 text-blue-500"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-blue-500"
              >
                About
              </Link>
              <Link
                href="/skills"
                className="transition-colors hover:text-blue-500"
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="transition-colors hover:text-blue-500"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-blue-500"
              >
                Contact
              </Link>
            </ul>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
