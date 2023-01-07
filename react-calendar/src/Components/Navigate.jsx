import { Box } from "@chakra-ui/react";
import React from "react";

const Navigate = ({ children, onClick, isActive }) => {
  return (
    <Box
        // border={"1px solid rgba(0,0,0,0.05)"}
      minW={"45px"}
      alignItems={"center"}
      display={"flex"}
      padding='2.5'
      justifyContent={'centre'}
      cursor={"pointer"}
      _hover={{ bg: "#e6e6e6" }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default Navigate;
