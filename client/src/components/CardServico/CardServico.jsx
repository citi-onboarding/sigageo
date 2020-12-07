import './CardServico.css';

function CardServico(props) {

    const {
        titulo,
        subtitulo,
        texto,
        imagem
    } = props;

    return (
        <div className="card">
            <img src={imagem} alt="icone"/>
            <h2>{titulo}</h2>
            <h3>{subtitulo}</h3>
            <div id="texto">
                <p>{texto}</p>
            </div>  
        </div>
    );
}

export default CardServico;