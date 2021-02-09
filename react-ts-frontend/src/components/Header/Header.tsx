import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

import {
  Button,
  GlobalNavigationBar,
  GlobalNavigationBarRegion,
  Icon,
} from "@salesforce/design-system-react";
export interface NavBarProps {}

const Header: React.FC<NavBarProps> = () => {
  return (
    <GlobalNavigationBar>
      <GlobalNavigationBarRegion region="primary">
        <div className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center">
          <div className="slds-col_padded">
            <Icon
              assistiveText={{ label: "Account" }}
              category="standard"
              name="dashboard_ea"
              size="medium"
            />
          </div>
        </div>
        <Button variant="base" className="slds-border_right">
          <Link to={"/"}>React TS CRUD</Link>
        </Button>
      </GlobalNavigationBarRegion>
      <GlobalNavigationBarRegion
        className="right-aligned-content"
        region="secondary"
      >
        <Button
          variant="base"
          iconCategory="utility"
          iconName="add"
          iconPosition="left"
        >
          <Link to={"/create-book"}>Add new book</Link>
        </Button>
      </GlobalNavigationBarRegion>
    </GlobalNavigationBar>
  );
};

export default Header;
