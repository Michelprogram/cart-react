import React, { useEffect, useState } from "react";
import { getCharacters, type Character } from "rickmortyapi";
import { Card } from "../components/Card";

export function Store() {
  const [characters, setCharacters] = useState<Character[]>([]);

  const randomETHPrice = () => Math.floor(Math.random() * 50) + 1;

  useEffect(() => {
    getCharacters().then((characters) => {
      if (characters.data.results !== undefined)
        setCharacters(characters.data.results);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-2xl p-4">Store</h1>
      <div className="grid grid-cols-4 gap-2">
        {characters.map((character, index) => (
          <Card key={index} character={character} price={randomETHPrice()} />
        ))}
      </div>
    </div>
  );
}
