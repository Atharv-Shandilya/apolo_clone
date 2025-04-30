"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import FilterSidebar from "../components/FilterSidebar";
import DoctorCard from "../components/DoctorCard";
import Path from "@/components/Path";
import { ArrowUpDown, ChevronDown } from "lucide-react";

// Sample data for doctors
const doctorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "General Physician",
    location: "New York",
    experience: 10,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Internal Medicine",
    location: "San Francisco",
    experience: 8,
  },
  {
    id: 3,
    name: "Dr. Alice Brown",
    specialty: "Pediatrician",
    location: "Los Angeles",
    experience: 6,
  },
  {
    id: 4,
    name: "Dr. Bob White",
    specialty: "General Physician",
    location: "Chicago",
    experience: 12,
  },
];

const HomePage: React.FC = () => {
  const [filters, setFilters] = useState({ specialty: "", location: "" });

  // Function to apply filters and update state
  const handleApplyFilters = (newFilters: {
    specialty: string;
    location: string;
  }) => {
    setFilters(newFilters);
  };

  // Filter the doctors based on the applied filters
  const filteredDoctors = doctorsData.filter((doctor) => {
    return (
      (filters.specialty
        ? doctor.specialty.includes(filters.specialty)
        : true) &&
      (filters.location ? doctor.location.includes(filters.location) : true)
    );
  });

  return (
    <div className="flex w-9/12 m-auto">
      <div className="flex-1/5 text-black">
        <FilterSidebar />
      </div>
      <div className="flex-1/2">
        <Path />
        <section>
          <div className="flex">
            <div className="flex-3/4">
              <h1 className="text-2xl font-bold">
                Consult General Physicians Online - Internal Medicine
                Specialists
              </h1>
              <span>(763 doctors)</span>
            </div>
            <div className="flex-1/4 flex h-12 rounded  border border-gray-400 hover:cursor-pointer justify-center items-center">
              <button className="flex outline-none hover:cursor-pointer">
                {" "}
                <ArrowUpDown />
                <span className="ml-2 mr-5">Availibility</span>
                <ChevronDown />
              </button>
            </div>
          </div>
          <div className="mt-5">
            <DoctorCard
              name="Dr. Suraja Nutulapati"
              specialization="General Physician/ Internal Medicine Specialist"
              experience="10 YEARS"
              qualifications="MBBS, MD (INTERNAL MEDICINE)"
              clinic="Apollo 24|7 Virtual Clinic"
              location="Telangana Hyderabad"
              fee={499}
              isDoctorOfTheHour={true}
              imageUrl="https://images.apollo247.in/doctors/6fa84b84-3da4-495d-8862-651e49e3d406-1704301126434.png?tr=w-74,c-at_max,f-auto,q=80,dpr-2" // Replace with actual image or placeholder
            />
          </div>
        </section>
      </div>
      <div className="flex-1/5 ">a</div>
    </div>
  );
};

export default HomePage;
