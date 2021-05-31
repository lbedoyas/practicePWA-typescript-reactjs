import React from 'react'

const TiposBasicos = () => {
    let masDeUnTipoDato: string | number = 'luis';
    masDeUnTipoDato = 231;
    const arreglo: (string|number)[] = [];
    arreglo.push(1);
    arreglo.push("hola");
    return (
        <>
            <h3>Tipos Basicos</h3>
            <br />
            <span>{masDeUnTipoDato}</span>
            <br />
            <span>{arreglo.join(',')}</span>
        </>
    )
}

export default TiposBasicos
