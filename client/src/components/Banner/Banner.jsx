import './Banner.css'
import SvgMaior from './assets/Svg-maior.svg'
import { useState, useEffect } from 'react'
import axios from "axios"

function Banner() {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        axios.get("/api/banner").then(res => {
            setBanner(res.data);
        })
    }, [])

    return (
        <div className="banner">
            <div className="titulo">
                <h1>{banner[0]?.titulo}</h1>
            </div>

            <button><a href="#contato" className="btn-menu">CONTATE-NOS</a></button>

            <div className="content">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1798.224 1522.563">

                    <clipPath id="al">
                        <path className="a"
                            d="M2309.4,688.253C2071.68,1177.96,1186.98,1193.13,870.353,1002.81S453.7,397.616,646.922,76.164,1265.06-536.315,1581.68-345.994,2502.62,366.8,2309.4,688.253Z"
                            transform="translate(-548.501 406.516)" />
                    </clipPath>

                    <image xlinkHref={banner[0]?.image[0]?.secure_url}
                        clipPath="url(#al)" width="1798.224" height="1922.563" x="0" y="0" />
                </svg>

                <div className="sgv-maior"> <img src={SvgMaior} alt="" /> </div>
            </div>

        </div >
    );
};

export default Banner;