import { useState } from "react";

import Slider from "@mui/material/Slider";

const SliderContainer = ({ label, value, setValue }) => {
  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="slider-container">
      <p>{label}</p>
      <div className="slider-control-container">
        <Slider aria-label={label} value={value} onChange={handleChangeValue} />
      </div>
    </div>
  );
};

export default SliderContainer;
