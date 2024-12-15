import React from "react";
import "./Input.css";

const Input = ({ lakeName, onLakeNameChange, onSubmit }) => {
  return (
    <div className="input-container">
      <div className="input-field">
        <input
          type="text"
          placeholder="Lake name *"
          value={lakeName}
          required
          onChange={onLakeNameChange}
        />
      </div>
      <button type="submit" className="analyze-button" onClick={onSubmit}>
        Analyze
        <i className="bi bi-send"></i>
      </button>
    </div>
  );
};

export default Input;