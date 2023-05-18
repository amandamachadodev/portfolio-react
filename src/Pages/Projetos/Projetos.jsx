import React, { useState } from "react";
import { Galaxy } from "../../Components/Background/Galaxy";
import { Loader } from '../../Components/Loader/Loader.jsx';
import { Header } from '../../Components/Header/Header.jsx';
import { ProjetoCards } from "../../Components/ProjetoCards/ProjetoCards";
import '../Projetos/Projetos.css';

function Projetos() {
    const [loader, setLoader] = useState(true);

    setTimeout(() => {
        setLoader(false);
      }, 2000);


    return (
        <div className="container">
            <Header />
            <Galaxy />
            {!loader && <ProjetoCards /> } 
            {loader && < Loader />}
        </div>
    )
}

export default Projetos;