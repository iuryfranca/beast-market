import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image";
import { Center, Grid, GridItem, Text } from "@chakra-ui/layout";

export function CardBeast() {
  return (
    <Grid
      h="410px"
      w="200px"
      templateRows="repeat(3, 1fr)"
      bg="transparent"
      border="1px solid"
      borderColor="#21B6E5"
      borderRadius="8px"
      padding="10px"
    >
      <GridItem align="center">
        <Image h="224px" w="158px" src="https://ipfs.atomichub.io/ipfs/QmNahG5oRhwFvj3t1gfVupxsTUNwH1iAiG8SPYW68LHtiV/Nivlek.png" alt="Beast" />
      </GridItem>

      <Grid
        templateRows="repeat(5, 1fr)"
        gap="5px"
        marginLeft="15px"
      >
        <Text fontSize="12px">Name: Ni’vlek </Text>
        <Text fontSize="12px">cooldown: 11 d | 1h | 20m </Text>
        <Text fontSize="12px">owner: BeastGarden </Text>
        <Text fontSize="12px">element: air </Text>
        <Text fontSize="12px">price: $ 1232.99 </Text>
      </Grid>

      <Center align="center">
        <Button
          bg="#21B6E6"
          w="158px"
          h="40px"
        >
          Add to cart
        </Button>
      </Center>
    </Grid>
  );
}
