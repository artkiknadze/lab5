import React from "react";
import { CurrencyColumn } from "./components/CurrencyColumn";
import { DateColumn } from "./components/DateColumn";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="title">1 UAH</span>
      <table border={1}>
        <DateColumn />
        <CurrencyColumn valcode="USD" />
        <CurrencyColumn valcode="EUR" />
        <CurrencyColumn valcode="GBP" />
      </table>
    </div>
  );
};

export default App;
