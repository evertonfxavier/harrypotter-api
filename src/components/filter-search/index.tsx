import { useEffect, useState } from "react";
import {
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

import api from "../../pages/api";
import { Search2Icon } from "@chakra-ui/icons";

interface ICharacter {
  image: string;
  name: string;
  house: "Gryffindor" | "Slytherin" | "Hufflepuff" | "Ravenclaw";
}

const FilterSearch = () => {
  const [character, setCharacters] = useState<ICharacter[]>([]);
  const [search, setSearch] = useState("");
  const { colorMode } = useColorMode();

  useEffect(() => {
    api.get("characters").then((res) => {
      const filteredCharacters = res.data.map((character: any) => ({
        image: character.image,
        name: character.name,
        house: character.house,
      }));

      setCharacters(filteredCharacters);
    });
  }, []);

  const getColorByHouse = (
    house: "Gryffindor" | "Slytherin" | "Hufflepuff" | "Ravenclaw"
  ) => {
    switch (house) {
      case "Gryffindor":
        return colorMode === "dark" ? "orange.400" : "red.600";
      case "Slytherin":
        return colorMode === "dark" ? "green.400" : "green.600";
      case "Hufflepuff":
        return colorMode === "dark" ? "yellow.300" : "yellow.500";
      case "Ravenclaw":
        return colorMode === "dark" ? "#6DACCE" : "#193753";
      default:
        return "#d0c7c7";
    }
  };

  //ponto de otimização
  const lowerSearch = search.toLocaleLowerCase();

  //filter pra fazer as buscar no search input
  //usando o "startsWith" ele pega pelo início da palavra
  //se eu usar o "includes" ele vai pegar a palavra como um todo
  //pra resolver a questão do maiusculo e minúsculo, vou converter o search pra "lowecase"
  //pra nao limitar o usuario, vou converter o char pra "lowercase" tambem
  const searchInputFilter = character.filter((char) =>
    char.name.toLocaleLowerCase().includes(lowerSearch)
  );

  return (
    <VStack w="full">
      <HStack>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar personagem"
            // w="10px"
            // _focus={{ width: "230px" }}
          />
        </InputGroup>
      </HStack>

      <SimpleGrid columns={[2, 3, 4]} gap={6}>
        {/* chamei aqui a const para o filtro ao invés do state character */}
        {searchInputFilter.map((char, key) => (
          <VStack key={key} borderWidth="1px" p=".8rem" borderRadius=".8rem">
            <Image
              border="6px solid"
              borderColor={getColorByHouse(char.house)}
              src={char.image}
              objectFit="cover"
              borderRadius=".6rem"
              w="8rem"
              h="10rem"
            />
            <Heading fontSize="1.2rem">{char.name}</Heading>
            <Text color={getColorByHouse(char.house)}>{char.house}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default FilterSearch;
