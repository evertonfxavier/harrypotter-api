import { useEffect, useState } from "react";
import {
  Heading,
  Image,
  SimpleGrid,
  Text,

  VStack,
} from "@chakra-ui/react";

import api from "../../pages/api";
import SelectComponent from "./select";

const Select = () => {
  const [character, setCharacters] = useState([]);
  const [selectedHouses, setSelectedHouses] = useState("");

  useEffect(() => {
    if (selectedHouses.length) {
      api.get(`characters/house/${selectedHouses}`).then((res) => {
        setCharacters(res.data);
      });
    } else {
      api.get("characters").then((res) => {
        setCharacters(res.data);
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
              borderColor="gray.500"
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

export default Select;
