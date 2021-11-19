import Head from 'next/head'
import React, { useEffect, useState } from 'react'

import { HStack, Center, Grid, Button } from "@chakra-ui/react"
import { CardBeast, CardBeastProps } from '../components/CardBeast'
import { CartStore } from '../components/CartStore'
import { Filters } from '../components/Filters'
import { api } from '../pages/api/index'
import axios from 'axios'

export default function Home() {
  const [beasts, setBeasts] = useState<CardBeastProps[]>([])

  async function getBeats() {
    const { data } =  await axios.get("https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=bgcollection&schema_name=beasts&owner=littigkami21&page=1&limit=3&order=desc&sort=asset_id")
    setBeasts(data.data)
    console.log(beasts, "")
  }

  useEffect(() => {
    getBeats()
  }, [])

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
            {beasts.map((item, index) => (
              <CardBeast key={index} name={item.name} cooldown={item.data.cooldown} owner={item.owner} element={item.data.element} img={item.data.img}/>
            ))}
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
