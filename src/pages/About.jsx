import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">About Financial Times</Heading>
        <Text fontSize="xl">Financial Times is a leading global business publication, providing essential news, comment, data, and analysis for the global business community.</Text>
      </VStack>
    </Container>
  );
};

export default About;