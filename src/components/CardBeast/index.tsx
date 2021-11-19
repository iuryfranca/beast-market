import { Button } from "@chakra-ui/button"
import { Image } from "@chakra-ui/image";
import { Center, Grid, GridItem, Text } from "@chakra-ui/layout";
import axios from "axios";
import { useEffect, useState } from "react";

export interface CardBeastProps {
  name: string;
  cooldown: any,
  owner: any,
  element: any,
  img: any,
}

export function CardBeast(props: CardBeastProps) {
  const [beastImage, setBeastImage] = useState<any>([])

  async function getBeatsImage() {
    axios.get(`https://ipfs.atomichub.io/ipfs/${props.img}`)
      .then((data) => {
        setBeastImage(data)
      })
  }

  useEffect(() => {
    getBeatsImage()
  }, [])

  return (
    <Grid
      h="410px"
      w="200px"
      templateRows="repeat(3, 1fr)"
      bg="transparent"
      border="1px solid"
      borderColor="#21B6E5"
      borderRadius="8px"
      padding="10px"
    >
      <GridItem align="center">
        <Image h="224px" w="158px" src={"https://ipfs.atomichub.io/ipfs/"+props.img} alt="Beast" />
      </GridItem>

      <Grid
        templateRows="repeat(5, max-content)"
        gap="5px"
        marginLeft="15px"
      >
        <Text fontSize="12px"><span>Name: </span> { props.name }</Text>
        <Text fontSize="12px"><span>cooldown: </span> { returnDateFormating(props.cooldown || '') }  </Text>
        <Text fontSize="12px"><span>owner: </span>{ props.owner } </Text>
        <Text fontSize="12px"><span>element: </span>{ props.element } </Text>
        <Text fontSize="12px"><span>price: </span>$ 1232.99 </Text>
      </Grid>

      <Center align="center">
        <Button
          bg="#21B6E6"
          w="158px"
          h="40px"
          _hover={{ bg: "#21b5e6d1" }}
          _active={{ bg: "#21b5e6d1", transform: "scale(0.95)", borderColor: "none", }}
          _focus={{
            boxShadow:
              "none",
          }}
        >
          <Text fontWeight="400" fontSize="14px">Add to cart</Text>
        </Button>
      </Center>
    </Grid>
  );
}

function returnDateFormating(date) {
  if (date == '') return " - "

  var dateFuture = new Date(date);
  var dateNow = new Date();

  var seconds = Math.floor((dateFuture - (dateNow))/1000);
  var minutes = Math.floor(seconds/60);
  var hours = Math.floor(minutes/60);
  var days = Math.floor(hours/24);

  hours = hours-(days*24);
  minutes = minutes-(days*24*60)-(hours*60);
  seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

  return `${days} d | ${hours}h | ${minutes}m`
}
