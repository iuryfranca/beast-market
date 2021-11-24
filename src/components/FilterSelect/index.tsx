import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Select } from "@chakra-ui/select";
import React from "react";
import { useBeast } from "../../hooks/useBeast";

export function FilterSelect() {
  const selectOptions = [
    {
      value: null,
      name: "Filter by element"
    },
    {
      value: 'water',
      name: "Water"
    },
    {
      value: 'magic',
      name: "Magic"
    },
    {
      value: 'electric',
      name: "Eletric"
    },
    {
      value: 'fire',
      name: "Fire"
    },
    {
      value: 'earth',
      name: "Earth"
    },
    {
      value: 'air',
      name: "Air"
    }
  ]

  const { onChangeElementFilter, element } = useBeast()

  return (
      <Flex
        spacing="100px"
        justify="space-between"
      >
      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          w="175px"
          h="30px"
          bg="personalized.cyan"
          _hover={{ bg: "personalized.cyan" }}
          _active={{ bg: "personalized.cyan" }}
          rightIcon={<ChevronDownIcon />}
          justifyContent="start"
        >
          { element?.label || "Filter by element" }
        </MenuButton>
        <MenuList
          bg="personalized.cyan"
        >
          {selectOptions.map((item) => (
            <MenuItem
              onClick={() => onChangeElementFilter({ label: item.name, value: item.value })}
              _hover={{ bg: "none" }}
              bg="personalized.cyan"
              key={item.value}
              value={item.value}
            >
              {item.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

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
