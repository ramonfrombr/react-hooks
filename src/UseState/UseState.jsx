import React, {useState} from 'react';

const UseState = () => {
    
    const [contador, definirContador] = useState(0);

    const incrementar = () => {
        definirContador(contador+1)
    }
    
    return (
    <>
        <h1>{contador}</h1>
        <button onClick={incrementar}>Incrementar</button>
    </>
    );
};

export default UseState;
