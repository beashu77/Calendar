import { Box } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Cell = ({ children, onClick, isActive }) => {

  const [curr,setCurr] = useState(new Date)
  return isActive ? (
    <Box
    border={"1px solid rgba(0,0,0,0.05)"}
    minW={"45px"}
    alignItems={"center"}
    padding={"6.5px"}
    h={"40px"}
    bg={"#5187ef"}
    color={'white'}
    cursor={"pointer"}
  >
    {children}
  </Box>
  ) : (
    <Box
      border={"1px solid rgba(0,0,0,0.05)"}
      minW={"45px"}
      alignItems={"center"}
      padding={"6.5px"}
      h={"40px"}
      bg={"white"}
      cursor={"pointer"}
      _hover={{ bg: "#e6e6e6" }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default Cell;
