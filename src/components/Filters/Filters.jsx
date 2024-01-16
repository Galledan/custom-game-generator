import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Filters() {
  const radioStyle = "!text-white";

  return (
    <div className="filters-container bg-primary flex flex-col gap-9 p-5 min-w-80 justify-center rounded">
      <div className="input-filters flex flex-col gap-3 justify-center">
        <TextField label="Nickname" variant="standard" />
        <TextField label="Win" variant="standard" />
        <TextField label="Lose" variant="standard" />
        <TextField label="Winrate" variant="standard" />
      </div>
      <div className="lane-filter w-4/5 flex justify-center pt-4">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" className={radioStyle}>
            Lane:
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            className={radioStyle}
          >
            <FormControlLabel
              value="top"
              control={<Radio className={radioStyle} />}
              label="Top"
            />
            <FormControlLabel
              value="jungle"
              control={<Radio className={radioStyle} />}
              label="Jungle"
            />
            <FormControlLabel
              value="mid"
              control={<Radio className={radioStyle} />}
              label="Mid"
            />
            <FormControlLabel
              value="adc"
              control={<Radio className={radioStyle} />}
              label="ADC"
            />
            <FormControlLabel
              value="sup"
              control={<Radio className={radioStyle} />}
              label="Support"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Button variant="contained">Filter</Button>
    </div>
  );
}

export default Filters;
