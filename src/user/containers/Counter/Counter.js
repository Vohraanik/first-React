import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../redux/slice/counter.slice';


function Counter(props) {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter_slice);
    console.log(count);

    const handleinc = () =>{
        dispatch(increment());
    }


    const handledec = () =>{
            dispatch(decrement());
    }
    return (
        <div>
            <h1>This is Counter Page</h1> 
            <button onClick={handledec}>-</button>
            {count.count}
            <button onClick={handleinc} >+</button>
            
        </div>
    );
}

export default Counter;