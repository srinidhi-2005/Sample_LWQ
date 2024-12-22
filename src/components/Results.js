import React from "react";

const Results = ({ result }) => {
  if (!result) return null;

  return (
    <div
      style={{
        fontSize: "35px",
        marginTop: "22px",
        marginBottom: "50px",
        padding: "16px",
        width: "740px",
        border: "1px solid #ccc",
        borderRadius: "7px",
        backgroundColor: "whitesmoke",
        color: "#2c662d",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "250px",
      }}
    >
      <button
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          padding: "10px 20px",
          backgroundColor: "#46e243",
          color: "#000000",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease, transform 0.2s ease",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "center",
          width: "20%",
          boxSizing: "border-box",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5a9de9")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#46e243")}
        onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
      >
        <i
          className="bi bi-check-all"
          style={{
            fontSize: "20px",
          }}
        ></i>
        {result.status}
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          border: "1px solid #ccc",
          borderRadius: "7px",
          padding: "16px",
          marginTop: "20px",
          marginBottom: "15px",
          backgroundColor: "#f9f9f9",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          pH Level
        </div>
        <div
          style={{
            fontSize: "45px",
            fontWeight: "bolder",
            color: "#35be32",
            marginTop: "16px",
          }}
        >
          {result.pHLevel}
        </div>
      </div>
      <div
        style={{
          marginBottom: "15px",
        }}
      >
        <p
          style={{
            color: "maroon",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          Analysis Confidence: <span>{result.confidence}</span>
        </p>
      </div>
    </div>
  );
};

export default Results;
