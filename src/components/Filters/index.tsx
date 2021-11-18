import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Center, Flex, Grid } from "@chakra-ui/layout";
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
          placeholderColor="#21B6E6"
          bg="#21B6E6"
          color="#FFFFFF"
          border="none"
          w="165px"
          h="30px"
        >
          <option style={{ background: "#21B6E6" }} value="water"> Water</option>
          <option style={{ background: "#21B6E6" }} value="magic"> Magic</option>
          <option style={{ background: "#21B6E6" }} value="electric"> Electric</option>
          <option style={{ background: "#21B6E6" }} value="fire"> Fire</option>
          <option style={{ background: "#21B6E6" }} value="earth"> Earth</option>
          <option style={{ background: "#21B6E6" }} value="air"> Air</option>
        </Select>
        <Select
          placeholder="Sort by"
          bg="#21B6E6"
          color="#FFFFFF"
          border="none"
          w="120px"
          h="30px"
        >
          <option value="highest"> Highest price</option>
          <option value="lowest"> Lowest price</option>
        </Select>
      </Flex>
    </Grid>
  );
}
