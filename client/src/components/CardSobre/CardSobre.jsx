import './CardSobre.css';

function CardSobre(props) {

    const {
        titulo,
        texto,
        imagem,
        largura = "360px",
        altura = "fit-content"
    } = props;

    return (
        <div className="card" style ={{width: largura, height: altura}}>
            <img src={imagem} alt="icone"/>
            <h2>{titulo}</h2>
            <div id="texto">
                {(Array.isArray(texto)) ? (
                    texto.map(linha => <p>{linha?.valor}</p>)
                ) : (
                    <p>{texto}</p>
                )}
            </div>  
        </div>
    );
}

export default CardSobre;