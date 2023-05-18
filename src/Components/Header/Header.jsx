import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom';


export function Header() {
  const [sobre, setSobre] = useState(false);
  const [projetos, setProjetos] = useState(false);

  useEffect(() => {
    <Redirect to="/" />
  }, [sobre])

  useEffect(() => {
    <Redirect to="/projetos" />
  }, [projetos])

  return(
    <div className="header">
      <button onClick={() => {
        setSobre(true);
      }}>Sobre mim</button>
      <button onClick={() => {
        setProjetos(true);
      }}>Meus projetos</button>
      {sobre && <Redirect to="/" />}
      {projetos && <Redirect to="/projetos" />}
    </div>
  );
}