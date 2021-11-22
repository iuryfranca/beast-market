import axios from "axios";
import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { CardBeastProps } from "../components/CardBeast";

interface BeastProviderProps {
  children: ReactNode
}

export const BeastContext = createContext<CardBeastProps[]>([]);

export function BeastProvider({ children }: BeastProviderProps) {
  const [beasts, setBeasts] = useState<CardBeastProps[]>([])
  const [countPage, setCountPage] = useState(1)

  var urlFilterElement = ""

  useEffect(() => {
    // axios.get(`https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=bgcollection&schema_name=beasts&owner=littigkami21&page=${countPage}&limit=3${urlFilterElement}&order=desc&sort=asset_id`)
    axios.get(`https://test.wax.api.atomicassets.io/atomicassets/v1/assets?collection_name=bgcollection&schema_name=beasts&owner=littigkami21&page=1&limit=3${urlFilterElement}&order=desc&sort=asset_id`)
      .then(res => {
        setBeasts(res.data.data)
      })
  }, [])

  function getPagination(action) {
    if (action === 'next') {
      setCountPage(countPage + 1)
    } else if (action === 'prev') {
      if (countPage !== 1) {
        setCountPage(countPage - 1)
      }
    }
  }

  async function getFilter(filterElement, filterSortBy) {
    if (filterElement) {
      urlFilterElement = `&data:text.element=${filterElement}`
    } else {
      urlFilterElement = ''
    }
  }

  return (
    <BeastContext.Provider value={
      beasts
    }>
      { children }
    </BeastContext.Provider>
  );
}

export function useBeast() {
  const context = useContext(BeastContext);

  return context;
}
