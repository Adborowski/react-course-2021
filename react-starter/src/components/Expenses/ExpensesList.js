import React from 'react';
import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {

    let expenseList = props.items;

    if (props.items.length === 0){
        return <h2 className="expenses-list__fallback">No expenses found</h2>
    }

    return(
        <ul className="expenses-list">
            {
                expenseList.map((expense) =>   
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        price={expense.price}
                        date={expense.date} 
                    />
                )
            }
        </ul>
    )
}

export default ExpensesList;