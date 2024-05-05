import React, { useCallback, useState } from 'react';
import CallBackChild from './CallBackChild';

function CallBack(props) {
    const [theme,setTheme] = useState(true);
    const [num,setNum] = useState(0);

    const themeStyle = {
        backgroundColor:theme ? 'white' : 'black',
        color:theme ? 'black' : 'white'
    }

    // without callback
    // const getData = () => {
    //     console.log("get Called");
    //     return [num,num+1,num+2]
    // }
    // console.log(num);

    // with callBack

    const getData =useCallback(()=>{
        console.log("get Called");
        return [num,num+1,num+2]
    },[num])

    return (
        <div style={themeStyle}>
            <h1>CallBack</h1>
            <button onClick={()=>setTheme(!theme)}>Change theme</button>
            <br/> <br/>
            <input type='text' onChange={(e)=>setNum(parseInt(e.target.value))}/>
            <br/> <br/>  
            <CallBackChild exdata={getData} />  
        </div>
    );
}

export default CallBack;