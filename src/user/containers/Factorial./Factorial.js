import React, { useMemo, useState } from 'react';

function Factorial(props) {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    
    const handlePlus = () => {
        setCount((prev)=> prev + 1);
    }

    const result = () => {
        let fact = 1;

        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        console.log(fact);
        return fact;
    }

    // withoit useMemo
    // const ans = result();

    const ans = useMemo(()=>{
       return result()
    },[num])

    return (
        <div>
            <h1>Use Memo</h1>

            <h2>Counter</h2>
            {count}
            <button onClick={handlePlus}>+</button>

            <h2>Factorial</h2>
            <p>{ans}</p>
            <input type='number' onChange={(e) => setNum(parseInt(e.target.value))}></input>

        </div>
    );
}

export default Factorial;
