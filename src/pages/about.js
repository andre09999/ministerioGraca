import React from "react";
import "./about.css";
import voluntarios from '../Images/voluntarios.jpg'

function About() {
  return (
    <main className="about">
      <div className="overlay">
        {
          
        }
        <h1 className="colorabout">Descubra mais sobre o Ministério Graça</h1>

        <p className="colorabout">
          O Ministério Graça surgiu a partir de uma chamada divina, nos
          convidando a adotar um modelo de voluntariado.
        </p>
        <p className="colorabout">
          Nossa missão é alcançar toda a família, e para isso, organizamos
          nossas atividades focando em crianças, adolescentes, jovens, adultos e
          idosos, reconhecendo a importância de cuidar e formar cada fase do
          desenvolvimento humano à luz de Cristo. Como parte do processo de
          resgatar indivíduos do reino das trevas para o Reino da Luz, o
          Ministério Graça tem se fortalecido no evangelismo profético, que
          abrange: salvação, libertação, cura, voluntariado e restauração do ser
          humano. Com esse mesmo propósito, também realizamos obras sociais,
          como o projeto "Graça nas Ruas".
        </p>
      </div>
      <img alt="voluntarios" className="vol" src={voluntarios} />
    </main>
  );
}

export default About;
