import React, {useState} from 'react';

const UseState2 = () => {

    const [texto, definirTexto] = useState("Ramon");

    const onChange = (evento) => {

        let novo_texto = evento.target.value;

        definirTexto(novo_texto);
    }

    return (
        <div>
            <input placeholder="Digite alguma coisa" onChange={onChange} />
            <h1>{texto}</h1>
        </div>
        );
};

export default UseState2;
