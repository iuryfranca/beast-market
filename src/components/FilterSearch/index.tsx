import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

interface nameSearch {
  onClickSearch?: any;
}

export function FilterSearch(props: nameSearch) {
  const [search, setSearch] = useState('')

  return (
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
        value={search}
        onChange={event => setSearch(event.target.value)}
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
        />
      </InputRightElement>
    </InputGroup>
  );
}
