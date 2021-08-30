import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState(''); // in the decon, first you name the variable, then you name the setter function
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [formOpenState, setFormOpenState] = useState(false);

    // if you're using previous state, you will need a different function which uses ...prevState
    // learn it here: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25596010#overview

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            price: enteredAmount, // problem - amount vs price
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData); // now we execute it; this allows for communication with parent
        // ^ this uses a POINTER to the parent's function, and it runs it there

        // below three just clear the inputs
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');

        setFormOpenState(false);
    }

    const cancelHandler = (event) => {
        setFormOpenState(false);
    }

    const openHandler = (event) => {
        setFormOpenState(true);
    }

    if (formOpenState === false){
        return <button onClick={openHandler}>Add New Expense</button>
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type="text" 
                        onChange={titleChangeHandler}
                        value = {enteredTitle}
                        />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        value = {enteredAmount}
                        type="number" 
                        min="0.01" 
                        step="0.01" 
                        onChange={amountChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        value = {enteredDate}
                        type="date" 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        onChange={dateChangeHandler}
                        />
                </div>

            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
                <button onClick={cancelHandler}>Cancel</button>
            </div>

        </form>
    )
}

export default ExpenseForm