import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import CardServico from "../CardServico";
import { SlickDot, SlickNav, SlickArrows } from "../SlickControls";

import "./SlickServico.css";

function SlickServico() {

  const [servicos, setServicos] = useState([]);
  const [atual, setAtual] = useState(1);

  useEffect(() => {
      axios.get('https://sigageo.herokuapp.com/api/servicos').then(result => {
        setServicos(result.data);
      });
  }, []);

  return (
    <div className="slick-servico">
      <Slider 
        afterChange = {(currentSlide) => {
          let i = (currentSlide ? currentSlide : 0) + 1;
          setAtual(i);
        }}
        dots
        infinite
        speed = {500}
        slidesToShow = {1}
        slidesToScroll = {1}
        centerMode
        arrows
        className = "slides"
        appendDots = {(dots) => <SlickNav dots={dots} atual={atual} total={servicos.length} />}
        customPaging = {() => <SlickDot />}
        nextArrow = {<SlickArrows direction="next" />}
        prevArrow = {<SlickArrows direction="last" />}
      >
        {servicos?.map( (servico, i) =>{
          return (
            <CardServico
              titulo={servico.titulo}
              subtitulo={servico.subtitulo}
              texto={servico.descricao}
              imagem={servico.image[0]?.secure_url}
              key={i}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default SlickServico;
