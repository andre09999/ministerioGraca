import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import './give.css'

function Give() {
  const copy = async () =>{
    await navigator.clipboard.writeText('00020101021126450014br.gov.bcb.pix0123belle.galdino@gmail.com5204000053039865802BR5920IZABELLE V A GALDINO6007GOIANIA62070503***6304ABF1')
    toast.success('Copiado')
  }
  return (
    <div className="give">
       <ToastContainer />
      <button className="buttongiv" onClick={() => copy()}>Clique aqui para acessar o Pix copia e cola </button>
    </div>
  );
}

export default Give;