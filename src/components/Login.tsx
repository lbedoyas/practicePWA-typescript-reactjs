import React, {useReducer, useEffect} from 'react';

interface AuthState {
    validando: boolean;
    token: string | null;
    userName: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    userName: '',
    nombre: ''
}

type LoginPayload = {
    userName: string;
    nombre: string;
}

type AuthAction = 
    | { type: 'logout' } 
    | {type: 'login',payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    console.log(action);
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                userName: ''
            }
        case 'login':
            const {nombre, userName} = action.payload
            return {
                validando: false,
                token: 'abc123',
                nombre,
                userName
            }
        default:
            return state;
    }
}

const Login = () => {
    const [{validando, token, nombre} , dispatch] = useReducer(authReducer, initialState);
    useEffect(()=> {
        setTimeout(() => {
            dispatch({type: 'logout'})
        }, 3000);
    },[]);

    const handleLogin = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'luis',
                userName: 'lucho'
            }})
    }

    const handleLogOut = () => {
        dispatch({
            type: 'logout'})
    }

    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info" >
                    Validando
                </div>
            </>
        )
    }
    return (
        <>
            <h3>Login</h3>
            {(token)
            ?
                <div className="alert alert-success">
                    autenticado { nombre } 
                </div>
            :
                <div className="alert alert-info">
                    No autenticado
                </div>
            }
            {
                (token)
                ?
                <button className="btn btn-danger"
                onClick={handleLogOut}> 
                Log Out
                </button>
                :
                <button className="btn btn-primary"
                onClick={handleLogin}> 
                Login
            </button>
            }
        </>
    )
}

export default Login
