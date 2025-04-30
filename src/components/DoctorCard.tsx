import React, { ReactElement } from "react";

interface DoctorCardProps {
  name: string;
  specialization: string;
  experience: string;
  qualifications: string;
  clinic: string;
  location: string;
  fee: number;
  isDoctorOfTheHour?: boolean;
  imageUrl: string;
}

export default function DoctorCard({
  name,
  specialization,
  experience,
  qualifications,
  clinic,
  location,
  fee,
  isDoctorOfTheHour,
  imageUrl,
}: DoctorCardProps): ReactElement {
  return (
    <div className="flex justify-between items-center border border-gray-300 rounded-sm p-4">
      {/* Doctor Image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-16 h-16 rounded object-cover mr-4"
      />

      {/* Doctor Info */}
      <div className="flex-1 ml-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <p className="text-sm text-gray-600">{specialization}</p>
        <p className="text-sm font-medium text-purple-700 mt-1">
          {experience} · {qualifications}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {clinic} – {location}
        </p>
      </div>

      {/* Right Side */}
      <div className="text-right ml-4">
        <p className="text-lg font-semibold">₹{fee}</p>
        <button className="mt-2 px-4 py-1 border border-blue-600 text-blue-600 rounded">
          Consult Online
        </button>
      </div>
    </div>
  );
}
