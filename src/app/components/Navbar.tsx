"use client";

import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import lightLogo from '../../../public/logo/light.png';
import darkLogo from '../../../public/logo/dark.png';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="nav"
      w="100%"
      bg={colorMode === 'light' ? 'gray.800' : 'gray.700'}
      color="white"
      p={4}
      position="fixed"
      top={0}
      left={0}
      zIndex={1}
    >
      <Flex justify="space-between" align="center">
        {/* Logo on the left */}
        <Image 
          src={colorMode === 'light' ? darkLogo : lightLogo} 
          alt="Logo"
          height='50'
        />

        {/* Dark/Light mode switch on the right */}
        <IconButton
          aria-label="Toggle Dark/Light Mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
          color="white"
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
