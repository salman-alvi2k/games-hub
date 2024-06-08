import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";

const Navbar = () => {
  return (
    <HStack padding={1} margin={1} justifyContent="space-between">
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
      <ColorSwitchMode />
    </HStack>
  );
};

export default Navbar;
