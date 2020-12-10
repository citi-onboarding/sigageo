import './SlickControls.css';
import arrow from './assets/arrow.png';

function SlickArrows(props) {
    const {direction, onClick} = props;
    return (
        <div 
            className={`slick-arrow ${direction}`}
            onClick={onClick}
        >
            <img src={arrow} alt="" className="arrow-img"/>
        </div>
    );
}

export default SlickArrows