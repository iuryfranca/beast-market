import { Box, Text } from "@chakra-ui/layout";

export function CardCart() {
  return (
    <Box
      w="190px"
      h="85px"
      bg="transparent"
      border="1px solid"
      borderColor="#21B6E5"
      borderRadius="8px"
      padding="15px"
      marginTop="10px"
      marginBottom="5px"
    >
      <Text>Name: Ni’vlek</Text>
      <Text>Quantity: 2</Text>
    </Box>
  );
}
