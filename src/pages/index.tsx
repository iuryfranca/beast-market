import Head from 'next/head'
import { HStack, Center, Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import { CardBeast } from '../components/CardBeast'
import { CartStore } from '../components/CartStore'
import React from 'react'
import { Filters } from '../components/Filters'

export default function Home() {
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
          gridTemplateRows="180px 1fr"
        >
          <Center>
            <Filters />
          </Center>
          <HStack align="top" spacing="15px" >
            <CardBeast />
            <CardBeast />
            <CardBeast />
          </HStack>
        </Grid>
        <Center spacing="15px" flex="1" h="calc(100vh - 10rem)">
          <CartStore />
        </Center>
      </HStack>
    </>
  )
}
