import React, {useEffect} from 'react';

const ComponenteFilho = ({retornarComentario}) => {

    useEffect(() => {
        console.log("Função foi chamada.")
    }, [retornarComentario])

    return (
        <div>
            {retornarComentario("Ramon")}
        </div>
    );
};

export default ComponenteFilho;
