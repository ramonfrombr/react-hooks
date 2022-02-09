import React, {useState, useCallback} from 'react';

import ComponenteFilho from '../Filho'

const UseCallback = () => {


    const [toggle, definirToggle] = useState(false);
    const [dados, definirDados] = useState("Inscreva-se no canal.")


    const retornarComentario = useCallback(
        (nome) => {
            return dados + nome;
        },
        [dados]
    );

    return (
        <div>
            <ComponenteFilho
                retornarComentario={retornarComentario}
            />

            <button
                onClick={() => {
                    definirToggle(!toggle);
                }}
            >
                {" "}
                Toggle
            </button>

            {toggle && <h1>toggle</h1>}
        </div>
    );
};

export default UseCallback;
