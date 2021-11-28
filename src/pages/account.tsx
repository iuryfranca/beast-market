import { Avatar } from "@chakra-ui/avatar";
import { Box, Center, Flex, Grid, HStack, Text } from "@chakra-ui/layout";
import { useSession } from "next-auth/client";

export default function Account() {
  const [session] = useSession()

  return (
    <Grid
      paddingTop="50px"
      gridTemplateColumns={{ base: "none", md: "200px auto"}}
      gridTemplateRows={{ base: "200px auto", md: "none"}}
      gap="50px"
      m="0 auto"
      h="calc(100vh - 10rem)"
      width={{ base: "310px", md: "650px", lg: "1155px" }}
    >
      <Center h="200px">
        <Avatar h="200px" w="200px" name={session?.user?.name} src={session?.user?.image} />
      </Center>
      <Flex h="200px" align="flex-start" justify="space-evenly" flexDirection="column">
        <Text>
          <span>Name: </span>
          <Text bg="#00ffffc8" padding="5px" borderRadius="8px" as="span">{session?.user?.name}</Text>
        </Text>
        <Text>
          <span>Email: </span>
          <Text bg="#00ffffc8" padding="5px" borderRadius="8px" as="span">{session?.user?.email}</Text>
        </Text>
      </Flex>
    </Grid>
  );
}
