import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, handleRemoveClick}) {
  function handleTileClick(stock){
    handleRemoveClick(stock)
  }
  let myPortfolio = portfolio.map(stock => (
    <Stock key={stock.id} stock={stock} onClick={handleTileClick} />
  ))
  return (
    <div>
      <h2>My Portfolio</h2>
      {myPortfolio}
    </div>
  );
}

export default PortfolioContainer;
