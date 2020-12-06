import './SlickControls.css';

function SlickArrows(props) {
    const {direction, onClick} = props;
    return (
        <div 
            className={`slick-arrow ${direction}`}
            onClick={onClick}
        >
            <div className="arrow-img"></div>
        </div>
    );
}

export default SlickArrows