

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
    <>
    <h1>hola</h1>
    <Formulario setAlert={setAlert}/>
    {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
    </>
  )
}
export default Registro;