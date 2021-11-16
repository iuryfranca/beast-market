import Head from 'next/head'
import { HStack, Box } from "@chakra-ui/react"

import styles from './styles.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Beast Market</title>
      </Head>

      <HStack spacing="100px" m="0 auto" maxW="1280px" align="center">
        <Box flex="1" h="calc(100vh - 10rem)" bg="tomato"/>
        <Box w="400px" h="300px" bg="green"/>
      </HStack>
    </>
  )
}
