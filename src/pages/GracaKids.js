import React from "react";
import jesus from "../Images/kids1.webp";
import "./GracaKids.css";
import { Link } from "react-router-dom";

function GracaKids() {
  return (
    <div className="pagKids">
      <img className="fotokids" src={jesus} alt=" jesus com as crianças" />

      <h1 className="color">Graça Kids</h1>
      <p className="color">
        O Ministério Graça apresenta o Graça Kids, um espaço dedicado à
        evangelização, discipulado e pastoreio das crianças de 1 a 12 anos da
        nossa igreja.
        <br /> Nossa missão é ensinar as verdades bíblicas à nova geração,
        promovendo um relacionamento crescente com Deus, moldando o caráter de
        Cristo em cada criança e auxiliando no desenvolvimento de suas
        habilidades e dons.
        <br /> Queremos que vivam em comunhão com a igreja, servindo e
        glorificando a Deus com suas vidas.
      </p>
      <p className="color">
        Com a visão de formar uma geração comprometida com o evangelho, o Graça
        Kids ensina os princípios de Deus de maneira contextualizada, criativa e
        prática.
        <br /> Nosso objetivo é fazer com que as crianças cresçam amando e
        obedecendo ao Senhor, contribuindo assim para o propósito da igreja:
        compartilhar as boas novas e conectar as pessoas a Jesus.
      </p>
      <Link
        to="https://www.instagram.com/ministeriogracago/"
        className="color"
        target="_blank"
      >
        Conheça mais sobre o ministério em nosso perfil do Instagram <br />{" "}
        @ministeriogracago
      </Link>
      <hr class="custom-hr" />
    </div>
  );
}

export default GracaKids;
