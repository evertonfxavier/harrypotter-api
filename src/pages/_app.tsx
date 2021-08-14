import { ChakraProvider, HStack } from "@chakra-ui/react";
import Toggle from "../components/toggle";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <HStack
        w="full"
        borderBottomWidth="1px"
        mb="1rem"
        p=".4rem"
        justifyContent="flex-end"
      >
        <Toggle />
      </HStack> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
