import React from "react";
import Stock from "./Stock";

function StockContainer({stockArr, handleAddStock}) {
  const stockTiles = stockArr.map(stock => (
     <Stock stock={stock} key={stock.id} handleAddStock={handleAddStock}/>
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {stockTiles}
    </div>
  );
}

export default StockContainer;
