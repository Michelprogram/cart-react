type Color = {
  color: string;
  text: string;
  onClick: () => void;
};

export const Button: React.FC<Color> = (color) => {
  const colorClassNames = () => {
    return (
      "border border-" +
      color.color +
      "-500 bg-" +
      color.color +
      "-500 rounded-md px-2 py-2 transition duration-500 ease select-none hover:bg-" +
      color.color +
      "-600 focus:outline-none focus:shadow-outline text-sm"
    );
  };

  return (
    <button
      type="button"
      className={colorClassNames()}
      onClick={() => color.onClick()}
    >
      {color.text}
    </button>
  );
};
