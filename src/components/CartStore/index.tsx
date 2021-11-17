import { Box, Center, Flex, Grid, Text } from "@chakra-ui/layout";
import React from "react";
import { CardCart } from '../CardCart'



export function CartStore() {
  const [scrollBehavior] = React.useState("inside")

  return (
    <Grid
      templateRows="1fr 70px"
      w="225px"
      h="515px"
      bg="transparent"
      border="1px solid"
      borderColor="#21B6E5"
      borderRadius="8px"
    >
      <Box
        as={Grid}
        justifyItems="center"
        paddingTop="10px"
        overflow="auto"
      >
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
        <CardCart/>
      </Box>

      <Center
        bg="#21B6E5"
        border="1px solid"
        borderColor="#21B6E5"
        borderRadius="8px"
      >
        <Text fontWeight="700" fontSize="18px">Total: $ 999.999</Text>
      </Center>
    </Grid>
  );
}
