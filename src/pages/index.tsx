import Head from 'next/head'
import { HStack, Box, Center } from "@chakra-ui/react"
import { CardBeast } from '../components/CardBeast'

export default function Home() {
  return (
    <>
      <Head>
        <title>Beast Market</title>
      </Head>

      <HStack spacing="100px" m="0 auto" maxW="1280px" align="center">
        <Center as={HStack} spacing="15px" flex="1" h="calc(100vh - 10rem)">
          <CardBeast />
          <CardBeast />
          <CardBeast/>
        </Center>
        <Box w="400px" h="300px" bg="green"/>
      </HStack>
    </>
  )
}
