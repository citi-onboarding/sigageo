import { useState, useEffect } from "react";
import axios from "axios";
import { Room, Email, Instagram, Facebook } from "@material-ui/icons";

import './Contato.css';

function Contato(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [conheceu, setConheceu] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    const [contato, setContato] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/contatos').then(result => {
          setContato(result.data);
        });
    }, []);

    return(
        <div className="contato-sec">
            <div className="fale-conosco">
                <div className="contato">
                    <h2>FALE CONOSCO</h2>
                    <form>
                        <input 
                            type="text" 
                            name="nome" 
                            id="nome" 
                            value = {nome} 
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="NOME"
                        />
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value = {email} 
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="EMAIL"
                        />
                        <input 
                            type="tel" 
                            name="telefone" 
                            id="telefone"
                            value = {telefone} 
                            onChange={(e) => setTelefone(e.target.value)}
                            placeholder="TELEFONE"
                            />
                        <select 
                            name="conheceu" 
                            id="conheceu"
                            value = {conheceu} 
                            onChange={(e) => setConheceu(e.target.value)}
                        >
                            <option disabled defaultValue value="">COMO NOS CONHECEU</option>
                            <option value="indicação">INDICAÇÃO</option>
                            <option value="google">GOOGLE</option>
                            <option value="linkedin">LINKEDIN</option>
                            <option value="instagram">INSTAGRAM</option>
                            <option value="facebook">FACEBOOK</option>
                        </select>
                        <select 
                            name="assunto" 
                            id="assunto"
                            value = {assunto} 
                            onChange={(e) => setAssunto(e.target.value)}
                        >
                            <option disabled defaultValue value="">ASSUNTO</option>
                            <option value="projeto">PROJETO</option>
                            <option value="parceria">PARCERIA</option>
                            <option value="outro">OUTRO</option>
                        </select>
                        <textarea 
                            name="mensagem" 
                            id="mensagem" 
                            value = {mensagem} 
                            onChange={(e) => setMensagem(e.target.value)}
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
                        <span>{contato[0]?.endereco}</span>
                        <Room className='info-icon pin-icon'/>
                    </div>
                    <div className="separador"></div>
                    <div className="email-info info">
                        <span>{contato[0]?.email}</span>
                        <Email className='info-icon mail-icon'/>
                    </div>
                    <div className="instagram-info info">
                        <span>{contato[0]?.instagram}</span>
                        <Instagram className='info-icon ig-icon'/>
                    </div>
                    <div className="facebook-info info">
                        <span>{contato[0]?.facebook}</span>
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
                <div className="logo"></div>
            </div>
        </div>
    );
}

export default Contato;