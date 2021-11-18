import Head from 'next/head'
import { HStack, Center, Grid, Button, Flex } from "@chakra-ui/react"
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
          gridTemplateRows="180px 1fr 150px"
        >
          <Center>
            <Filters />
          </Center>
          <HStack align="top" spacing="15px" >
            <CardBeast />
            <CardBeast />
            <CardBeast />
          </HStack>
          <HStack gap="25px" justifyContent="center" alignItems="flex-start">
            <Button
              variant="link"
              color="#FFFFFF"
              fontSize="12px"
              fontWeight="400"
              _active={{ bg: "none", transform: "scale(0.80)", borderColor: "none", }}
              _focus={{
                boxShadow:
                  "none",
              }}
            >
              Previous page
            </Button>

            <Button
              variant="link"
              color="#FFFFFF"
              fontSize="12px"
              fontWeight="400"
              _active={{ bg: "none", transform: "scale(0.80)", borderColor: "none", }}
              _focus={{
                boxShadow:
                  "none",
              }}
            >
              Next page
            </Button>
          </HStack>
        </Grid>
        <Center spacing="15px" flex="1" h="calc(100vh - 10rem)">
          <CartStore />
        </Center>
      </HStack>
    </>
  )
}
