import React, { useState } from "react";
import { Link } from "react-router-dom";
//Materil components
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs/Tabs";
import Tab from "@material-ui/core/Tab/Tab";
//Data
import { menuData } from "../../Data/Menu/DataMenu";

const Header = () => {
  const [ selectedTab, setSelectedTab ] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar position="fixed" color="inherit">
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {menuData.map((item, index) => {
          return (
            <Tab
              key={index}
              label={item.page}
              component={Link}
              to={item.path}
            />
          );
        })}
      </Tabs>
    </AppBar>
  );
};

export default Header;
