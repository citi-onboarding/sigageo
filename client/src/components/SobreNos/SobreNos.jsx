import CardSobre from "../CardSobre";
import "./SobreNos.css"
import axios from "axios";
import { useEffect, useState } from "react"

function SobreNos() {
    const [sobre, setSobre] = useState([]);
    const [valores, setValores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/sobrenos").then(res => {
            setSobre(res.data);
        });

        axios.get("http://localhost:3001/api/valores").then(res => {
            setValores(res.data);
        });
    });

    return (

        <div className="secao-sobre">
            <h2>NOSSA HISTÓRIA</h2>

            <p>{sobre?.sobreNos}</p>

            <div className="card-sobreNos">
                <CardSobre
                    titulo='VISÃO'
                    texto={sobre?.visao}
                    imagem='https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/eye-24-512.png'
                    largura="300px" altura="320px"
                />
                <CardSobre
                    titulo='MISSÃO'
                    texto={sobre?.misao}
                    imagem='https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/target.png'
                    largura="300px" altura="320px"
                />
                <CardSobre
                    titulo='VALORES'
                    texto={valores}
                    imagem='https://www.flaticon.com/svg/static/icons/svg/1528/1528669.svg'
                    largura="300px" altura="320px"
                />
            </div>

        </div>
    );

}

export default SobreNos;
