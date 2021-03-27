import React from "react";
import { HStack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import All from "../components/all";
import Toggle from "../components/toggle";

const Home = () => {
  return (
    <VStack w="full">
      <Head>
        <title>Harry Api</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HStack
        w="full"
        borderBottomWidth="1px"
        mb="1rem"
        p=".4rem"
        justifyContent="flex-end"
      >
        <Toggle />
      </HStack>

      <All />
    </VStack>
  );
};

export default Home;
