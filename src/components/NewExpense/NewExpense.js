import React, {useState} from "react";

import './NewExpense.css';

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditting] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData);
    setIsEditting(false);
  }

  const startEditing = () => {
    setIsEditting(true);
  }

  const stopEditing = () => {
    setIsEditting(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
    </div>
  );
};

export default NewExpense;

