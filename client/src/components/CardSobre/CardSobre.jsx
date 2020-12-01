import './CardSobre.css';

function CardSobre(props) {

    const {titulo} = props;
    const {texto} = props;
    const {imagem} = props;
    const {largura} = props;
    const {altura} = props;

    const textRender = (texto) => {
        if(!Array.isArray(texto)){
            return (
                <p>{texto}</p>
            );
        } else {
            return texto.map(linha => <span>{linha}</span>);
        }
    } 

    return (
        <div className="card" style ={{width: largura + 'px', height: altura + 'px'}}>
            <img src={imagem} alt="icone"/>
            <h2>{titulo}</h2>
            <div id="texto">{textRender(texto)}</div>  
        </div>
    );
}

export default CardSobre;