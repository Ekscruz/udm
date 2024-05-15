import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminLogin.css';
import axios from 'axios'


function AdminLogin (){

    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState ('')
    const [errorMessage, setErrorMessage] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/adminlogin', {username, password})
            .then (res => {
                // Handle successful login
                console.log(res);
                setErrorMessage('');
            })
            .catch(err => {
                // Handle login error
                console.log(err);
                setErrorMessage('Invalid username or password.');
            });
    }

    return (
        <div className='adminlogin-page'>
            <header className='min-vh-100 d-flex align-items-center'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <div className='card p-4'>
                                <h2 className='text-center mb-4'>Admin Login</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label htmlFor="username" className='form-label'>Username</label>
                                        <input type="username" placeholder="Enter username" className='form-control'
                                            onChange={e=> setUsername(e.target.value)} required />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor="password" className='form-label'>Password</label>
                                        <input type="password" placeholder="Enter password" className='form-control'
                                            onChange={e=> setPassword(e.target.value)} required />
                                    </div>
                                    {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
                                    <button className='btn btn-success w-100'> Login </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default AdminLogin; 
