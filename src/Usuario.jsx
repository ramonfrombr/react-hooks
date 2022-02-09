import React, {useContext} from 'react';

import {ContextoAplicativo} from './UseContext/UseContext'


const Usuario = () => {

    const {
        nomeUsuario
    } = useContext(ContextoAplicativo)


    return (
        <div>
            <h1>{nomeUsuario}</h1>
        </div>
    );
};

export default Usuario;
