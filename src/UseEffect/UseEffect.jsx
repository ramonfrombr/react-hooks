import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UseEffect = () => {
    
    const [dados, definirDados] = useState([]);
    const [contador, definirContador] = useState(0);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((resposta) => {
            definirDados(resposta.data[0].email);
            console.log("API foi chamada");
            console.log(resposta.data)
        });
    }, [contador])


    return (
        <div>
            <h1>{dados}</h1>
            <h1>{contador}</h1>
            <button
                onClick={() => {
                    definirContador(contador + 1)
                }}
            >Clique</button>
        </div>
    );
};

export default UseEffect;
