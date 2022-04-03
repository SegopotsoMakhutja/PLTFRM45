import {
  ChakraProvider,
  theme
} from "@chakra-ui/react";
import { Home } from './views/Home';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Home />
  </ChakraProvider>
)
