import React from 'react';
// import { Repositories } from '../../Components/Repositories/Repositories';
import { Galaxy } from '../Galaxy/Galaxy.jsx';
import "../Home/Home.css";
import { Loader } from '../../Components/Loader/Loader.jsx';

function Home() {
    return(
        <div className="container">
            <Galaxy />
            < Loader />
        </div>
    );
}

export default Home;