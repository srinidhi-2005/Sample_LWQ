import React from "react";

const Results = ({ result, darkMode }) => {
  if (!result) return null;

  return (
    <div className={`flex flex-col items-center justify-start w-full max-w-[740px] min-h-[250px] mt-6 mb-12 p-4 text-[35px] rounded-lg ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'
    } border`}>
      <button
        className="w-1/5 flex items-center justify-center gap-2.5 px-5 py-2.5 text-lg font-bold bg-[#46e243] text-black rounded-lg cursor-pointer shadow-md transition-all duration-300 hover:bg-[#5a9de9] active:translate-y-0 hover:-translate-y-0.5"
      >
        <i className="bi bi-check-all text-xl"></i>
        {result.status}
      </button>

      <div className={`flex flex-col justify-center items-start w-full mt-5 mb-4 p-4 rounded-lg border ${
        darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
      }`}>
        <div className={`text-xl font-bold ${
          darkMode ? 'text-gray-200' : 'text-gray-800'
        }`}>
          pH Level
        </div>
        <div className="text-[45px] font-extrabold text-[#35be32] mt-4">
          {result.pHLevel}
        </div>
      </div>

      <div className="mb-4">
        <p className={`text-xl font-bold ${
          darkMode ? 'text-gray-200' : 'text-maroon'
        }`}>
          Analysis Confidence: <span>{result.confidence}</span>
        </p>
      </div>
    </div>
  );
};

export default Results;