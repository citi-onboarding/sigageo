import './CardSobre.css';

function CardSobre(props) {

    const {titulo} = props;
    const {texto} = props;
    const {imagem} = props;
    const {largura} = props;
    const {altura} = props;

    return (
        <div className="card" style ={{width: largura + 'px', height: altura + 'px'}}>
            <img src={imagem} alt="icone"/>
            <h2>{titulo}</h2>
            <p>{texto}</p>  
        </div>
    );
}

export default CardSobre;