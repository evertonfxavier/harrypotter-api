import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button w="10" h="10" onClick={() => toggleColorMode()}>
      <Icon
        as={colorMode === "dark" ? SunIcon : MoonIcon}
        color={colorMode === "dark" ? "yellow.300" : "gray.500"}
        size="md"
      />
    </Button>
  );
}
