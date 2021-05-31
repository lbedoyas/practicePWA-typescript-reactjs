import React from 'react';

// interface Persona {
//     nombre: string,
//     edad: number,
//     direccion: {
//         pais: string,
//         Apto: number
//     }
// }

interface Persona {
    nombre: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    pais: string,
    Apto: number
}

const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Luis',
        edad: 35,
        direccion: {
            Apto: 402,
            pais: 'Colombia'
        }
    }

    persona.nombre = 'ejemplo nombre'

    return (
        <>
            <h1>Objetos Literales</h1>
            <hr/>
            <code>
                <pre>
                    { JSON.stringify(persona, null , 2) }
                </pre>
            </code>
            
        </>
    )
}

export default ObjetosLiterales
