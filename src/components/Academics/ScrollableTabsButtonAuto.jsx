import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mt-3 container">
      <Box sx={{ bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="BE Courses" />
          <Tab label="PDDC Courses" />
          <Tab label="PG Courses" />
          <Tab label="Fee Structure" />
          <Tab label="Scholership" />
          <Tab label="Brochure"/>
          <Tab label="Academic Calender" />
        </Tabs>
      </Box>
    </div>
  );
}
