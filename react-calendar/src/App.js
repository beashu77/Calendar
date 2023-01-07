import { Box, Button, Center, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { useState } from "react";
import "./App.css";
import Calendar from "./Components/Calendar";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date("01-01-2019"));

  const handleToday = () => {
    setCurrentDate(new Date());
  };
  return (
    <div className="text-3xl">
      <Text fontSize={"xxx-large"} textAlign={"center"}>
        Calendar 📅
      </Text>
      <Box
        border={"1px solid lightgrey"}
        display={"flex"}
        justifyContent="center"
        p={'1rem'}
      >
        <Center
          w={"350px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Text>Selected Date :{format(currentDate, "dd LLLL yyyy")}</Text>
          <Button onClick={handleToday} bg={"#5187ef"} color={"white"}>
            Today
          </Button>
        </Center>
      </Box>
      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  );
}

export default App;
