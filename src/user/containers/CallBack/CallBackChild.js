import React, { useEffect, useState } from 'react';

function CallBackChild({ exdata }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(exdata());
    }, [exdata]);

    console.log(data);

    return (
        <div>
            <h2>List Value</h2>
            {data.map((v) => (
                <p key={v}>{v}</p>
            ))}
        </div>
    );
}

export default CallBackChild;
