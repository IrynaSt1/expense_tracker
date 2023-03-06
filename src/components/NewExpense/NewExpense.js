import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing,setIsEditing]=useState(false);

    const saveExpenseHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditingHandler=()=>{
        setIsEditing(true);
        console.log(isEditing)
    }
    const stopEditing=()=>{
        setIsEditing(false);
        console.log(isEditing)
    }
    
    return(

        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={stopEditing}/>}
        </div>
    );
};

export default NewExpense;