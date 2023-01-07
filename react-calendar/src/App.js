import { Box, Button, Center } from "@chakra-ui/react";
import { format } from "date-fns";
import { useState } from "react";
import "./App.css";
import Calendar from "./Components/Calendar";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date('01-01-2019'));

  const handleToday=()=>{
    setCurrentDate(new Date)
  }
  return (
    <div className="text-3xl">
      <Center>Selected Date :{format(currentDate,'dd LLLL yyyy')}
      <Button onClick={handleToday} bg={'#5187ef'} color={'white'} >Today</Button></Center>
      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  );
}

export default App;
