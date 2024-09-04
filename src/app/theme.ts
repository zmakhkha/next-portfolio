// theme/index.ts or theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    personalInfo: {
      light: '#f4f4f4', // Light mode background
      dark: '#2d3748', // Dark mode background
      textLight: '#000000',
      textDark: '#ffffff',
      linkLight: '#3182ce', // Light mode link color
      linkDark: '#63b3ed' // Dark mode link color
    },
  },
});

export default theme;
