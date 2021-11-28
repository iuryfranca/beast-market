import { Box, HStack, Flex, Heading, Link, Center, Grid } from '@chakra-ui/layout';
import { useBeast } from '../../hooks/useBeast';
import { SignInButton } from '../SignInButton';

export function Header() {
  const { resetFilters } = useBeast()

  return (
    <Box>
      <HStack as={Grid} gridTemplateColumns={{ base: "100px 50px 50px", md: "auto auto auto" }} h="5rem" width={{ base: "320px", md: "650px", lg: "1155px" }} m="0 auto">
        <Flex align="center">
          <Heading cursor="pointer" onClick={resetFilters} as="h2" fontSize={{base: "20px", md: "32px"}}>
            Beast Market
          </Heading>
        </Flex>

        <Center as={HStack} display={{base: "none", md: "flex"}} spacing="50px" flex="1">
          <a href="/" >
            Store
          </a>
          <a href="/account">
            My Account
          </a>
        </Center>

        <Flex align="center" w="200px" justify="flex-end">
          <SignInButton/>
        </Flex>
      </HStack>
      <Center as={HStack} display={{base: "flex", md: "none"}} padding="10px 0" spacing="50px" flex="1">
        <a href="/" >
          Store
        </a>
        <a href="/account">
          My Account
        </a>
      </Center>
    </Box>
  );
}
