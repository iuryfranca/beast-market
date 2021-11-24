import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Image } from '@chakra-ui/image';
import { Box, HStack, Flex, Heading, Link, Center, Grid } from '@chakra-ui/layout';
import { useModal } from '../../hooks/useModal';

export function Header() {
  const { setStatus } = useModal()
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

        {/* <Button
          bg="#21B6E6"
          w="50px"
          h="50px"
          _hover={{ bg: "#21b5e6d1" }}
          _active={{ bg: "#21b5e6d1", transform: "scale(0.95)", borderColor: "none", }}
          _focus={{
            boxShadow:
              "none",
          }}
          display={{ base: "flex", md: "none" }}
          onClick={() => setStatus(true)}
        >
          <Image h="35px" w="35px" src="./shopping_cart_white_24dp.svg" alt="" />
        </Button> */}
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
