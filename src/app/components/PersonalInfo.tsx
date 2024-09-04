import React from "react";
import { VStack, Box, Image, Text, HStack, Link } from '@chakra-ui/react';
const PersonalInfo = () => {
  return (
    <VStack align="start" p={4} bg="gray.50" flex={1} spacing={4}>
      <Image src="/public/next.svg" alt="Profile Picture" boxSize="100px" />
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Zak Mks
        </Text>
        <Text fontSize="md" color="gray.500">
          Software Developer
        </Text>
      </Box>
      <HStack spacing={4}>
        <Link href="#" color="blue.500">
          Github
        </Link>
        <Link href="#" color="blue.500">
          LinkedIn
        </Link>
      </HStack>
      <Box>
        <Text>Phone: +1234567890</Text>
        <Text>Email: zak@example.com</Text>
        <Text>Location: Your City</Text>
        <Text>Birthday: 01-01-1990</Text>
      </Box>
    </VStack>
  );
};

export default PersonalInfo;
