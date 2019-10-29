import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Tour from './Tour'

import './Admin.css'

export default function Admin(props) {

    const [ login, setLogin ] = useState({username: '', password: ''})
    const [ error, setError ] = useState('')

    const handleChange = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = (event) => {
        
        event.preventDefault()

        axios.post('/api/login', login)
            .then( response => {
                props.setUser(response.data)

                setLogin({
                    username: '',
                    password: ''
                })
                setError('')
            })
            .catch( error => {
                console.log(error.data)
                setError('Invalid Credentials')
            })

    }
    
    console.log(login)
    return (
        <>
            {
                props.user
                ?
                <div className="">
                    <Tour />
                </div> 
                :
                <form className="login">
                    <input type="text" name="username" value={ login.username } onChange={ handleChange } placeholder="Username" />
                    <input type="password" name="password" value={ login.password } onChange={ handleChange } placeholder="Password" />
                    <button onClick={ handleLogin }>Login</button>
                    <label>{error}</label>

                </form>
            }
        </>
    )
}
