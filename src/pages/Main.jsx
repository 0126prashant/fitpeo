import React from 'react'
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IoIosCash } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import Data from '../components/Data';

export const Main = () => {
  return (
 <>
   <Flex flexWrap="wrap"  style={{width:"100%"}}>
   {/* box-1 */}
  <Box 
    width={{ base: "80%", md: "21%" }}
    
    marginRight={"20px"}
    mb={{ base: 4, md: 0 }}
    px={2}
    bg="white"
    p={4}
    position="relative"
    height={"150px"}
    maxWidth={{ base: "100%", md: "300px" }} 
  >
    <Flex align="center" justify="flex-start" mb={2}>
      <Box 
        bg={"#B2EBF2"}
        width="80px" // Set a fixed width
        height={"80px"} // Set a fixed height
        borderRadius="50%"
        overflow="hidden"
        position="relative"
        marginRight="8px"
      >
        <Icon
          as={IoIosCash}
          boxSize="50%"
          color={"#1B5E20"}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
      </Box>
      <Flex direction="column" flex="1">
        <Text fontSize="lg" fontWeight="bold" mb={1} style={{color:"grey",fontSize:"14px"}}>
          Earnings
        </Text>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <BsCurrencyDollar />
  <Text fontSize="sm" fontWeight="bold" maxWidth="150px" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
    198k
  </Text>
</div>


        <Text fontSize="sm" ml={2} whiteSpace="nowrap" style={{ display: 'inline-flex'}}>
          <span style={{color:"green",fontSize:"14px"}}>13.7% </span> this month
        </Text>
      </Flex>
    </Flex>
  </Box>

{/* box-2 */}
  <Box 
    width={{ base: "100%", md: "21%" }}
    marginRight={"20px"}
    mb={{ base: 4, md: 0 }}
    px={2}
    bg="white"
    p={4}
    position="relative"
    height={"150px"}
    maxWidth={{ base: "100%", md: "300px" }} 
  >
    <Flex align="center" justify="flex-start" mb={2}>
      <Box 
        bg={"#B2EBF2"}
        width="80px" // Set a fixed width
        height={"80px"} // Set a fixed height
        borderRadius="50%"
        overflow="hidden"
        position="relative"
        marginRight="8px"
      >
        <Icon
          as={IoIosCash}
          boxSize="50%"
          color={"#1B5E20"}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
      </Box>
      <Flex direction="column" flex="1">
        <Text fontSize="lg" fontWeight="bold" mb={1} style={{color:"grey",fontSize:"14px"}}>
          Earnings
        </Text>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <BsCurrencyDollar />
  <Text fontSize="sm" fontWeight="bold" maxWidth="150px" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
    198k
  </Text>
</div>


        <Text fontSize="sm" ml={2} whiteSpace="nowrap" style={{ display: 'inline-flex'}}>
          <span style={{color:"green",fontSize:"14px"}}>13.7% </span> this month
        </Text>
      </Flex>
    </Flex>
  </Box>


{/* box-3 */}
  <Box 
    width={{ base: "100%", md: "21%" }}
    marginRight={"20px"}
    mb={{ base: 4, md: 0 }}
    px={2}
    bg="white"
    p={4}
    position="relative"
    height={"150px"}
    maxWidth={{ base: "100%", md: "300px" }} 
  >
    <Flex align="center" justify="flex-start" mb={2}>
      <Box 
        bg={"#B2EBF2"}
        width="80px" 
        height={"80px"} 
        borderRadius="50%"
        overflow="hidden"
        position="relative"
        marginRight="8px"
      >
        <Icon
          as={IoIosCash}
          boxSize="50%"
          color={"#1B5E20"}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
      </Box>
      <Flex direction="column" flex="1">
        <Text fontSize="lg" fontWeight="bold" mb={1} style={{color:"grey",fontSize:"14px"}}>
          Earnings
        </Text>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <BsCurrencyDollar />
  <Text fontSize="sm" fontWeight="bold" maxWidth="150px" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
    198k
  </Text>
</div>


        <Text fontSize="sm" ml={2} whiteSpace="nowrap" style={{ display: 'inline-flex'}}>
          <span style={{color:"green",fontSize:"14px"}}>13.7% </span> this month
        </Text>
      </Flex>
    </Flex>
  </Box>


{/* Box-4 */}
  <Box   
    width={{ base: "100%", md: "21%" }}
    
    mb={{ base: 4, md: 0 }}
    px={2}
    bg="white"
    p={4}
    position="relative"
    height={"150px"}
    maxWidth={{ base: "100%", md: "300px" }} 
  >
    <Flex align="center" justify="flex-start" mb={2}>
      <Box
        bg={"#B2EBF2"}
        width="80px" // Set a fixed width
        height={"80px"} // Set a fixed height
        borderRadius="50%"
        overflow="hidden"
        position="relative"
        marginRight="8px"
      >
        <Icon
          as={IoIosCash}
          boxSize="50%"
          color={"#1B5E20"}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />
      </Box>
      <Flex direction="column" flex="1">
        <Text fontSize="lg" fontWeight="bold" mb={1} style={{color:"grey",fontSize:"14px"}}>
          Earnings
        </Text>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <BsCurrencyDollar />
  <Text fontSize="sm" fontWeight="bold" maxWidth="150px" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
    198k
  </Text>
</div>


        <Text fontSize="sm" ml={2} whiteSpace="nowrap" style={{ display: 'inline-flex'}}>
          <span style={{color:"green",fontSize:"14px"}}>13.7% </span> this month
        </Text>
      </Flex>
    </Flex>
  </Box>
</Flex>



    <Data/>
    </>
  );
};

