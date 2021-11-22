import { Image } from "@chakra-ui/image";
import { Box, Flex, Text , Grid} from "@chakra-ui/layout";

interface CardCartProps {
  name: string;
  quantity: number;
  img: string;
  cooldown: string;
  owner: string;
}

export function CardCart({name, quantity, img, cooldown, owner}: CardCartProps) {
  return (
    <Box
      as={Flex}
      w="225px"
      h="110px"
      bg="transparent"
      border="1px solid"
      borderColor="#21B6E5"
      borderRadius="8px"
      padding="5px"
      marginTop="10px"
      marginBottom="5px"
    >
      <Box align="center">
        <Image h="95px" w="68px" src={"https://ipfs.atomichub.io/ipfs/"+img} alt="Beast" />
      </Box>
      <Box as={Grid} marginLeft="8px" marginTop="5px" fontSize="12px" gap="5px">
        <Text><span>Name: </span> { name }</Text>
        <Text><span>Quantity: </span> { quantity }</Text>
        <Text><span>Cooldown: </span> { returnDateFormating(cooldown || '') }</Text>
        <Text><span>Owner: </span> { owner }</Text>
      </Box>
    </Box>
  );

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
}
