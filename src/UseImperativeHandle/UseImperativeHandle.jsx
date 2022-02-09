import React, {useRef} from 'react';
import Botao from '../Botao'

const UseImperativeHandle = () => {

    const botaoReferencia = useRef(null);

    return (
    <div>
        <button
            onClick={() => {
                botaoReferencia.current.alterarToggle();
            }}
        >
            Botão do componente pai
        </button>
        <Botao ref={botaoReferencia}/>
    </div>
    );
};

export default UseImperativeHandle;
