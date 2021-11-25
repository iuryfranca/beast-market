import { Box, HStack, Flex, Heading, Link, Center, Grid } from '@chakra-ui/layout';

export function Header() {
  return (
    <Box>
      <HStack as={Grid} gridTemplateColumns={{ base: "100px 50px 50px", md: "auto auto auto" }} h="5rem" width={{ base: "300px", md: "650px", lg: "1155px" }} m="0 auto">
        <Flex align="center">
          <Heading as="h2" fontSize={{base: "20px", md: "32px"}}>
            Beast Market
          </Heading>
        </Flex>

        <Center as={HStack} display={{base: "none", md: "flex"}} spacing="50px" flex="1">
          <Link to="/store">
            Store
          </Link>
          <Link to="/myAccount">
            My Account
          </Link>
        </Center>

        <Flex align="center" w="150px" justify="flex-end">
          <Box h="50px" w="50px" rounded="50%" bg="personalized.cyan"/>
        </Flex>
      </HStack>
      <Center as={HStack} display={{base: "flex", md: "none"}} padding="10px 0" spacing="50px" flex="1">
          <Link to="/store">
            Store
          </Link>
          <Link to="/myAccount">
            My Account
          </Link>
        </Center>
    </Box>
  );
}
