import './SlickControls.css';

function SlickNav(props) {

    const { dots } = props;

    return (
        <div className="slick-dots">
            <h2>01</h2>
              <ul style={{width: '80%'}}> {dots} </ul>
            <h2>02</h2>
        </div>
    );
}

export default SlickNav;