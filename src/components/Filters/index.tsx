import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Center, Flex, Grid, HStack, Text } from "@chakra-ui/layout";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import { Select } from "@chakra-ui/select";

export function Filters() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Grid
      as={Center}
      gridTemplateRows="1fr 1fr"
      gap="15px"
    >
      <InputGroup>
        <Input
          pr="4.5rem"
          placeholder="Search"
          border="1px solid"
          borderColor="#21B6E5"
          borderRadius="8px"
          _hover={{ bg: "none" }}
          h="40px"
          w="315px"
        />
        <InputRightElement padding="0" w="55px">
          <Button
            rightIcon={<SearchIcon />}
            bg="none"
            w="50px"
            padding="0"
            _hover={{ bg: "none" }}
            _active={{ bg: "none", transform: "scale(0.80)", borderColor: "none", }}
            _focus={{
              boxShadow:
                "none",
            }}
            onClick={() => console.log("Teste")} />
        </InputRightElement>
      </InputGroup>

      <Flex
        spacing="100px"
        justify="space-between"
      >
        <Select
          placeholder="Filter by element"
          bg="#21B6E6"
          color="#FFFFFF"
          border="none"
          w="165px"
          h="30px"
        />
        <Select
          placeholder="Sort by"
          bg="#21B6E6"
          color="#FFFFFF"
          border="none"
          w="120px"
          h="30px"
        />
      </Flex>
    </Grid>
  );
}
