import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DummyExpenses = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 21)
  },
  {
    id: 'e2',
    title: 'Tooth Brush',
    amount: 2.79, date: new Date(2021, 1, 31)
  },
  {
    id: 'e3',
    title: 'Notes',
    amount: 4.09,
    date: new Date(2023, 4, 10)
  },
];

const App = () => {
  const [expenses, setExpense] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      console.log(expense);
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
