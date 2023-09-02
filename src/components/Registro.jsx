import SocialButton from "./SocialButton"

import { useState } from 'react';
import Formulario from './Formulario';
import Alert from './Alert';

function Registro () {
  const [alert, setAlert]= useState({
    error:false,
    msg:'',
    color:'',
  });

  return (
    <div>Registro</div>
  )
}
export default Registro;