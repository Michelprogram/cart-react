import { CartItem, useShoppingCart } from "../context/ShoppingCart";

type Props = {
  key: React.Key;
  item: CartItem;
};

export const CardItem: React.FC<Props> = (props) => {
  const { GetItemQuantity, RemoveItem } = useShoppingCart();

  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={props.item.character.image}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{props.item.character.name}</a>
            </h3>
            <p className="ml-4">ETH {props.item.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">
            Qty {GetItemQuantity(props.item.character.id)}
          </p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => RemoveItem(props.item.character.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
