// contexts/menuContext.tsx

import { createContext, useContext, ReactNode, useState } from 'react';

interface MenuContextProps {
  isMenuOpen: boolean;
  setMenu: (state:boolean) => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const setMenu = (param:boolean) => {
    setMenuOpen(param);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextProps => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
