import React, { useEffect, useRef, useState } from 'react';

function UseRef(props) {
    const [fName,setFname] = useState('');
    const fnameRef =useRef('');
    const renderCount = useRef(0);
    // const [count,setCount] = useState(0);
    console.log(renderCount);
    const prevVal = useRef('');


    useEffect(()=>{
        renderCount.current +=1;

     prevVal.current = fName;

        // setCount((prev)=>prev+1)
    })

   
   


  const handleStyle = () => {
    fnameRef.current.style.backgroundColor = 'red'
  }

    const handleBlr = () => {
        console.log(fnameRef.current.value);
        fnameRef.current.style.backgroundColor='white'
    }
    return (
        <div>
            <h1>UseRef</h1>
            <input type ='text'
            name='fName'
            ref={fnameRef}
            onBlur={handleBlr}
            onFocus={handleStyle}
            onChange={(e)=>setFname(e.target.value)}
            />
            <p>Number Component Render : {renderCount.current}</p>
            <p>Previous value : {prevVal.current}</p>
        </div>
    );
}

export default UseRef;