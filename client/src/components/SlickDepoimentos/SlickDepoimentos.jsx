import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import CardDepoimento from "../CardDepoimento";
import { SlickDot, SlickNav, SlickArrows } from "../SlickControls";

import "./SlickDepoimentos.css";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function SlickServico() {

  const [depoimentos, setDepoimentos] = useState([]);
  const [atual, setAtual] = useState(1);
  const size = useWindowSize()

  useEffect(() => {
      axios.get('https://sigageo.herokuapp.com/api/depoimentos').then(result => {
        setDepoimentos(result.data);
      });
  }, []);

  return (
    <div className="slick-depoimentos">
      <Slider 
        afterChange = {(currentSlide) => {
          let i = (currentSlide ? currentSlide : 0) + 1;
          setAtual(i);
        }}
        dots
        infinite
        speed = {500}
        slidesToShow = {(size.width>700)?2:1}
        slidesToScroll = {1}
        centerMode
        vertical = {(size.width>700)?true:false}
        arrows
        className = "slides"
        appendDots = {(dots) => <SlickNav dots={dots} atual={atual} total={depoimentos.length} />}
        customPaging = {() => <SlickDot />}
        nextArrow = {<SlickArrows direction="next" />}
        prevArrow = {<SlickArrows direction="last" />}
      >
        {depoimentos?.map( (servico, i) =>{
          return (
            <CardDepoimento
              nome={servico.name}
              cargo={servico.cargo}
              texto={servico.depoimento}
              imagem={servico.imagem?.url}
              key={i}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default SlickServico;
