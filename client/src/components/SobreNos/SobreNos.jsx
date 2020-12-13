import CardSobre from "../CardSobre";
import "./SobreNos.css"
import axios from "axios";
import { useEffect, useState } from "react"

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
                    imagem='https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/eye-24-512.png'
                    largura="calc(200px + 10%)" altura="calc(220px + 7vw)"
                />
                <CardSobre
                    titulo='MISSÃO'
                    texto={sobre?.missao}
                    imagem='https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/target.png'
                    largura="calc(200px + 10%)" altura="calc(220px + 7vw)"
                />
                <CardSobre
                    titulo='VALORES'
                    texto={valores}
                    imagem='https://www.flaticon.com/svg/static/icons/svg/1528/1528669.svg'
                    largura="calc(200px + 10%)" altura="calc(220px + 7vw)"
                />
            </div>

        </div>
    );

}

export default SobreNos;
