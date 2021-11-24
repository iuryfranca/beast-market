import { useDisclosure } from "@chakra-ui/hooks";
import { createContext, useState, ReactNode, useContext } from "react";

interface ModalProviderProps {
  children: ReactNode
}

interface propsModal {
  isCartModalIsOpen: boolean;
  setStatus: React.Dispatch<boolean>;
}

export const ModalContext = createContext<propsModal>({} as propsModal);

export function ModalProvider({ children }: ModalProviderProps) {
  const [isCartModalIsOpen, setCartModalIsOpen] = useState(false)
  console.log(isCartModalIsOpen)

  function setStatus(status: boolean) {
    return setCartModalIsOpen(status)
  }

  return (
    <ModalContext.Provider value={{
      isCartModalIsOpen,
      setStatus
    }}>
      { children }
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}
