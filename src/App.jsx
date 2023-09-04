import './App.css'
import './login.css'
import Listado from './components/Listado';
import { BaseColaboradores } from './components/db'
import { useState } from 'react';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';

function App() {

  const [data, setData] = useState(BaseColaboradores)
  const [dataFilter, setDataFilter] = useState(data)

  const [alert, setAlert] = useState({
    error: false,
    msg: '',
    color: '',
  });

  return (
    <>
      <Buscador data={data} datafilter={setDataFilter} />
      <Listado
        data={data}
        setData={setData}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter} />
      <Formulario
        data={data}
        setDatax={setData}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter} />

    </>
  )
}
export default App;