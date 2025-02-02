import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <form className='form-container'>
            <div className="form">
                <h1 className='font-bold'>Welcome back</h1>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter email" autoComplete='false' required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" autoComplete='false' placeholder="Enter password" required />
                </div>
                <div className="form-group">
                    <label>Doesn't have an account ?<Link to='/signup'> Create now</Link></label>
                </div>
                <button type="submit" className="btn">Login</button>
            </div>
        </form>
    );
};

export default Login;