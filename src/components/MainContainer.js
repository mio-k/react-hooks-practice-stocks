import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockArr, setStockArr] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(resp => resp.json())
    .then(stocks => setStockArr(stocks))
  }, [])

  function handleAddStock(stock){
    const inPortfolio = portfolio.find(item => (
      item.id === stock.id)); 
      if(!inPortfolio){
        setPortfolio([...portfolio, stock])
      }
  }

  function handleRemoveClick(stock){
    setPortfolio(portfolio.filter(item => item.id !== stock.id))
  }
  
  return (
    <div>
      <SearchBar stockArr={stockArr} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockArr={stockArr} handleAddStock={handleAddStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleRemoveClick={handleRemoveClick} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
