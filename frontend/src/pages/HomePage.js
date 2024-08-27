import React from "react";
import {
  Container,
  Box,
  Text,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";

import Login from "../components/authentication/Login";
import SignUp from "../components/authentication/SignUp";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={0}
        bg={"pik"}
        w="80%"
        h="85px"
        m="50px 0 0px 0"
        borderRadius="22px"
        borderWidth="1px"
        borderColor="grey"
        bgColor="pink"
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          align="center"
        >
          Chat-a-Live
        </Text>
      </Box>

      <Box
        d="flex"
        justifyContent="center"
        p={4}
        bg={"pik"}
        w="57%"
        m="68px 0 15px 0"
        borderRadius="22px"
        borderWidth="1px"
        borderColor="grey"
        h="66%"
        bgColor="pink"
      >
        <Tabs variant="soft-rounded" colorScheme="pink">
          <TabList mb="1em">
            <Tab w="50%">Login</Tab>
            <Tab w="50%">SignUp</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{<Login />}</TabPanel>
            <TabPanel>{<SignUp />}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
