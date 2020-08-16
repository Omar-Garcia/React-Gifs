import React, { useState } from "react";
import PropTypes from "prop-types";

export const AgregarCategoria = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState("");
  const txt_Changed = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategorias((c) => [inputValue, ...c]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={txt_Changed} />
    </form>
  );
};

AgregarCategoria.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
