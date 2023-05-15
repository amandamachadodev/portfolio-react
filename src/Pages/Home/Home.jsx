import React,  { useEffect, useState }  from 'react';
import { Galaxy } from '../Galaxy/Galaxy.jsx';
import "../Home/Home.css";
import { Loader } from '../../Components/Loader/Loader.jsx';
import { Header } from '../../Components/Header/Header.jsx';

function Home() {
    const [loader, setLoader] = useState(true);

    const sobreMim = `Olá, meu nome é Amanda. Sou apaixonada por tecnologia desde os 10 anos, idade em que eu ganhei meu primeiro computador.
    Atualmente estou no ultimo semestre da faculdade de Análise e Desenvolvimento de Sistemas (uihuuuuu!). Paralelo a faculdade fiz um curso tecnico
    de 'Desenvolvimento web full stack + ciência da computação' na Trybe para me especializar na área de Desenvolvimento de Software. Amo css + react.js e modelar dados + sql.
    Nas horas vagas eu gosto de assitir séries, cantar, tocar teclado, jogar xadrez e games variados!`

    useEffect(() => {
    }, [loader])

    setTimeout(() => {
        setLoader(false);
      }, 3000);

    return(
        <div className="container">
            <Header />
            <Galaxy />
            {!loader && (<p className="sobre">{sobreMim}</p>) } 
           {loader && < Loader />}
        </div>
    );
}

export default Home;