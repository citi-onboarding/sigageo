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
                        <li><a href="/" onClick={Hamburguer}>Início</a></li>
                        <hr />
                        <li><a href="#sobre-nos" onClick={Hamburguer}>Sobre Nós</a></li>
                        <hr />
                        <li><a href="#servicos" onClick={Hamburguer}>Serviço</a></li>
                        <hr />
                        <li><a href="#depoimentos" onClick={Hamburguer}>Depoimentos</a></li>
                        <hr />
                        <li><a href="#contato" onClick={Hamburguer}>Contato</a></li>
                        <hr />
                    </ul>

                    <button><a href="/" class="btn-menu">CONTATE-NOS</a></button>
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