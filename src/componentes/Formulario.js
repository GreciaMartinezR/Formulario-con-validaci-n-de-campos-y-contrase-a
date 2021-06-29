import React from 'react'
import { Form, Input } from 'reactstrap';
import App from '../App';

const Formulario = ({myForm, setMyForm}) => {
    const mifuncion = (e) => {
        const myFieldName= e.target.name
        const myFieldsValue= e.target.value
        setMyForm ({
            ...myForm,
            [myFieldName]:myFieldsValue
        })
}
    const handleSendForm = () => {

    if (myForm.password !== myForm.confirmPassword){
        alert("Constraseñas no coinciden")
    }
    else {
        alert("Formulario enviado")
        setMyForm ({
            name:"",
            lastName: "",
            email:"",
            password:"",
            confirmPassword:"",
          })
        
    }
    
}

    return (
        <div>
            <form>
                <p><label>Name</label>
                <input type="text" name="name" value={myForm.name} onChange={ (e) => mifuncion(e)} required minLength={2}/></p>

                <p><label>Last Name</label>
                <input type="text" name="lastName" value={myForm.lastName} onChange={ (e) => mifuncion(e)} required minLength={2}/></p>

                <p><label>Email</label>
                <input type="text" name="email" value={myForm.email} onChange={ (e) => mifuncion(e)} required minLength={5}/></p>

                <p><label>Password</label>
                <input type="text" name="password" value={myForm.password} onChange={ (e) => mifuncion(e)}/></p>

                <p><label>Confirmar Password</label>
                <input type="text" name="confirmPassword" value={myForm.confirmPassword} onChange={ (e) => mifuncion(e)}/></p>

                <p><button type="button" onClick={ () => handleSendForm ()}>Enviar </button></p>
            </form>
        </div>
    )
}

export default Formulario