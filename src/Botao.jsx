import React, { forwardRef, useState, useImperativeHandle } from 'react';

const Botao = forwardRef((props, referencia) => {

    const [toggle, definirToggle] = useState(false);
        
    useImperativeHandle(referencia, () => ({

        alterarToggle() {
            definirToggle(!toggle)
        }
    }));

    return (
        <>
            <button>
                Botão do componente filho 
            </button>
            {toggle && <span>Toggle</span>}
        </>
    );
});

export default Botao