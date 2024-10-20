import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Close mobile menu on window resize when screen size exceeds mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        // 640px is the 'sm' breakpoint in Tailwind
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#054e83] sticky top-0 z-30 w-full bg-main backdrop-blur-3xl print:hidden">
      <header className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%]">
        {/* Logo */}
        <Link href="/">
          <Image
            className="mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]"
            src={"/logo.png"}
            height={113}
            width={90}
            alt="This Is Our Logo"
          />
        </Link>

        {/* Text */}
        <h1 className="roboto-bold text_shadow hidden text-[15px] font-extrabold text-[#bad8f0] lg:block xl-lg:text-xl xl:text-2xl">
          Tuition Free Education Program on Latest Technologies
        </h1>
        <h1 className="text_shadow text-[1.125rem] font-extrabold text-[#b9d8f3] lg:hidden">
          Tuition Free Program
        </h1>

        {/* Desktop Menu */}
        <div>
          <ul className="hidden items-center gap-8 text-[#FAF9F6] sm:flex lg:gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/apply">Apply</Link>
            </li>
            <li>
              <Link href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link href="/result">Result</Link>
            </li>

            {/* Courses Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="flex items-center">
                Courses
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Dropdown Menu with Tailwind Animation */}
              <ul
                className={classNames(
                  "absolute right-0 mt-2 w-[350px] bg-white text-black shadow-lg transition-all duration-300 py-5 px-3",
                  {
                    "opacity-0 transform -translate-y-2 pointer-events-none":
                      !isDropdownOpen,
                    "opacity-100 transform translate-y-0 pointer-events-auto":
                      isDropdownOpen,
                  }
                )}
              >
                {/* Core Courses Heading */}
                <h1 className="capitalize font-bold text-2xl border-b border-gray-300 pb-2 mb-3">
                  Core Courses
                </h1>

                <li className="hover:text-[#054e83] p-1">
                  <Link href="/courses/web">Programming Fundamentals</Link>
                </li>
                <li className="hover:text-[#054e83] p-1">
                  <Link href="/courses/data">Web 2 Using NextJs</Link>
                </li>
                <li className="hover:text-[#054e83] p-1">
                  <Link href="/courses/ai">Earn As You Learn</Link>
                </li>

                {/* Advanced Courses Heading */}
                <h1 className="capitalize font-bold text-2xl border-b border-gray-300 pb-2 mt-5">
                  Advanced Courses
                </h1>

                {/* Advanced Courses List */}
                <ul className="mt-2 space-y-2">
                  <li className="hover:text-[#054e83] p-1">
                    <Link href="/courses/data-science">Data Science</Link>
                  </li>
                  <li className="hover:text-[#054e83] p-1">
                    <Link href="/courses/ai">AI & Machine Learning</Link>
                  </li>
                  <li className="hover:text-[#054e83] p-1">
                    <Link href="/courses/web-development">
                      Advanced Web Development
                    </Link>
                  </li>
                  <li className="hover:text-[#054e83] p-1">
                    <Link href="/courses/cyber-security">Cyber Security</Link>
                  </li>
                  <li className="hover:text-[#054e83] p-1">
                    <Link href="/courses/cloud-computing">Cloud Computing</Link>
                  </li>
                  <li className="hover:text-[#054e83] p-1">
                    <Link href="/courses/ux-ui-design">UX/UI Design</Link>
                  </li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="block sm:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              className="text-white w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Fullscreen */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef} // Add ref for mobile menu
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#054e83] min-h-[100vh] text-white"
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="space-y-8 text-lg text-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/apply">Apply</Link>
            </li>
            <li>
              <Link href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link href="/result">Result</Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center"
              >
                Courses
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Dropdown Menu with Tailwind Animation */}
              <ul
                className={classNames(
                  "absolute right-[-150px] mt-2 w-[400px] bg-white text-black shadow-lg transition-all duration-300 py-5 px-3",
                  {
                    "opacity-0 transform -translate-y-2 pointer-events-none":
                      !isDropdownOpen,
                    "opacity-100 transform translate-y-0 pointer-events-auto":
                      isDropdownOpen,
                  }
                )}
              >
                {/* Core Courses Heading */}
                <h1 className="capitalize font-bold text-xl border-b border-gray-300 pb-2 mb-3 text-center">
                  Core Courses
                </h1>

                <li className="hover:text-[#054e83] p-2 text-center">
                  <Link href="/courses/web">Programming Fundamentals</Link>
                </li>
                <li className="hover:text-[#054e83] p-2 text-center">
                  <Link href="/courses/data">Web 2 Using NextJs</Link>
                </li>
                <li className="hover:text-[#054e83] p-2 text-center">
                  <Link href="/courses/ai">Earn As You Learn</Link>
                </li>

                {/* Advanced Courses Heading */}
                <h1 className="capitalize font-bold text-xl border-b border-gray-300 pb-2 mt-5 text-center">
                  Advanced Courses
                </h1>

                {/* Advanced Courses List */}
                <ul className="mt-2 space-y-2">
                  <li className="hover:text-[#054e83] p-2 text-center">
                    <Link href="/courses/data-science">Data Science</Link>
                  </li>
                  <li className="hover:text-[#054e83] p-2 text-center">
                    <Link href="/courses/ai">AI & Machine Learning</Link>
                  </li>
                  <li className="hover:text-[#054e83] p-2 text-center">
                    <Link href="/courses/web-development">
                      Advanced Web Development
                    </Link>
                  </li>
                  <li className="hover:text-[#054e83] p-2 text-center">
                    <Link href="/courses/cyber-security">Cyber Security</Link>
                  </li>
                  <li className="hover:text-[#054e83] p-2 text-center">
                    <Link href="/courses/cloud-computing">Cloud Computing</Link>
                  </li>
                  <li className="hover:text-[#054e83] p-2 text-center">
                    <Link href="/courses/ux-ui-design">UX/UI Design</Link>
                  </li>
                </ul>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
