import './NavBar.css'
import Logo_SigaGeo from './assets/Logo_SigaGeo.png'
function NavBar() {

    function Hamburguer() {
        document.querySelector("#hamburguer").classList.toggle("active");
        document.querySelector(".menu").classList.toggle("active");
    }

    return (
        <nav>
            <div class="navBar">
                <div class="logo">
                    <img src={Logo_SigaGeo} alt="logo Siga Geo" />

                </div>

                <div class="menu active">
                    <ul>
                        <li><a href="#">Início</a></li>
                        <hr />
                        <li><a href="#">Sobre Nós</a></li>
                        <hr />
                        <li><a href="#">Serviço</a></li>
                        <hr />
                        <li><a href="#">Depoimentos</a></li>
                        <hr />
                        <li><a href="#">Contato</a></li>
                        <hr />
                    </ul>

                    <button><a href="#" class="btn-menu">CONTATE-NOS</a></button>
                </div>

                <button id="hamburguer" onClick={Hamburguer}>
                    <div id="hamburguer-1"></div>
                    <div id="hamburguer-2"></div>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;