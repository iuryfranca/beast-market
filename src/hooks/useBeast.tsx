import axios from "axios";
import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { CardBeastProps } from "../components/CardBeast";

interface BeastProviderProps {
  children: ReactNode
}

type ElementData = {
  value: string;
  label: string;
}

interface BeastsContextData {
  beasts: CardBeastProps[];
  element: ElementData;
  onChangeElementFilter(data: ElementData): void;
  pageController(action: string): void;
  onChangeSearchFilter(searchText: string): void;
}

export const BeastContext = createContext<BeastsContextData>({} as BeastsContextData);

export function BeastProvider({ children }: BeastProviderProps) {
  const [beasts, setBeasts] = useState<CardBeastProps[]>([])
  const [element, setElement] = useState<ElementData | undefined>(undefined)
  const [countPage, setCountPage] = useState(1)
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get(`https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=bgcollection&schema_name=beasts&owner=littigkami21&page=${ countPage }&limit=3${ element?.value? `&data:text.element=${element?.value}` : "" }${ search? `&data:text.name=${search}` : "" }&order=desc&sort=asset_id`)
      .then(res => {
        const formatedBeast: CardBeastProps[] = res.data.data?.map((beast: any) => {
          return {
            name: beast.data.name,
            cooldown: beast.data.cooldown,
            element: beast.data.element,
            img: beast.data.img,
            owner: beast.owner,
            asset_id: beast.asset_id,
          }
        })
        setBeasts(formatedBeast)
      })
  }, [element, countPage, search])

  function pageController(action: string) {
    if (action === 'next') {
      setCountPage(countPage + 1)
    } else if (action === 'prev') {
      if (countPage !== 1) {
        setCountPage(countPage - 1)
      }
    }
  }

  function onChangeSearchFilter(searchText) {
    setCountPage(1)
    return setSearch(searchText)
  }

  function onChangeElementFilter(data: ElementData) {
    setCountPage(1)
    return setElement(data)
  }

  return (
    <BeastContext.Provider value={{
      beasts,
      element,
      onChangeElementFilter,
      onChangeSearchFilter,
      pageController,
    }}>
      { children }
    </BeastContext.Provider>
  );
}

export function useBeast() {
  const context = useContext(BeastContext);

  return context;
}
