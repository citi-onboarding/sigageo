import { useState, useEffect } from "react";
import axios from "axios";
import { Room, Email, Instagram, Facebook } from "@material-ui/icons";
import logo from "./assets/logo.png";

import './Contato.css';

function Contato(){

    const [campos, setCampos] = useState({
        nome: '',
        email: '',
        telefone: '',
        conheceu: '',
        assunto: '',
        mensagem: '',
    });

    const updateField = e => {
        setCampos({
            ...campos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (event) => {
        try {
          event.preventDefault();
    
          await axios.post('/send', campos);
    
         alert('Email enviado com sucesso!');
        } catch (err) {
         alert(err?.response || err);
        }
      };

    const [contato, setContato] = useState([]);

    useEffect(() => {
        axios.get('/api/contatos').then(result => {
          setContato(result.data);
        });
    }, []);

    return(
        <div className="contato-sec" id="contato">
            <div className="fale-conosco">
                <div className="contato">
                    <h2>FALE CONOSCO</h2>
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <input 
                            required
                            type="text" 
                            name="nome" 
                            id="nome" 
                            value = {campos.nome} 
                            onChange={updateField}
                            placeholder="NOME"
                        />
                        <input 
                            required
                            type="email" 
                            name="email" 
                            id="email" 
                            value = {campos.email} 
                            onChange={updateField}
                            placeholder="EMAIL"
                        />
                        <input 
                            required
                            type="tel" 
                            name="telefone" 
                            id="telefone"
                            value = {campos.telefone} 
                            onChange={updateField}
                            placeholder="TELEFONE"
                            />
                        <select 
                            required
                            name="conheceu" 
                            id="conheceu"
                            value = {campos.conheceu} 
                            onChange={updateField}
                        >
                            <option disabled defaultValue value="">COMO NOS CONHECEU</option>
                            <option value="indicação">INDICAÇÃO</option>
                            <option value="google">GOOGLE</option>
                            <option value="linkedin">LINKEDIN</option>
                            <option value="instagram">INSTAGRAM</option>
                            <option value="facebook">FACEBOOK</option>
                        </select>
                        <select 
                            required
                            name="assunto" 
                            id="assunto"
                            value = {campos.assunto} 
                            onChange={updateField}
                        >
                            <option disabled defaultValue value="">ASSUNTO</option>
                            <option value="projeto">PROJETO</option>
                            <option value="parceria">PARCERIA</option>
                            <option value="outro">OUTRO</option>
                        </select>
                        <textarea 
                            required
                            name="mensagem" 
                            id="mensagem" 
                            value = {campos.mensagem} 
                            onChange={updateField}
                            placeholder="MENSAGEM"
                        />
                        <input type="submit" value="ENVIAR"/>
                    </form>
                </div>
            </div>
            <div className="infos">
                <h2>ENTRE EM CONTATO CONOSCO</h2>
                <div className="social">
                    <div className="separador"></div>
                    <div className="endereco-info info">
                        <p>{contato[0]?.endereco}</p>
                        <Room className='info-icon pin-icon'/>
                    </div>
                    <div className="separador"></div>
                    <div className="email-info info">
                        <p>{contato[0]?.email}</p>
                        <Email className='info-icon mail-icon'/>
                    </div>
                    <div className="instagram-info info">
                        <p>{contato[0]?.instagram}</p>
                        <Instagram className='info-icon ig-icon'/>
                    </div>
                    <div className="facebook-info info">
                        <p>{contato[0]?.facebook}</p>
                        <Facebook className='info-icon fb-icon'/>
                    </div>
                    <div className="social-mobile">
                        <a href={`https://www.instagram.com/${contato[0]?.instagram}`}>
                            <Instagram className='mobile-icon'/>
                        </a>
                        <a href={`https://www.${contato[0]?.facebook}`}>
                            <Facebook className='mobile-icon'/>
                        </a>
                    </div>
                </div>
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div id="enfeite"></div>
        </div>
    );
}

export default Contato;