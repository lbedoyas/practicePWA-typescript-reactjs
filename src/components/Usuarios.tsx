import React from 'react'
import { Usuario } from '../intefaces/IreqRes';
import useUsuarios from '../hooks/useUsuarios';

const Usuarios = () => {

    const {usuarios, paginaSiguiente, paginaAnterior} = useUsuarios();

    const renderItem = ({id, first_name, avatar, email}: Usuario) => {
        return (
            <tr key={id}>
                <td>
                    <img src={avatar}
                    alt={first_name}
                    style={{
                        width: 35,
                        borderRadius: 100
                    }}/>;
                </td>
                <td>{first_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuario: </h3>   
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                        //Es igual al de arriba
                        // usuarios.map(usuario => renderItem(usuario))
                        
                    }
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={paginaAnterior}>
                Anteriores
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={paginaSiguiente}>
                Siguiente
            </button>
        </>
    )
}

export default Usuarios
