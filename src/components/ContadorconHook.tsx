import React from 'react'
import { useCounter } from '../hooks/useCounter';

const ContadorconHook = () => {

    const { valor, acumular } = useCounter(100);

    return (
        <>
            <h3>Contador con hook <small>{valor}</small></h3>
            <button type="button"
                className="btn btn-primary"
                onClick={()=> acumular(1)}>
                    +1
            </button>
            <button type="button"
                className="btn btn-primary"
                onClick={()=> acumular(-1)}>
                    -1
            </button>
        </>
    )
}

export default ContadorconHook
