import './CardDepoimento.css';

function CardDepoimento(props) {

    const {
        nome,
        cargo,
        texto,
        imagem
    } = props;

    return (
        <div className="card-depoimento">
            <div className="depoimento-icone">
                <div className="icone-bg"></div>
                <div className="depoimento-foto" style={{backgroundImage: `url(${imagem})` }}></div>
            </div>
            <div className="depoimento-header">
                <h2>{nome}</h2>
                <h3>{cargo}</h3>
            </div>
            <div id="texto-depoimento">
                <p>{texto}</p>
            </div>
        </div>
    );
}

export default CardDepoimento;