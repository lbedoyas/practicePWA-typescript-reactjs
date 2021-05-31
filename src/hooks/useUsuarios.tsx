import { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../API/reqRes';
import { IReqRes, Usuario } from '../intefaces/IreqRes';

const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1)
    useEffect(()=> {
        cargarUsuarios();
    }, []);
    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<IReqRes>('/users', {
            params: {
                page: paginaRef.current
            }
        });
        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        }else {
            paginaRef.current --;
            alert('no hay mas info')
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }
    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}

export default useUsuarios
