import React from "react";
import Card from "./Card";
import data from "../data";

export default function Cards() {
  const cards = data.map((card) => <Card key={card.id} {...card} />);

  return <section className="cards">{cards}</section>;
}
