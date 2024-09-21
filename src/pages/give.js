import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import './give.css'

function Give() {
  const copy = async () =>{
    await navigator.clipboard.writeText('00020101021126490014br.gov.bcb.pix0127ministeriogracago@gmail.com5204000053039865802BR5921MINISTERIO GRACA LTDA6007GOIANIA62070503***63045140')
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