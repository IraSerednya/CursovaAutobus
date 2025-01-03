import React from "react";
import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { IoIosWifi } from "react-icons/io";
import { CgCoffee } from "react-icons/cg";

export default function CheckboxOptions() {
  return (
    <div style={{ margin: "20px" }}>
         {/* <CgCoffee style={{ marginRight: "8px", fontSize: "24px" }} /> */}
      <Typography variant="h6" gutterBottom>
        Additional options:
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              <IoIosWifi style={{ marginRight: "8px", fontSize: "24px" }} />
              Wi-Fi
            </div>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              <CgCoffee style={{ marginRight: "8px", fontSize: "24px" }} />
              Coffee/Tea
            </div>
          }
        />
      </FormGroup>
    </div>
  );
}
