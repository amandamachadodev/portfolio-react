import React, { useEffect, useState } from "react";

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        async function fetchData() {
        const response = await fetch('https://api.github.com/users/amandamachadodev/repos')
        const data = await response.json();
        setRepositories(data);
        };
        fetchData();
      }, []);

    return (
        <div>
        {repositories?.map((item) => (
            <div className="projetos" key={item.id}
             >
              <h3>{item.name.toUpperCase()}</h3>
              <p id="tec">{item.language}</p>
              <p>{item.description}</p>
              <span>
                Data criação:
                {Intl.DateTimeFormat('pt-BR')
                .format(new Date(item.created_at))}
              </span>
              <a className="botao" href={item.html_url} target="_blank" rel="noreferrer">Código</a>
            </div>
            
          ))}
        </div>
    )
}