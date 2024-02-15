import React from "react";
import { Galaxy } from "../../Components/Background/Galaxy";
import { Header } from '../../Components/Header/Header.jsx';
import { ProjetoCards } from "../../Components/ProjetoCards/ProjetoCards";
import '../Projetos/Projetos.css';

function Projetos() {

    return (
        <div className="container">
            <Header />
            <Galaxy />
            <ProjetoCards />
        </div>
    )
}

export default Projetos;