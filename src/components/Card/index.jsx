import React from "react";
import card1 from "../../imagens/card1.jpg";
import card2 from "../../imagens/card2.jpg";
import card3 from "../../imagens/card3.jpg";
import card4 from "../../imagens/card4.jpg";
const requisicao = [
  {
    id: 1,
    titulo: "Missão Impossivel 2",
    imagem: card1,
  },
  {
    id: 2,
    titulo: "Missão Impossivel 3",
    imagem: card2,
  },
  {
    id: 3,
    titulo: "Missão Impossivel 9",
    imagem: card3,
  },
  {
    id: 4,
    titulo: "Missão Impossivel 7",
    imagem: card4,
  },
];

export const Card = () => {
  return (
    <div>
      {requisicao.map((filme) => {
        return (
          <div
            style={{
              display: "inline-block",
              margin: 35,
            }}
          >
            <img src={filme.imagem} alt="imagem" />
            <h1>{filme.titulo}</h1>
          </div>
        );
      })}
    </div>
  );
};
