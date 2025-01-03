import React from "react";
import { Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { MdOutlinePower } from "react-icons/md";
import { FaRestroom } from "react-icons/fa";

export default function CheckboxOptions2() {
  return (
    <div style={{ margin: "20px" }}>
      <Typography variant="h6" gutterBottom>
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              <MdOutlinePower style={{ marginRight: "8px", fontSize: "24px" }} />
              Power Outlets
            </div>
          }
        />
        <FormControlLabel
          control={<Checkbox />}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaRestroom style={{ marginRight: "8px", fontSize: "24px" }} />
              RestRoom
            </div>
          }
        />
      </FormGroup>
    </div>
  );
}
