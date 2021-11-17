import { Grid, GridItem } from "@chakra-ui/layout";

export function CardBeast() {
  return (
    <Grid
      h="410px"
      w="200px"
      templateRows="repeat(2, 1fr)"
      bg="#230F5B"
      border="1px solid"
      borderColor="#21B6E5"
      borderRadius="8px"
      padding="10px"
    >
      <GridItem>
        A
      </GridItem>
      <GridItem>
        B
      </GridItem>
      <GridItem>
        C
      </GridItem>
    </Grid>
  );
}
