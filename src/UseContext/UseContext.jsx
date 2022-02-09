import React, {useState, createContext} from 'react';
import Login from '../Login'
import Usuario from '../Usuario'



export const ContextoAplicativo = createContext(null);



const UseContext = () => {

    const [nomeUsuario, definirNomeUsuario] = useState("")

    return (
        <ContextoAplicativo.Provider
            value={{
                nomeUsuario,
                definirNomeUsuario
            }}
        >
            <Login />
            <Usuario />
        </ContextoAplicativo.Provider>
    );
};

export default UseContext;
