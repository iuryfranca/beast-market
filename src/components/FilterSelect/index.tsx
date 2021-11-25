import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Select } from "@chakra-ui/select";
import React from "react";
import { useBeast } from "../../hooks/useBeast";

export function FilterSelect() {
  const selectOptionsElement = [
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

  const selectOptionsSortBy = [
    {
      value: null,
      name: "Sort by"
    },
    {
      value: 'highest',
      name: "Highest price"
    },
    {
      value: 'lowest',
      name: "Lowest price"
    },
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
          {selectOptionsElement.map((item) => (
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

      {/*
        TODO: Filtro não funciona por conta de nao ter pego os preço da API, como coloquei os preço na mão, não seria viável filtrar pela api
        e o filtro não fosse feito pela api, só iria funcionar nos items que estariam já sendo exibidos já que tem a questão da paginação e tals
      */}
      <Menu autoSelect={false}>
        <MenuButton
          as={Button}
          w="120px"
          h="30px"
          bg="personalized.cyan"
          _hover={{ bg: "personalized.cyan" }}
          _active={{ bg: "personalized.cyan" }}
          rightIcon={<ChevronDownIcon />}
          justifyContent="start"
        >
          { selectOptionsSortBy[0].name }
        </MenuButton>
        <MenuList
          bg="personalized.cyan"
        >
          {selectOptionsSortBy.map((item) => (
            <MenuItem
              // onClick={() => onChangeElementFilter({ label: item.name, value: item.value })}
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
    </Flex>
  );
}
