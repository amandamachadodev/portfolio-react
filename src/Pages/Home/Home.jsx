import React,  { useState }  from 'react';
import { Galaxy } from '../../Components/Background/Galaxy.jsx';
import "../Home/Home.css";
import { Loader } from '../../Components/Loader/Loader.jsx';
import { Header } from '../../Components/Header/Header.jsx';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Home() {
    const [loader, setLoader] = useState(true);

    const sobreMim = `Olá, meu nome é Amanda. Sou apaixonada por tecnologia desde os 10 anos, idade em que eu ganhei meu primeiro computador.
    Atualmente estou no ultimo semestre da faculdade de Análise e Desenvolvimento de Sistemas (uihuuuuu!). Paralelo a faculdade fiz um curso tecnico
    de 'Desenvolvimento web full stack + ciência da computação' na Trybe para me especializar na área de Desenvolvimento de Software. Amo css + react.js e modelar dados + sql.
    Nas horas vagas eu gosto de assitir séries, cantar, tocar teclado, jogar xadrez e games variados!`


    setTimeout(() => {
        setLoader(false);
      }, 2000);

    return(
        <div className="container">
            <Header />
            <Galaxy />

            {!loader && (
                <div className="sobre">
                    <h1>Hello Word!</h1>
                    <p>{sobreMim}</p>
                    <div className='icons'>
                        <a clasName="icon" href="https://github.com/mandioquynha" target="_blank" rel="noreferrer"><FaGithubSquare
                            size={35} color="rgb(255, 254, 184)"
                            onMouseOver={({target}) => {
                                target.style.transition="1s";
                                target.style.color="rgba(255, 150, 150, 0.493)"}}
                            onMouseOut={({target})=>{
                                target.style.color="rgb(255, 254, 184)"}}
                        />
                        </a>
                        <a clasName="icon" href="https://www.linkedin.com/in/amanda-garcia-machado/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={35} color="rgb(255, 254, 184)"
                            onMouseOver={({target}) => {
                                target.style.transition="1s";
                                target.style.color="rgba(255, 150, 150, 0.493)"}}
                            onMouseOut={({target})=>{
                                target.style.color="rgb(255, 254, 184)"}}
                        />
                        </a>
                        {/* <FaEnvelope size={42}/> */}
                    </div>
                </div>) } 
           {loader && < Loader />}
        </div>
    );
}

export default Home;