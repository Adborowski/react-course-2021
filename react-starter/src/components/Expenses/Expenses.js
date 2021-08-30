import React, {useState} from 'react';
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart.js'

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2022'); // 2022 is the default - watch out, it's a string

    const filteredExpenses = props.expenseList.filter(item => item.date.getFullYear() === parseInt(filterYear));
    console.log("Current Expense List:", filteredExpenses);


    const filterChangeHandler = (selectedFilterYear) => {
        setFilterYear(selectedFilterYear);
    }

    return(
        <div>
            <ExpenseFilter defaultYear={filterYear} onFilterChange={filterChangeHandler}/>
            <Card className="expenses">
                <h2>Expense Tracker</h2>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses