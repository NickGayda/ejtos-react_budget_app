import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const limit = 20000;

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const onNewBudget = (e) => {
        if (newBudget > limit){
            alert("The budget cannot exceed £" + limit + "!");
            setNewBudget(budget);
        } else if (newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending!");
            setNewBudget(totalExpenses);
        } else {
            setNewBudget(e.target.value)
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} <input
                        required='required'
                        type='number'
                        id='budget'
                        value={newBudget}
                        style={{size: 10}}
                        step={10}
                        onChange={(event) => onNewBudget(event)}>
                        </input></span>
        </div>
    );
};
export default Budget;