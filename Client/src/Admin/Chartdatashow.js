import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {TbPointFilled} from "react-icons/tb"

ChartJS.register(LinearScale, CategoryScale, BarElement);



export const Chartdatashow = () => {
  const [ABHItotal, SetABHItotal] = useState(0);
  const [ABHIclosed, SetABHIclosed] = useState(0);

  const [AJMALtotal, SetAJMALtotal] = useState(0);
  const [AJMALclosed, SetAJMALclosed] = useState(0);

  const [Vedikatotal, SetVedikatotal] = useState(0);
  const [Vedikaclosed, SetVedikaclosed] = useState(0);

  const [AKTRIVEDItotal, SetAKTRIVEDItotal] = useState(0);
  const [AKTRIVEDIclosed, SetAKTRIVEDIclosed] = useState(0);
  
  const [saurabhtotal, Setsaurabhtotal] = useState(0);
  const [saurabhclosed, Setsaurabhclosed] = useState(0);

  useEffect(() => {

    Chartdata()
  }, []);
  
     const Chartdata = async () =>{
      const  res = await axios.get(`https://doctorappoinment.onrender.com/chartdata`)
      
       SetABHItotal(res.data.Total[0].TotalCount);
       SetABHIclosed(res.data.Closed[0].Closedcount);
        
       SetAJMALtotal(res.data.Total[1].TotalCount);
        SetAJMALclosed(res.data.Closed[1].Closedcount);

        SetAKTRIVEDItotal(res.data.Total[2].TotalCount);
        SetAKTRIVEDIclosed(res.data.Closed[3].Closedcount);

        SetVedikatotal(res.data.Total[3].TotalCount);
        SetVedikaclosed(res.data.Closed[3].Closedcount);

        Setsaurabhclosed(res.data.Closed[4].Closedcount);
        Setsaurabhtotal(res.data.Total[4].TotalCount);

       
     }




  const data = {
   
     // labels: ["Abhi", "Ajmal", "Ak", "Saurabh", "vedika"],

  labels: [ [ Math.floor((ABHIclosed/ABHItotal)*100)+"%"," " ,"Dr ABHI" ], [ Math.floor((AJMALclosed/AJMALtotal)*100)+"%"," " , "Dr AJMAl" ], [ Math.floor((AKTRIVEDIclosed/AKTRIVEDItotal)*100)+"%"," " , "Dr AK" ] ,  [ Math.floor((saurabhclosed/saurabhtotal)*100)+"%"," " , "Dr saurbh" ], [ Math.floor((Vedikaclosed/Vedikatotal)*100)+"%"," " , "Dr Vedika" ] ],

    datasets: [
      {
        type: "bar",
        label: "Total",
        data: [
          ABHItotal,
          AJMALtotal,
          AKTRIVEDItotal,
          saurabhtotal,
          Vedikatotal
        ],

        backgroundColor: "purple",
      },
      {
        type: "bar",
        label: "Closed",
        data: [
          ABHIclosed,AJMALclosed, AKTRIVEDIclosed,saurabhclosed,Vedikaclosed
        ],

        backgroundColor: "pink",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Box
        p="3"
        w={{ base: "100%", md: "100%", lg: "99%" }}
        h="90%"
        m={{ base: "auto" }}
        borderRadius={"5px"}
        boxShadow={
          "rgba(60,64,67,0.3) 0px 1px 2px 0px,rgba(60,64,67,0.15) 0px 1px 3px 1px "
        }
      >
        <Bar data={data} height={300} options={options} />

        <Flex mt="5" justifyContent={"space-evenly"} mb="30">
          <Box display="flex" justifyContent={"space-between"} gap="10">
            <Box mr="5" m="auto">
              
              <TbPointFilled  fontSize={"2rem"} color="purple"/>
            </Box>

            <Box>
              <Text color={"gray"} fontSize={"1.1rem"} fontWeight={"500"}>
                {" "}
                Total{" "}
              </Text>
            </Box>
          </Box>

          <Box display="flex" justifyContent={"space-between"} gap="10">
            <Box mr="5" m="auto">
        
              <TbPointFilled fontSize={"2rem"} color="pink" />
            </Box>

            <Box>
              <Text color="gray" fontSize={"1.1rem"} fontWeight={"500"}>
                {" "}
                Closed{" "}
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
