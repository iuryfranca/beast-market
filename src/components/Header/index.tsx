import { Box, HStack, Flex, Heading, Link, Center } from '@chakra-ui/layout';

export function Header() {
  return (
    <HStack as="header" h="5rem" maxW="1152px" m="0 auto">
      <Flex align="center" h="full" w="max-content">
        <Heading as="h2">
          Beast Market
        </Heading>
      </Flex>

      <Center as={HStack} spacing="50px" h="full" flex="1">
        <Link to="/store">
          Store
        </Link>
        <Link to="/myAccount">
          My Account
        </Link>
      </Center>

      <Flex align="center" h="full" w="150px" justify="flex-end">
        <Box h="50px" w="50px" rounded="50%" bg="#21B6E5"/>
      </Flex>
    </HStack>
  );
}
