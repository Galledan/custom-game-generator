import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function Filters() {
  return (
    <div className="filters-container bg-primary flex w-80 justify-center" >
      <div className="lane-filter w-4/5 flex justify-center">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Lane:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="top" control={<Radio />} label="Top" />
            <FormControlLabel
              value="jungle"
              control={<Radio />}
              label="Jungle"
            />
            <FormControlLabel value="mid" control={<Radio />} label="Mid" />
            <FormControlLabel value="adc" control={<Radio />} label="ADC" />
            <FormControlLabel value="sup" control={<Radio />} label="Support" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default Filters;
