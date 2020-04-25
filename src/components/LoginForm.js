import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../redux/actions';

const RegisterForm = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatchLogin = () => {
        dispatch(login({
            email,
            password,
        }));
    }

    return <form>
        <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setEmail(e.target.value)}
                id="login-email"
                placeholder="Въведи email"/>
        </div>
        <div className="form-group">
            <label htmlFor="login-password">Парола</label>
            <input 
                type="password" 
                className="form-control" 
                onChange={e => setPassword(e.target.value)}
                id="login-password" 
                placeholder="Въведи парола"/>
        </div>
        <button type="button" className="btn btn-success" onClick={dispatchLogin}>Влез</button>
    </form>
}

export default RegisterForm;