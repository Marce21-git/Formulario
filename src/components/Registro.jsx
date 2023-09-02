import SocialButton from "./SocialButton"

import { useState } from 'react';
import Formulario from './Formulario';
import Alert from './Alert';

function Registro() {
  const [alert, setAlert] = useState({
    error: false,
    msg: '',
    color: '',
  });

  return (
    <>
      <div id="contenedor">
        <div id="central">
          <div id="login">
            <div className="titulo">
              Crea tu cuenta
            </div>
            <SocialButton
              facebook="fa-brands fa-facebook fa-fade"
              github="fa-brands fa-github fa-fade"
              linkedin="fa-brands fa-linkedin-in fa-fade"
            />
            <Formulario setAlert={setAlert}></Formulario>
            {alert.msg && <Alert color={alert.color}  messagge={alert.msg} />}
          </div>
        </div>
      </div>

    </>
  )
}
export default Registro;