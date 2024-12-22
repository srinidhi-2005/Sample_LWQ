import React from "react";

const Input = ({ lakeName, onLakeNameChange, onSubmit }) => {
  return (
    <div
      style={{
        width: "750px",
        padding: "10px",
        border: "none",
        borderRadius: "8px",
        boxShadow: "5px 5px 5px 5px rgba(174, 174, 174, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Lake name *"
          value={lakeName}
          required
          onChange={onLakeNameChange}
          style={{
            width: "600px",
            height: "40px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "0 10px",
            fontSize: "14px",
            marginTop: "30px",
            marginBottom: "50px",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#007bff")}
          onBlur={(e) => (e.target.style.borderColor = "#ccc")}
        />
      </div>
      <button
        type="submit"
        onClick={onSubmit}
        style={{
          width: "150px",
          height: "50px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "16px",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
      >
        Analyze
        <i
          className="bi bi-send"
          style={{
            marginLeft: "16px",
          }}
        ></i>
      </button>
    </div>
  );
};

export default Input;
