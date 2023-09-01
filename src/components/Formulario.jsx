

const Formulario = () => {
    return (
        <>

            <form
                className="formulario"
                onSubmit=""
            >
                <div className="form group mb-3">
                    <input
                     type="text" 
                     name="nombre"
                     className="form-control"
                     placeholder="nombre"
                     onChange=""
                     value=""
                     />
                </div>
                <div className="form group mb-3">
                    <input
                     type="mail" 
                     name="email"
                     className="form-control"
                     placeholder="tuemail@ejemplo.com"
                     onChange=""
                     value=""
                     />
                </div>
                <div className="form group mb-3">
                    <input
                     type="password" 
                     name="password"
                     className="form-control"
                     placeholder="Contraseña"
                     onChange=""
                     value=""
                     />
                </div>
                <div className="form group mb-3">
                    <input
                     type="password" 
                     name="confirmPassword"
                     className="form-control"
                     placeholder="Confirma tu contraseña"
                     onChange=""
                     value=""
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