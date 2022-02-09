import React, {useState} from 'react';

const UseReducer = () => {
    
    const [contador, definirContador] = useState(0);
    const [exibirTexto, definirExibirTexto] = useState(true);

    return (
    <div>
        <h1>{contador}</h1>

        <button
            onClick={() => {
                definirContador(contador+1);
                definirExibirTexto(!exibirTexto)
            }}
        >
            Clique aqui
        </button>

        {exibirTexto && <p>Isto é um parágrafo</p>}
    </div>
    );
};

export default UseReducer;
