import { useState } from "react"

const Formulario = ({ setAlert }) => {

    const [formularioData, setFormularioData] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const validarFormulario = (e) => {
        e.preventDefault();

        const { nombre, email, password, confirmPassword } = formularioData;
        const validarInput = !nombre || !email || !password || !confirmPassword;
        const validarPassword = password !== confirmPassword;

        validarInput
            ?
            setAlert({
                error: true,
                msg: 'Complete los campos',
                color: 'danger',
            })
            : setAlert({
                error: false,
                msg: 'Cuenta creada exitosamente',
                color: 'succes',
            });

        validarPassword ?
            setAlert({
                error: true,
                msg: 'Las password no son iguales',
                color: 'danger'
            }) : '';

        setFormularioData({
            nombre: '',
            email: '',
            password: '',
            confirmPassword: '',

        });
    }

    const handlerChange = (e) => {
        setFormularioData({
            ...formularioData, [e.target.name]: e.target.value
        })
    }



    return (
        <>

            <form
                className="formulario"
                onSubmit={validarFormulario}
            >
                <div className="form group mb-3">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="nombre"
                        onChange={handlerChange}
                        value={formularioData.nombre}
                    />
                </div>
                <div className="form group mb-3">
                    <input
                        type="mail"
                        name="email"
                        className="form-control"
                        placeholder="tuemail@ejemplo.com"
                        onChange={handlerChange}
                        value={formularioData.email}
                    />
                </div>
                <div className="form group mb-3">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Contraseña"
                        onChange={handlerChange}
                        value={formularioData.password}
                    />
                </div>
                <div className="form group mb-3">
                    <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Confirma tu contraseña"
                        onChange={handlerChange}
                        value={formularioData.confirmPassword}
                    />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit"
                        className="btn btn-success"
                    >
                        Registrarse
                    </button>
                </div>

            </form>






        </>
    )
}

export default Formulario