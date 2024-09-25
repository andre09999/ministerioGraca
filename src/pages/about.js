import React from "react";
import "./about.css";
import voluntarios from '../Images/voluntarios.jpg'

function About() {
  return (
    <main className="about">
      <div className="overlay">
      
        <h1 className="colorabout1 titulos h11">Descubra mais sobre o Ministério Graça:</h1>

        <p className="colorabout1 titulos">
          A Graça surgiu a partir de uma chamada divina, nos
          convidando a adotar um modelo de voluntariado.
        </p>
        <p className="colorabout1 textoabout">
          Nossa missão é alcançar toda a família, e para isso, organizamos
          nossas atividades focando em crianças, adolescentes, jovens, adultos e
          idosos, reconhecendo a importância de cuidar e formar cada fase do
          desenvolvimento humano à luz de Cristo.<br/> Como parte do processo de
          resgatar indivíduos do reino das trevas para o Reino da Luz, o
          Ministério Graça tem se fortalecido no evangelismo profético, que
          abrange: salvação, libertação, cura, voluntariado e restauração do ser
          humano.<br/> Com esse mesmo propósito, também realizamos obras sociais,
          como o "Graça nas Ruas" e também contribuímos com a "Casa de Apoio Dona Iraídes", uma instituição filantrópica de atendimento a portadores de câncer localizado no Parque Amazônia em Goiânia.
        </p>
      </div>
      <img alt="voluntarios" className="vol" src={voluntarios} />
    </main>
  );
}

export default About;
