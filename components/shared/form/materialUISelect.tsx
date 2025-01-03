
'use client'
import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
interface Props{
    selectedValue: string;
    setSelectedValue:(value:string)=>void;
}

const MaterialUISelect = ({selectedValue, setSelectedValue}: Props) => {
  


  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string);
  };

  return (
    <FormControl fullWidth variant="outlined" sx={{ marginTop: 2 }}>
      <InputLabel id="select-label">Select an Option</InputLabel>
      <Select
        labelId="select-label"
        value={selectedValue}
        onChange={handleChange}
        label="Select an Option"
      >
        <MenuItem value="" disabled>
          <em>Choose an option</em>
        </MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MaterialUISelect;
