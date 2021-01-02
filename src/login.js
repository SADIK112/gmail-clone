import React from 'react'
import './login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice'

function Login() {

    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                console.log('user', user)
                dispatch(
                    login({
                        displayName: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL
                    })
                )
            })
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="./gmail.png" alt="logo" />
                <Button onClick={signIn} variant="contained" color="primary">Login</Button>
            </div>
        </div>
    )
}

export default Login
