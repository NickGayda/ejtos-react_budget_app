import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurency = (val)=>{
    dispatch({
        type: 'CHG_CURRENCY',
        payload: val,
    })  
  }
  
  return (
    <div className="alert alert-success">
        <span>Currency: </span> 
        <select name="Currency" id="Currency" onChange={event => changeCurency(event.target.value)}
          className="" >
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Rupee</option>
        </select>
    </div>
  )
}

export default Currency