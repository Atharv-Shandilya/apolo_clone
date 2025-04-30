"use client";

import { useState } from "react";

interface FilterSidebarProps {
  onFilterChange?: (filters: Record<string, any>) => void;
}

export default function FilterSidebar({
  onFilterChange,
}: FilterSidebarProps): React.ReactElement {
  const [modeOfConsult, setModeOfConsult] = useState({
    hospital: true,
    online: true,
  });

  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [languageExpanded, setLanguageExpanded] = useState(false);

  const toggleExperience = () => setExperienceExpanded((prev) => !prev);
  const toggleLanguage = () => setLanguageExpanded((prev) => !prev);

  const handleModeOfConsult = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    console.log(name, checked);

    setModeOfConsult((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <aside className="w-9/12 max-w-xs border-r border-gray-300 m-3 p-1 space-y-6 text-sm">
      <div className="flex justify-between items-center border-b-2 px-2 border-gray-300">
        <h2 className="text-lg font-semibold">Filters</h2>
        <button className="text-blue-600 hover:underline">Clear All</button>
      </div>

      <button className="w-full border border-teal-800 text-teal-800 py-2 font-semibold rounded-xl">
        Show Doctors Near Me
      </button>

      {/*------------------------------------------------- Mode of Consult----------------------------------------------------*/}
      <div>
        <h3 className="font-semibold mb-2">Mode of Consult</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="hospital"
              checked={modeOfConsult.hospital}
              onChange={handleModeOfConsult}
            />
            <span>Hospital Visit</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="online"
              checked={modeOfConsult.online}
              onChange={handleModeOfConsult}
            />
            <span>Online Consult</span>
          </label>
        </div>
      </div>

      {/*----------------------------------------------------Experience--------------------------------------------------*/}
      <div>
        <h3 className="font-semibold mb-2">Experience (In Years)</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>0-5</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>6-10</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>11-16</span>
          </label>
          {!experienceExpanded && (
            <button
              onClick={toggleExperience}
              className="text-blue-600 hover:underline"
            >
              +1 More
            </button>
          )}
          {experienceExpanded && (
            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>16+</span>
              </label>
              <button
                onClick={toggleExperience}
                className="text-blue-600 hover:underline"
              >
                See Less
              </button>
            </div>
          )}
        </div>
      </div>

      {/*--------------------------------------------------------Fees--------------------------------------------------------*/}
      <div>
        <h3 className="font-semibold mb-2">Fees (In Rupees)</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>100-500</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>500-1000</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>1000+</span>
          </label>
        </div>
      </div>

      {/*-----------------------------------------------------Language--------------------------------------------------------*/}
      <div>
        <h3 className="font-semibold mb-2">Language</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>English</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Hindi</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Telugu</span>
          </label>
          {!languageExpanded && (
            <button
              onClick={toggleLanguage}
              className="text-blue-600 hover:underline"
            >
              +10 More
            </button>
          )}
          {languageExpanded && (
            <>
              {[
                "Tamil",
                "Bengali",
                "Kannada",
                "Malayalam",
                "Punjabi",
                "Gujarati",
                "Marathi",
                "Urdu",
                "Odia",
                "Assamese",
              ].map((lang) => (
                <label key={lang} className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <span>{lang}</span>
                </label>
              ))}
              <button
                onClick={toggleLanguage}
                className="text-blue-600 hover:underline"
              >
                See Less
              </button>
            </>
          )}
        </div>
      </div>

      {/*--------------------------------------------------------Facility----------------------------------------------------------*/}
      <div>
        <h3 className="font-semibold mb-2">Facility</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Apollo Hospital</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>Other Clinics</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
