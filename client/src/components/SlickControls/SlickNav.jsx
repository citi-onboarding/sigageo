import './SlickControls.css';

function SlickNav(props) {

    const { dots, atual, total } = props;

    return (
        <div className="slick-dots">
            <h2>{'0' + atual}</h2>
              <ul style={{width: '80%'}}> {dots} </ul>
            <h2>{'0' + total}</h2>
        </div>
    );
}

export default SlickNav;