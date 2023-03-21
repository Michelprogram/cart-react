import type { Character } from "rickmortyapi";
import { Button } from "./Button";
import { useShoppingCart } from "../context/ShoppingCart";

type Props = {
  character: Character;
  price: number;
};

export const Card: React.FC<Props> = (character) => {
  const { IncreaseItem, DescreaseItem, AddItem, RemoveItem, GetItemQuantity } =
    useShoppingCart();

  const quantity = GetItemQuantity(character.character.id);
  return (
    <div className="flex flex-col justify-center items-center h-[50vh]">
      <div className="!z-5 relative rounded-[20px] max-w-[300px] bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white">
        <div className="h-full w-full">
          <div className="relative w-full">
            <img
              src={character.character.image}
              className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
              alt=""
            />
          </div>
          <div className="mb-3 flex items-center justify-between px-1 md:items-start">
            <div className="mb-2">
              <p className="text-lg font-bold text-navy-700">
                {character.character.name}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                By Dorian Gauron
              </p>
            </div>
            <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
              <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 ">
                +5
              </span>
              <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar1.eeef2af6dfcd3ff23cb8.png"
                  alt=""
                />
              </span>
              <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar2.5692c39db4f8c0ea999e.png"
                  alt=""
                />
              </span>
              <span className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white">
                <img
                  className="h-full w-full rounded-full object-cover"
                  src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar3.9f646ac5920fa40adf00.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between md:items-center lg:justify-between ">
            <div className="flex">
              <p className="!mb-0 text-sm font-bold text-brand-500">
                Current Bid: {character.price} <span>ETH</span>
              </p>
            </div>
          </div>
          <div className="mt-3">
            {quantity == 0 ? (
              <Button
                color="green"
                text="Add to cart"
                onClick={() => AddItem(character.character, character.price)}
              />
            ) : (
              <div>
                <div className="flex items-center gap-4">
                  <div
                    className="text-white p-1 text-lg rounded bg-teal-500 cursor-pointer"
                    onClick={() => DescreaseItem(character.character.id)}
                  >
                    -
                  </div>
                  <div>{quantity} in cart</div>
                  <div
                    className="text-white p-1 text-lg rounded bg-teal-500 cursor-pointer"
                    onClick={() => IncreaseItem(character.character.id)}
                  >
                    +
                  </div>
                </div>
                <Button
                  color="red"
                  text="Remove"
                  onClick={() => RemoveItem(character.character.id)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
