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
                {(Array.isArray(texto)) ? (
                    texto.map(linha => <span>{linha}</span>)
                ) : (
                    <p>{texto}</p>
                )}
            </div>  
        </div>
    );
}

export default CardServico;