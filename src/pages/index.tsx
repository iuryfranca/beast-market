import Head from 'next/head'
import React, { useState } from 'react'
import { HStack, Center, Grid, Button, Box, Flex } from "@chakra-ui/react"
import { CardBeast } from '../components/CardBeast'
import { CartStore } from '../components/CartStore'
import { FilterSelect } from '../components/FilterSelect'
import { FilterSearch } from '../components/FilterSearch'
import { useBeast } from '../hooks/useBeast'
import $ from 'jquery'

export default function Home() {
  const { beasts, pageController } = useBeast()
  const [cartItems, setCartItems] = useState([])

  const onAdd = (beast) => {
    const exist = cartItems.find(x => x.asset_id === beast.asset_id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.asset_id === beast.asset_id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, {...beast, qty: 1}]);
    }
  }

  return (
    <>
      <Head>
        <title>Beast Market</title>
      </Head>

      <HStack spacing="100px" m="0 auto" width={{ base: "370px", md: "650px", lg: "1155px" }} align="center">
        <Grid
          spacing="15px"
          flex="1"
          h="calc(100% - 10rem)"
          gridTemplateRows={{ base: "100px 1fr 50px", md: "180px 1fr 100px" }}
        >
          <Grid
            as={Center}
            gridTemplateRows="min-content min-content"
            alignSelf="center"
            gap="15px"
          >
            <FilterSearch />
            <FilterSelect />
          </Grid>
          <Center
            as={Grid}
            flexDirection={{ base: "column", md: "row" }}
            align={{ base: "center", lg: "top" }}
            gap="10px"
            padding="20px 0"
          >
            {beasts.map((item) => (
              <CardBeast
                onAddCart={onAdd}
                key={item?.asset_id}
                asset_id={item?.asset_id}
                name={item?.name}
                cooldown={item?.cooldown}
                owner={item?.owner}
                element={item?.element}
                img={item?.img}
              />
            ))}
            <Center w="-webkit-fill-available" display={beasts.length > 0 ? "none" : "flex"}>Nenhum Card disponível :"(</Center>
          </Center>
          <HStack gap="25px" justifyContent="center" alignItems="flex-start">
            <Button
              variant="link"
              color="#FFFFFF"
              fontSize="12px"
              fontWeight="400"
              _active={{ bg: "none", transform: "scale(0.90)", borderColor: "none", }}
              _focus={{
                boxShadow:
                  "none",
              }}
              onClick={() => {
                $('html, body').animate({scrollTop:0}, 'slow');
                pageController("prev")
              }}
            >
              Previous page
            </Button>

            <Button
              variant="link"
              color="#FFFFFF"
              fontSize="12px"
              fontWeight="400"
              _active={{ bg: "none", transform: "scale(0.90)", borderColor: "none", }}
              _focus={{
                boxShadow:
                  "none",
              }}
              onClick={() => {
                $('html, body').animate({scrollTop:0}, 'slow');
                pageController("next")
              }}
            >
              Next page
            </Button>
          </HStack>
        </Grid>
        <Center display={{base: "none", md: "flex"}} spacing="15px" flex="1" h="calc(100vh - 10rem)">
          <CartStore onAddCart={onAdd} cartItems={ cartItems }/>
        </Center>
      </HStack>
    </>
  )
}
