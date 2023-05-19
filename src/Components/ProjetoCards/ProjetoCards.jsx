import React, { useEffect, useState } from "react";
import '../ProjetoCards/ProjetoCards.css';
import starWars from '../../imagens/starwars.png';

export function ProjetoCards() {
    const [projetos, setProjetos] = useState([]);

    useEffect(() => {
        setProjetos([{
            id: 1,
            nome: 'Projeto StarWars',
            tecnologias: 'React.JS, CSS e JavaScript',
            descricao: `Neste foram implementados vários filtros de busca utilizando 
            hooks para gerenciar o ciclo de vida dos componentes e contexto api como gerenciador de estados. 
            A api externa (indisponível no momento) foi disponibilizada pela Trybe (escola de desenvolvimento web).`,
            imagem: starWars,
            repositorio: 'https://github.com/mandioquynha/project-starwars-planets-search/tree/main',
            link: 'https://project-starwars-planets-search-rho.vercel.app/'},
            {
            id: 2,
            nome: 'Projeto StarWars',
            tecnologias: 'React.JS, CSS e JavaScript',
            descricao: `Neste foram implementados vários filtros de busca utilizando 
            hooks para gerenciar o ciclo de vida dos componentes e contexto api como gerenciador de estados. 
            A api externa (indisponível no momento) foi disponibilizada pela Trybe (escola de desenvolvimento web).`,
            imagem: starWars,
            repositorio: 'https://github.com/mandioquynha/project-starwars-planets-search/tree/main',
            link: 'https://project-starwars-planets-search-rho.vercel.app/'
            },
            {
            id: 3,
            nome: 'Projeto StarWars',
            tecnologias: 'React.JS, CSS e JavaScript',
            descricao: `Neste foram implementados vários filtros de busca utilizando 
            hooks para gerenciar o ciclo de vida dos componentes e contexto api como gerenciador de estados. 
            A api externa (indisponível no momento) foi disponibilizada pela Trybe (escola de desenvolvimento web).`,
            imagem: starWars,
            repositorio: 'https://github.com/mandioquynha/project-starwars-planets-search/tree/main',
            link: 'https://project-starwars-planets-search-rho.vercel.app/'
            },
            {
            id: 4,
            nome: 'Projeto StarWars',
            tecnologias: 'React.JS, CSS e JavaScript',
            descricao: `Neste foram implementados vários filtros de busca utilizando 
            hooks para gerenciar o ciclo de vida dos componentes e contexto api como gerenciador de estados. 
            A api externa (indisponível no momento) foi disponibilizada pela Trybe (escola de desenvolvimento web).`,
            imagem: starWars,
            repositorio: 'https://github.com/mandioquynha/project-starwars-planets-search/tree/main',
            link: 'https://project-starwars-planets-search-rho.vercel.app/'
            }]);
    }, []);

    return (
        <div className="Content">
            <h1>Projetos</h1>
           { projetos.map(projeto => {
                    return (
                      <div className="projetos" key={projeto.id}>
                          <img src={projeto.imagem} alt="projeto star wars"/>
                          <h4>{projeto.nome}</h4>
                          <p id="tec">Tecnologias: <span>{projeto.tecnologias}</span></p>
                          <p>{projeto.descricao}</p>
                          <div className="botoes">
                          <a className="botao" href={projeto.repositorio} target="_blank" rel="noreferrer">Código</a>
                          <a className="botao" href={projeto.link} target="_blank" rel="noreferrer">Site</a>
                          </div>
                      </div>
                    )
                })}
        </div>
    )
}