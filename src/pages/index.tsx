import Head from 'next/head'
import React, { useEffect, useState } from 'react'

import { HStack, Center, Grid, Button } from "@chakra-ui/react"
import { CardBeast, CardBeastProps } from '../components/CardBeast'
import { CartStore } from '../components/CartStore'
import { Filters } from '../components/Filters'
import { FilterSearch } from '../components/FilterSearch'
import axios from 'axios'

export default function Home() {
  const [beasts, setBeasts] = useState<CardBeastProps[]>([])
  const [countPage, setCountPage] = useState(1)
  const [element, setElement] = useState(null)

  var urlFilterElement = ""

  filterElement()

  useEffect(() => {
    axios.get(`https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=bgcollection&schema_name=beasts&owner=littigkami21&page=${countPage}&limit=3${urlFilterElement}&order=desc&sort=asset_id`)
      .then(res => {
        setBeasts(res.data.data)
      })
  }, [countPage, urlFilterElement])

  function filterElement() {
    if (element) {
      urlFilterElement = `&data:text.element=${element}`
    } else {
      urlFilterElement = ''
    }
  }

  function pageController(action) {
    if (action === 'next') {
      setCountPage(countPage + 1)
    } else if (action === 'prev') {
      if (countPage !== 1) {
        setCountPage(countPage - 1)
      }
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
          gridTemplateRows="180px 1fr 150px"
        >
          <Grid
            as={Center}
            gridTemplateRows="min-content min-content"
            alignSelf="center"
            gap="15px"
          >
            <FilterSearch/>
            <Filters
              onChangeElement={(e) => {
                setElement(e.target.value)
                setCountPage(1)
              }}
            />
          </Grid>
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
              _active={{ bg: "none", transform: "scale(0.90)", borderColor: "none", }}
              _focus={{
                boxShadow:
                  "none",
              }}
              onClick={() => pageController('prev') }
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
              onClick={() => pageController('next')}
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
