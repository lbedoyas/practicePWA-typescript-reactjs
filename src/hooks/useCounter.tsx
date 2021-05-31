import { useState } from "react"

export const useCounter = (initialNumber: number) => {
    const [valor, setValor] = useState(initialNumber);
    const acumular = (numero: number) => {
        setValor(valor + numero);
    }

    return {
        valor,
        acumular
    }
}