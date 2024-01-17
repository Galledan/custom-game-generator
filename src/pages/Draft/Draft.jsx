import React from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { usePlayer } from "../../context/PlayerContext/PlayerContext";

function Draft() {

    const {initialData} = usePlayer()

  return (
    <div className="draft-container h-screen flex gap-9">
      <div className="team-1 bg-primary h-2/3 w-1/3 rounded"></div>
      <div className="player-pool flex flex-col gap-5 h-2/3 w-1/3">
        <div className="pool bg-white h-5/6 w-full rounded"></div>
        <div className="search-player h-1/6 w-full flex justify-center items-center gap-3">
        <Autocomplete
      disablePortal
      options={initialData}
      getOptionLabel={(option) => option.name}
      sx={{width: 300}}
      renderInput={(params) => <TextField {...params} name="Player" />}
    />
        <Button variant="contained">Add</Button>
        </div>
      </div>
      <div className="team-2 bg-primary h-2/3 w-1/3 rounded"></div>
    </div>
  );
}

export default Draft;
