import Head from 'next/head'
import { HStack, Center } from "@chakra-ui/react"
import { CardBeast } from '../components/CardBeast'
import { CartStore } from '../components/CartStore'

export default function Home() {
  return (
    <>
      <Head>
        <title>Beast Market</title>
      </Head>

      <HStack spacing="100px" m="0 auto" maxW="1152px" align="center">
        <Center as={HStack} spacing="15px" flex="1" h="calc(100vh - 10rem)">
          <CardBeast />
          <CardBeast />
          <CardBeast/>
        </Center>
        <Center as={HStack} spacing="15px" flex="1" h="calc(100vh - 10rem)">
          <CartStore />
        </Center>
      </HStack>
    </>
  )
}
