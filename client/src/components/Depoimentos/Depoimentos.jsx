import SlickDepoimentos from '../SlickDepoimentos';

import './Depoimentos.css';

function Depoimentos() {
    return(
        <div className="secao-depoimentos" id="depoimentos">
            <div className="descricao-depoimentos">
                <h2>DEPOIMENTOS</h2>
                <p>Saiba quem trabalhou conosco e o que ele(a) achou da experiência.</p>
            </div>
            <div className="slick-depoimentos-div">
                <SlickDepoimentos />
            </div>
            <div id="enfeite-2"></div>
        </div>
    );
}

export default Depoimentos;