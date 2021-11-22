import { Flex } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import React, { useState } from "react";

interface element {
  onChangeElement?: any;
}

export function FilterSelect({ onChangeElement }: element) {

  return (
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
          onChange={onChangeElement}
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
  );
}
