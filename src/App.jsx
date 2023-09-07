import React from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import banner from "./imagens/banner.jpg";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <img width="100%" src={banner} alt="banner" />
      <h1
        style={{
          margin: 15,
        }}
      >
        Filmes
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Card />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default App;
