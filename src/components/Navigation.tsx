"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Fix hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between px-4 py-5 max-w-7xl mx-auto sm:px-6 lg:px-8">

        {/* Logo */}
        <h1 className="text-2xl lg:text-3xl font-bold gradient-text">
          Jitesh Gopale
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7 text-sm lg:text-lg font-medium cursor-pointer">
          <Link href="/" className="transition-colors hover:text-blue-500">
            Home
          </Link>

          <Link href="/about" className="transition-colors hover:text-blue-500">
            About
          </Link>

          <Link href="/skills" className="transition-colors hover:text-blue-500">
            Skills
          </Link>

          <Link href="/projects" className="transition-colors hover:text-blue-500">
            Projects
          </Link>

          <Link href="/contact" className="transition-colors hover:text-blue-500">
            Contact
          </Link>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5 items-center">

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/Jitugopale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://linkedin.com/in/jitesh-gopale-144565242"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:jiteshgopale26@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>

          {/* Theme Toggle */}
          {mounted && (
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-xl md:hidden px-6 py-6 flex flex-col gap-2">

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg font-medium text-blue-500 bg-blue-50 dark:bg-gray-700"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            About
          </Link>

          <Link
            href="/skills"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            Skills
          </Link>

          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-700"
          >
            Contact
          </Link>

          {/* Mobile Theme Toggle */}
          {mounted && (
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <>
                  <Sun className="h-5 w-5 mr-2" />
                  Light Mode
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5 mr-2" />
                  Dark Mode
                </>
              )}
            </Button>
          )}
        </ul>
      )}
    </div>
  );
};

export default Navigation;