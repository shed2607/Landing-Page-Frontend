"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";

const HeaderSection = () => {
  const link = [
    {
      name: "Home",
      href: "#first",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Service",
      href: "#service",
    },
    {
      name: "Prices",
      href: "#price",
    },
    {
      name: "Testimonial",
      href: "#testimonial",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  return (
    <header className="px-64 py-5 fixed w-full">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] "
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <nav className="flex items-center justify-between">
        <div>
          <Image src="/A0.png" alt="Logo" width={100} height={200} />
        </div>
        <div>
          {link.map((item, index) => {
            return <NavBtn key={index} to={item.href} name={item.name} />;
          })}
        </div>
      </nav>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: "polygon(74.1% 55.9%, 100% 38.4%, 97.5% 73.1%, 85.5% 99.9%, 80.7% 98%, 72.5% 67.5%, 60.2% 37.6%, 52.4% 31.9%, 47.5% 41.7%, 45.2% 65.5%, 27.5% 23.3%, 0.1% 35.1%, 17.9% 0%, 27.6% 23.2%, 76.1% 2.3%, 74.1% 55.9%)",

          }}
        />
      </div>
    </header>
  );
};

const NavBtn = (prop) => {
  return (
    <Link
      className="navlink group pr-10 cursor-pointer"
      to={prop.to}
      spy={true}
      smooth={true}
      offset={0}
      duration={100}
      activeClass="active-link"
    >
      <span className="line"></span>
      <span className="text">{prop.name}</span>
    </Link>
  );
};

export default HeaderSection;
