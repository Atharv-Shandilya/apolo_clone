"use client";
import React, { ReactElement } from "react";
import Search from "./Search";
import Login from "./Login";
import { ChevronDown, LocationEdit } from "lucide-react";

export default function Header(): ReactElement {
  return (
    <header className="text-black max-w-full box-shadow ">
      <div className="container max-w-9/12 mx-auto flex justify-center items-center ">
        <div className="flex mr-auto">
          <div className="text-xl font-bold pr-3">
            <img src="apollo247.svg" alt="" />
          </div>
          <div className="flex items-center pl-3">
            <LocationEdit />
            <div className="ml-1">
              <p className="text-xs">Select Location</p>
              <div className="flex hover:cursor-pointer">
                <p className="font-bold">Select Address</p>
                <ChevronDown />
              </div>
            </div>
          </div>
        </div>

        <Search />

        <div className="ml-70">
          <Login />
        </div>
      </div>
      <div className="flex justify-center border-t-2 border-gray-300 mt-2 py-2 max-w-full text-sm font-bold h-12 ">
        <ul className="flex justify-between space-x-6 mt-2 w-7/12">
          <li>
            <a href="#" className="hover:underline hover:text-teal-800">
              Buy Medicines
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-teal-800">
              Find Doctors
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-teal-800">
              Lab Test
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-teal-800">
              Circle Membership
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-teal-800">
              Health Records
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-teal-800">
              Diabetes Reversal
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline hover:text-teal-800">
              Buy Insurance
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
