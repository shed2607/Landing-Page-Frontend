"use client";
import React from "react";
import { Link } from "react-scroll";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white bg-opacity-80 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <div className="flex flex-col items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          <Image src={"/A0.png"} alt="Logo" width={100} height={200} />
        </div>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#first"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#service"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              
            >
              Services
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#price"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
             Prices
            </Typography>
          </li>

          <li>
            <Typography
              as="a"
              href="#contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 XYZ
      </Typography>
    </footer>
  );
};

export default Footer;
