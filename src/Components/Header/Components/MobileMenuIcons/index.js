import { Box } from "@mui/material";
import React from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const MobileMenuIcons = ({ isOpenMenu }) => {
  return (
    <Box>
      {isOpenMenu ? (
        <MdClose color="#fff" size={30} />
      ) : (
        <FaBars color="#fff" size={30} />
      )}
    </Box>
  );
};

export { MobileMenuIcons };
