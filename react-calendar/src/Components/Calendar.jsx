import { GridItem, Grid, Box, VStack } from "@chakra-ui/react";
import React from "react";
import Cell from "./Cell";
import Navigate from "./Navigate";
import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
} from "date-fns";

const week = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const Calendar = ({ value, onChange }) => {
  const startDate = startOfMonth(value);

  const endDate = endOfMonth(value);

  const newDay = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 7 - 1 - endDate.getDay();

  const prevMonth = () => onChange(sub(value, { months: 1 }));
  const nextMonth = () => onChange(add(value, { months: 1 }));
  const prevYear = () => onChange(sub(value, { years: 1 }));
  const nextYear = () => onChange(add(value, { years: 1 }));

  const handleClick = (i) => {
    const date = setDate(value, i);
    onChange(date);
  };
  const ck = () => {
    console.log("working");
  };
  // console.log(prefixDays,suffixDays)
  // console.log(new Date().getDay())
  //  console.log(value)
  // console.log(startDate)
  //console.log(endDate);
  // console.log(newDay)
  // console.log(Array.from({length:newDay}))
  return (
    <VStack
      maxW="100%"
      display={"flex"}
      justifyContent={"center"}
      marginTop={"50px"}
      //   border={'1px solid red'}
    >
      {/* Top Navigation box */}
      <Box
        display={"flex"}
        width={"350px"}
        justifyContent={"space-between"}
        textAlign={"center"}
        border={"1px solid rgba(0,0,0,0.05)"}
        h={"40px"}
      >
        <Navigate onClick={prevYear}>{"<<"}</Navigate>
        <Navigate onClick={prevMonth}>{"<"}</Navigate>
        <Navigate>{format(value, "	LLLL yyyy")}</Navigate>
        <Navigate onClick={nextMonth}>{">"}</Navigate>
        <Navigate onClick={nextYear}>{">>"}</Navigate>
      </Box>

      {/* week box */}
      <Box>
        <Grid
          width={"350px"}
          textAlign={"center"}
          templateColumns="repeat(7, 2fr)"
          fontSize="xs"
          fontWeight={"bold"}
          textTransform={"uppercase"}
          h={"40px"}
        >
          {week.map((elem) => (
            <GridItem key={elem}>
              <Box
                border={"1px solid rgba(0,0,0,0.05)"}
                W={"45px"}
                padding={"6.5px"}
              >
                {elem}
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Date Box */}
      <Box>
        <Grid
          width={"350px"}
          justifyContent={"space-around"}
          textAlign={"center"}
          marginTop={"-10px"}
          alignItems={"center"}
          templateColumns="repeat(7, 2fr)"
          templateRows="repeat(5, 1fr)"
        >
          {/* Mapping of Prefix empty cells */}
          {Array.from({ length: prefixDays }).map((day, i) => {
            return (
              <GridItem key={i}>
                <Cell> </Cell>
              </GridItem>
            );
          })}

          {/* Mapping of actual days in month */}

          {Array.from({ length: newDay }).map((day, i) => {
            console.log(day);
            const date = i + 1;
            const isCurrentDate = date === value.getDate();

            // console.log(isCurrentDate);
            return (
              <GridItem key={date}>
                <Cell
                  onClick={() => {
                    handleClick(date);
                  }}
                  isActive={isCurrentDate}
                >
                  {date}
                </Cell>
              </GridItem>
            );
          })}

          {/* Mapping of Suffix empty cells */}
          {Array.from({ length: suffixDays }).map((day, i) => {
            return (
              <GridItem key={i}>
                <Cell> </Cell>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </VStack>
  );
};

export default Calendar;
