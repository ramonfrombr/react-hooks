import React, {useState, useReducer} from 'react';

const UseReducer2 = () => {
    
    const funcaoReducer = (estado, acao) => {

        switch(acao.tipo) {
            case 'incrementar':
                return {
                    contador: estado.contador+1,
                    exibirTexto: estado.exibirTexto
                }
            case 'alterarExibirTexto':
                return {
                    contador: estado.contador,
                    exibirTexto: !estado.exibirTexto
                }
            default:
                return estado
        }
    }

    const [estado, despachante] = useReducer(
        funcaoReducer,
        {
            contador: 0,
            exibirTexto: true,
        }
    );

    return (
    <div>
        <h1>{estado.contador}</h1>

        <button
            onClick={() => {
                despachante({tipo: 'incrementar'});
                despachante({tipo: 'alterarExibirTexto'});
            }}
        >
            Clique aqui
        </button>

        {estado.exibirTexto && <p>Isto é um parágrafo</p>}
    </div>
    );
};

export default UseReducer2;
