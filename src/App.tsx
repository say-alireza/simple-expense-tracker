import { useState } from "react";
import ExpensList from "./components/expense-tracker/components/ExpensList";
import Filter from "./components/expense-tracker/components/Filter";
import ExpensForm from "./components/expense-tracker/components/ExpensForm";
// import {Expense} from "./components/expense-tracker/components/ExpensList"

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "the description", amount: 10, category: "Utilities" },
    { id: 2, description: "lorem ipsom", amount: 10, category: "Utilities" },
    { id: 3, description: "lorem ipsom", amount: 100, category: "Groceries" },
    { id: 4, description: "lorem ipsom ", amount: 10, category: "Entertianment" },
  ]);
  const [selectedCategory, SetselectedCategory] = useState("");
  const visibleExpenses = selectedCategory ? expenses.filter(e=>e.category===selectedCategory):expenses
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };
  // const handleAddExpense = (newExpense:Omit<Expense,'id'>) => {
  //   setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  // };

  return (
    <div>
      <div className="mb-3"> 
        <ExpensForm onSubmit={(expense) => setExpenses([...expenses,{...expense,id: expenses.length+1}])}/>
      <Filter 
        onSlelectCategory={(category)=>SetselectedCategory(category)} 
        />
        </div>
      <ExpensList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
