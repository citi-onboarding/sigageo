import React, { Component } from "react";
import Slider from "react-slick";
import CardServico from "../CardServico"

import "./SlickServico.css";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        className: 'slides',
};
    return (
      <div className="slick-section">
        <Slider {...settings}>
            <CardServico 
                titulo = 'CARTOGRAFIA TEMÁTICA'
                subtitulo = 'Geoprocessamento'
                texto = 'Produção de mapas com fins educacionais sob demanda assim como a elaboração de cartas temáticas voltadas a área empresarial.'
                imagem = 'https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/target.png'
            />
            <CardServico 
                titulo = 'MAPEAMENTO'
                subtitulo = 'Geoprocessamento'
                texto = 'Estudo e mapeamento de área com ênfase na produção de cartas e elaboração de relatório com análise dos dados a fim de auxiliar na tomadas de decisões mais assertivas.'
                imagem = 'https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/target.png'
            />
            <CardServico 
                titulo = 'MAPEAMENTO'
                subtitulo = 'Geoprocessamento'
                texto = 'Estudo e mapeamento de área com ênfase na produção de cartas e elaboração de relatório com análise dos dados a fim de auxiliar na tomadas de decisões mais assertivas.'
                imagem = 'https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/target.png'
            />
            <CardServico 
                titulo = 'MAPEAMENTO'
                subtitulo = 'Geoprocessamento'
                texto = 'Estudo e mapeamento de área com ênfase na produção de cartas e elaboração de relatório com análise dos dados a fim de auxiliar na tomadas de decisões mais assertivas.'
                imagem = 'https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/target.png'
            />
            <CardServico 
                titulo = 'MAPEAMENTO'
                subtitulo = 'Geoprocessamento'
                texto = 'Estudo e mapeamento de área com ênfase na produção de cartas e elaboração de relatório com análise dos dados a fim de auxiliar na tomadas de decisões mais assertivas.'
                imagem = 'https://uxwing.com/wp-content/themes/uxwing/download/01-user_interface/target.png'
            />
        </Slider>
      </div>
    );
  }
}