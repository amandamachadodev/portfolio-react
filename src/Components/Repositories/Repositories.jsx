import { useEffect, useState } from "react";
import "./Repositories.css";

export function Repositories() {
    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/mandioquynha/repos")
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])
    return(
        <div className="Content">
                { repositories.map(repository => {
                    return (
                      <div className="Repositories" key={repository.name}>
                          <h4>{repository.name}</h4>
                          <p>{repository.description}</p>
                          <a href={repository.html_url} target="_blank" rel="noreferrer">Ver código</a>
                      </div>
                    )
                })}
        </div>
    )
}