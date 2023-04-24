import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Hero from "./main/hero";
import Card from "./card/card";
import CardData from "./card/cardData";
import "./App.css"
function App() {
  let result = CardData.map((cardItem) => {
    return (
      <Card
        cardContent={{
          image: cardItem.image,
          name: cardItem.place,
          description: cardItem.Description,
        }}
      />
    );
  });

  return (
    <div>
      <Header />
      <Hero />
      <div className="card-container">
        <div className="container1">
          <h1>Destinations</h1>
      {result}
      </div>
      <div className=" container2">
        <h2>Favourites</h2>
      </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
