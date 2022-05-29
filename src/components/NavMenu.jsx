import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="success"
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link to="about" style={{ textDecoration: "none", color: "black" }}>
            About
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="registration"
            style={{ textDecoration: "none", color: "black" }}
          >
            Registration
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="login" style={{ textDecoration: "none", color: "black" }}>
            Login
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default NavMenu;
