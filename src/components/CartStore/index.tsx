import { Box, Center, Flex, Grid, Text } from "@chakra-ui/layout";
import React from "react";
import { CardCart } from '../CardCart'

interface CartStore {
  cartItems: any,
  onAddCart: any,
}

export function CartStore({ cartItems, onAddCart }: CartStore) {
  const pricesCartItems = cartItems.map(x => x.price * x.qty)
  const sumCart = pricesCartItems.reduce(add, 0)

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  function add(accumulator, a) {
    return accumulator + a;
  }

  return (
    <Grid
      templateRows="1fr 70px"
      w="260px"
      h="515px"
      bg="transparent"
      border="1px solid"
      borderColor="personalized.cyan"
      borderRadius="8px"
    >
      <Box
        as={Flex}
        justifyItems="center"
        paddingTop="10px"
        overflow="auto"
        flexDirection="column"
        alignItems="center"
      >
        {cartItems.map((item, index) => (
          <CardCart key={index} name={item.name} quantity={item.qty} img={item.img} cooldown={item.cooldown} owner={item.owner} price={item.price}/>
        ))}
      </Box>

      <Center
        bg="personalized.cyan"
        border="1px solid"
        borderColor="personalized.cyan"
        borderRadius="8px"
      >
        <Text fontWeight="700" fontSize="18px">Total: { formatter.format(sumCart) }</Text>
      </Center>
    </Grid>
  );
}
