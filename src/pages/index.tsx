import Head from 'next/head'
import React, { useState } from 'react'

import { HStack, Center, Grid, Button, Box } from "@chakra-ui/react"
import { CardBeast } from '../components/CardBeast'
import { CartStore } from '../components/CartStore'
import { FilterSelect } from '../components/FilterSelect'
import { FilterSearch } from '../components/FilterSearch'
import { useBeast } from '../hooks/useBeast'

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

      <HStack spacing="100px" m="0 auto" maxW="1152px" align="center">
        <Grid
          marginLeft="50px"
          spacing="15px"
          flex="1"
          h="calc(100vh - 10rem)"
          gridTemplateRows="180px 1fr 100px"
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
          <HStack align="top" spacing="15px" >
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
          </HStack>
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
              onClick={() => pageController("prev")}
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
              onClick={() => pageController("next")}
            >
              Next page
            </Button>
          </HStack>
        </Grid>
        <Center spacing="15px" flex="1" h="calc(100vh - 10rem)">
          <CartStore onAddCart={onAdd} cartItems={ cartItems }/>
        </Center>
      </HStack>
    </>
  )
}
