import React, {useContext} from 'react';

import {ContextoAplicativo} from './UseContext/UseContext'


const Login = () => {

    const {
        definirNomeUsuario
    } = useContext(ContextoAplicativo)

    return (
        <div>
            <input
                onChange={(evento) => {
                    definirNomeUsuario(evento.target.value)
                }}
            />
        </div>
    );
};

export default Login;
