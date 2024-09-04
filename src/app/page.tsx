// pages/index.js
import { Box, Flex, Image, Text, Link, VStack, HStack } from '@chakra-ui/react';
import PersonalInfo from './components/PersonalInfo';
import { MainInfo } from './components/MainInfo';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export default function Home() {
 
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="gray.100"
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Flex
        as="main"
        direction="row"
        mt="60px" // Adjust according to navbar height
        w="80%"
        maxW="1200px"
        bg="white"
        boxShadow="md"
        p={4}
        gap={4}
      >
        {/* Personal Info */}
        <PersonalInfo />

        {/* Main Info */}
        <MainInfo />

        {/* Sidebar */}
        <Sidebar />
      </Flex>
    </Flex>
  );
};
