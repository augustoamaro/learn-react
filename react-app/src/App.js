import React from "react";

import ExpenseItem from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { id: 'e1', title: 'Macbook Pro 13', amount: 2000, date: new Date(2021, 5, 12) },
    { id: 'e2', title: 'Monitor LG 34', amount: 499, date: new Date(2021, 5, 12) },
    { id: 'e3', title: 'TV Samsung 60', amount: 600, date: new Date(2021, 5, 12) },
    { id: 'e4', title: 'Sofá', amount: 399, date: new Date(2021, 5, 12) }
  ];

  return (
    <div>
      <ExpenseItem items={expenses} />
    </div>
  );
}

export default App;
