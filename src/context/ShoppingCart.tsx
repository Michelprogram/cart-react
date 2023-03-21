import { useContext, createContext, useState } from "react";
import type { Character } from "rickmortyapi";
import { ShoppingCart } from "../components/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

export type CartItem = {
  character: Character;
  price: number;
  quantity: number;
};

type ShoppingCartContext = {
  IncreaseItem(id: number): void;
  DescreaseItem(id: number): void;
  RemoveItem(id: number): void;
  GetItem(id: number): CartItem | undefined;
  AddItem(character: Character, price: number): void;
  GetItemQuantity(id: number): number;

  OpenCart(): void;
  CloseCart(): void;
  GetQuantity(): number;

  TotalPrice(): number;

  cartItems: CartItem[];
};

const ShoppingCartContext = createContext<ShoppingCartContext>(
  {} as ShoppingCartContext
);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shop-cart",
    []
  );

  const [isOpen, setIsOpen] = useState(false);

  const IncreaseItem = (id: number) => {
    const item = GetItem(id);
    if (item != undefined) {
      item.quantity++;
      setCartItems([...cartItems]);
    }
  };

  const AddItem = (character: Character, price: number) => {
    cartItems.push({ character, quantity: 1, price });
    setCartItems([...cartItems]);
  };

  const DescreaseItem = (id: number) => {
    const item = GetItem(id);
    if (item != undefined && item.quantity > 1) {
      item.quantity--;
      setCartItems([...cartItems]);
    } else {
      RemoveItem(id);
    }
  };

  const RemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.character.id !== id));
  };

  const GetItem = (id: number) => {
    return cartItems.find((item) => item.character.id === id);
  };

  const GetItemQuantity = (id: number) => {
    const item = GetItem(id);
    return item == undefined ? 0 : item.quantity;
  };

  const GetQuantity = () =>
    cartItems.reduce((previous, current) => previous + current.quantity, 0);

  const OpenCart = () => setIsOpen(true);
  const CloseCart = () => setIsOpen(false);

  const TotalPrice = () => {
    return cartItems.reduce(
      (previous, current) => previous + current.price * current.quantity,
      0
    );
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        GetItem,
        RemoveItem,
        IncreaseItem,
        AddItem,
        DescreaseItem,
        GetItemQuantity,
        GetQuantity,
        OpenCart,
        cartItems,
        TotalPrice,
        CloseCart,
      }}
    >
      {children}
      {isOpen ? <ShoppingCart /> : null}
    </ShoppingCartContext.Provider>
  );
}
