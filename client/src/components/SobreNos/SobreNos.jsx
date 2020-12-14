import CardSobre from "../CardSobre";
import "./SobreNos.css"
import axios from "axios";
import { useEffect, useState } from "react"

import visao from './assets/visao.png'
import missao from './assets/missao.png'
import valor from './assets/valor.png'

function SobreNos() {
    const [sobre, setSobre] = useState([]);
    const [valores, setValores] = useState([]);

    useEffect(() => {
        axios.get("/api/sobrenos").then(res => {
            setSobre(res.data[0]);
        });

        axios.get("/api/valores").then(res => {
            setValores(res.data);
        });
    }, []);

    return (

        <div className="secao-sobre" id="sobre-nos">
            <h2>NOSSA HISTÓRIA</h2>

            <p>{sobre?.quemSomos}</p>

            <div className="card-sobreNos">
                <CardSobre
                    titulo='VISÃO'
                    texto={sobre?.visao}
                    imagem={visao}
                    largura="calc(180px + 10%)" altura="calc(220px + 7vw)"
                />
                <CardSobre
                    titulo='MISSÃO'
                    texto={sobre?.missao}
                    imagem={missao}
                    largura="calc(180px + 10%)" altura="calc(220px + 7vw)"
                />
                <CardSobre
                    titulo='VALORES'
                    texto={valores}
                    imagem={valor}
                    largura="calc(180px + 10%)" altura="calc(220px + 7vw)"
                />
            </div>
            <div id="enfeite-3"></div>
            <div id="enfeite-4"></div>
        </div>
    );

}

export default SobreNos;
