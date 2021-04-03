import React from "react";
import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Select from "../components/with-select";
import FilterSearch from "../components/filter-search";

const Home = () => {
  return (
    <VStack w="full" h="calc(100vh - 4.8rem)" justifyContent="center">
      <Head>
        <title>Harry Api</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack>
        <Text>oi</Text>
        <Link href="/pagination" style={{ textDecoration: "none" }}>
          <Button w="12rem">Usando Paginação</Button>
        </Link>
        <Link href="/filter-search" style={{ textDecoration: "none" }}>
          <Button w="12rem">Usando Seach</Button>
        </Link>
        <Link href="/select" style={{ textDecoration: "none" }}>
          <Button w="12rem">Usando Select</Button>
        </Link>
      </VStack>
    </VStack>
  );
};

export default Home;
