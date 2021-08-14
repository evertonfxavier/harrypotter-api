import React from "react";
import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";

const Home = () => {
  return (
    <VStack w="full" h="full" justifyContent="center">
      <Head>
        <title>Harry Api</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HStack w="full">
        <Image
          w="50%"
          h="100vh"
          src="https://i.ibb.co/jJ9YNNp/4a5a6a51c89c4724abfb6910c9.jpg"
          objectFit="cover"
        />
        <VStack w="50%" h="calc(100vh - 10rem)" justifyContent="space-between">
          <VStack>
            <Image
              w="18rem"
              src="https://i.ibb.co/CPVjJT2/Harry-Potter-Logo.png"
              objectFit="cover"
            />
            <Text color="orange.300" fontWeight="bold">API</Text>
          </VStack>
          <VStack>
            <Link href="/pagination" style={{ textDecoration: "none" }}>
              <Button w="12rem">Utilizando Paginação</Button>
            </Link>
            <Link href="/filter-search" style={{ textDecoration: "none" }}>
              <Button w="12rem">Utilizando Seach</Button>
            </Link>
            <Link href="/select" style={{ textDecoration: "none" }}>
              <Button w="12rem">Utilizando Select</Button>
            </Link>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Home;
