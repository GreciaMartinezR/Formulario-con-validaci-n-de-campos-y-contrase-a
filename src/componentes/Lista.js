import React from 'react';

const Lista = ({myForm}) => {
    return (
        <div>
            <h1> Lista </h1>
            <p> Nombre: {myForm.name} </p>
            <p> Apellido: {myForm.lastName} </p>
            <p> Email: {myForm.email} </p>
            <p> Contraseña: {myForm.password} </p>
            <p> Confirmación de Contraseña: {myForm.confirmPassword} </p>
        </div>
    )
}

export default Lista