import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

import api from "../pages/api/";
import SelectComponent from "./select";

interface ICharacter {
  image: string;
  name: string;
  house: "Gryffindor" | "Slytherin" | "Hufflepuff" | "Ravenclaw";
}

const All = () => {
  const [character, setCharacters] = useState<ICharacter[]>([]);
  const [selectedHouses, setSelectedHouses] = useState("");
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (selectedHouses.length) {
      api.get(`characters/house/${selectedHouses}`).then((res) => {
        // console.log(res);

        const filteredCharacters = res.data.map((character: any) => ({
          image: character.image,
          name: character.name,
          house: character.house,
        }));

        setCharacters(filteredCharacters);
      });
    } else {
      api.get("characters").then((res) => {
        // console.log(res);

        const filteredCharacters = res.data.map((character: any) => ({
          image: character.image,
          name: character.name,
          house: character.house,
        }));

        setCharacters(filteredCharacters);
      });
    }
  }, [selectedHouses]);

  const houses = [
    {
      label: "Gryffindor",
      value: "gryffindor",
    },
    {
      label: "Slytherin",
      value: "slytherin",
    },
    {
      label: "Hufflepuff",
      value: "hufflepuff",
    },
    {
      label: "Ravenclaw",
      value: "ravenclaw",
    },
  ];

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

  return (
    <VStack w="full">
      <SelectComponent
        options={houses}
        onChange={(e) =>
          e && e.value ? setSelectedHouses(e.value) : setSelectedHouses("")
        }
      />

      <SimpleGrid columns={[2, 3, 4]} gap={6}>
        {character.map((char, key) => (
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

export default All;