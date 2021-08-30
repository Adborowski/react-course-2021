import React from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => { // this line receives data from child (expenseform)
        // this is for communication child->parent
        // if you pass this function down as a prop, the child can use it, and the data will pass up
        // probably have to do this each time we go up?
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData); // this line communicates up, to App.js
        console.log(expenseData);

    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
        )
}

export default NewExpense;