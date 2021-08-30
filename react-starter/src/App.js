import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const addExpenseHandler = expense => {
    // prevState or prevExpenses - we name that ourselves, there's no keyword
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    });

    console.log(expense);
  }

  const dummyExpenses = [
    {id: "e1", title: "insurance", price: 200, date: new Date(2021, 7, 13) },
    {id: "e2", title: "petrol", price: 100, date: new Date(2021, 7, 12) },
    {id: "e3", title: "service", price: 300, date: new Date(2020, 7, 11) },
    {id: "e4", title: "tires", price: 500, date: new Date(2019, 7, 10) }
  ];

  const [expenses, setExpenses] = useState(dummyExpenses)

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseList={expenses}/>
    </div>
  );
}

export default App;
