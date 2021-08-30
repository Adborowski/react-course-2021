import React from 'react'

import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {

    // const [title, setTitle] = useState(props.title); 
    // ^ this is a REACT HOOK - they can be recognized from the "use" keyword
    // hooks must be called directly inside component functions, and not in nested functions
    // useState returns an array, which we destructure (0 is value itself, 1 is updating function)
    // but why is this a const if we're gonna change it?
    // it's because it's managed somewhere else, and const will only stop us from reassigning with the = operator

    return(
        <li>
            <Card className="expense-item">
                <div className="expense-item__description">
                    <ExpenseDate date={props.date}/>
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">EUR {props.price}</div>
                </div>
            </Card>
        </li>
        )
}

export default ExpenseItem;