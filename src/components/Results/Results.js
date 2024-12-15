import React from "react";
import "./Results.css";

const Results = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result">
      <button>
        <i className="bi bi-check-all"></i>
        {result.status}
      </button>
      <div className="pH-container">
        <div className="pH-heading">pH Level</div>
        <div className="pH-value">{result.pHLevel}</div>
      </div>
      <div className="d2">
        <p>
          Analysis Confidence: <span>{result.confidence}</span>
        </p>
      </div>
    </div>
  );
};

export default Results;