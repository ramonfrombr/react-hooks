import axios from 'axios';
import React, {useEffect, useState, useMemo} from 'react';



const UseMemo = () => {

    const [dados, definirDados] = useState(null);
    const [toggle, definirToggle] = useState(false);


    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((resposta) => {
                definirDados(resposta.data);
            })
    }, [])


    const encontrarMaiorNome = (comentarios) => {

        if (!comentarios) return null;

        let maiorNome = "";

        for (let i = 0; i < comentarios.length; i++) {
            
            let nomeAtual = comentarios[i].name;

            if (nomeAtual.length > maiorNome.length) {

                maiorNome = nomeAtual;
            }
        }

        console.log("Maior nome computado.");

        return maiorNome;
    };


    const selecionarMaiorNome = useMemo(() => {

        encontrarMaiorNome(dados)
    }, [dados])


    return (
        <div>
            <div>{selecionarMaiorNome}</div>

            <button
                onClick={() => {
                    definirToggle(!toggle)
                }}
            >
                {" "}
                Toggle
            </button>

            {toggle && <h1>toggle</h1>}
        </div>
    );
};

export default UseMemo;
