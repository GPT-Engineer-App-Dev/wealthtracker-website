import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Financial Times</Box>
        <Flex alignItems="center">
          <RouterLink to="/">
            <Link px={2} color="white">Home</Link>
          </RouterLink>
          <RouterLink to="/about">
            <Link px={2} color="white">About</Link>
          </RouterLink>
          <RouterLink to="/contact">
            <Link px={2} color="white">Contact</Link>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;