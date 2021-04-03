import { useEffect, useState } from "react";
import {
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import api from "../../pages/api";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const Pagination = () => {
  const [character, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [showCharacters, setShowCharacters] = useState([]);

  const pageSize = 8;

  useEffect(() => {
    api.get("characters").then((res) => {
      setCharacters(res.data);
    });
  }, []);

  useEffect(() => {
    //ceil pra arredondar pra cima, floor pra cima
    setPages(Math.ceil(character.length / pageSize));

    console.log({ currentPage });

    const slicedCharacters = character.slice(
      currentPage * pageSize,
      currentPage * pageSize + pageSize
    );
    console.log({ slicedCharacters });
    setShowCharacters(slicedCharacters);
  }, [character, currentPage]);

  const handleNextPage = () => {
    if (pages > currentPage + 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <VStack w="full">
      <HStack mb="1rem">
        <Button leftIcon={<ArrowBackIcon />} onClick={handlePreviousPage}>
          voltar
        </Button>

        {Array.from({ length: pages }).map((_, idx) => (
          <Button
            onClick={() => setCurrentPage(idx)}
            bgColor={currentPage == idx && "tomato"}
          >
            {idx + 1}
          </Button>
        ))}

        <Button rightIcon={<ArrowForwardIcon />} onClick={handleNextPage}>
          próximo
        </Button>
      </HStack>

      <SimpleGrid columns={[2, 3, 4]} gap={6} my="1.4rem">
        {showCharacters.map((char, key) => (
          <VStack key={key} borderWidth="1px" p=".8rem" borderRadius=".8rem">
            <Image
              border="6px solid"
              borderColor="gray.600"
              src={char.image}
              objectFit="cover"
              borderRadius=".6rem"
              w="8rem"
              h="10rem"
            />
            <Heading fontSize="1.2rem">{char.name}</Heading>
            <Text color="gray.500">{char.house}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Pagination;
