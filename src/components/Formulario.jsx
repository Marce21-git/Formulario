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
        const formatoEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
        const validarEmail = !formatoEmail.test(email)

        if (validarInput) {

            setAlert({
                error: true,
                msg: 'Complete los campos',
                color: 'danger',
            })
            return
        }
        else {
            setAlert({
                error: false,
                msg: 'Cuenta creada exitosamente',
                color: 'success',
            });
        }

        if (validarEmail) {
            setAlert({
                error: true,
                msg: 'email incorrecto',
                color: 'danger'
            })
            return
        }

        if (validarPassword) {
            setAlert({
                error: true,
                msg: 'Password incorrecta',
                color: 'danger'
            })
            return
        }

        setFormularioData({
            nombre: '',
            email: '',
            password: '',
            confirmPassword: '',

        });


        setTimeout(() => {
            setAlert({
                error: '',
                msg: '',
                color: '',
            })
        }, 5000);
    }

    const handlerChange = (e) => {
        setFormularioData({
            ...formularioData, [e.target.name]: e.target.value
        })
    }




    return (
        <>
            <form
                id="loginform"
                onSubmit={validarFormulario}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="nombre"
                    onChange={handlerChange}
                    value={formularioData.nombre} />

                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    onChange={handlerChange}
                    value={formularioData.email} />


                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={handlerChange}
                    value={formularioData.password} />

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="password"
                    onChange={handlerChange}
                    value={formularioData.confirmPassword} />

                <button
                    type="submit"
                    name="Ingresar">
                    Registrarse
                </button>
            </form>
        </>
    )
}

export default Formulario