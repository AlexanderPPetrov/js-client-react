import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/actions';

const RegisterForm = () => {

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatchAddUser = () => {
        dispatch(addUser({
            firstName,
            lastName,
            email,
            userType: 'regular',
            password,
        }));
    }

    return <form>
        <div className="form-group">
            <label htmlFor="first-name">Име</label>
            <input type="text"
                className="form-control"
                onChange={e => setFirstName(e.target.value)}
                id="first-name" 
                placeholder="Въведи име"/>
        </div>
            <div className="form-group">
            <label htmlFor="last-name">Фамилия</label>
            <input 
                type="text"
                onChange={e => setLastName(e.target.value)}
                className="form-control" 
                id="last-name" 
                placeholder="Въведи фамиия"/>
        </div>
        <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setEmail(e.target.value)}
                id="register-email"
                placeholder="Въведи email"/>
        </div>
        <div className="form-group">
            <label htmlFor="register-password">Парола</label>
            <input 
                type="password" 
                className="form-control" 
                onChange={e => setPassword(e.target.value)}
                id="register-password" 
                placeholder="Въведи парола"/>
        </div>
        <button type="button" className="btn btn-success" onClick={dispatchAddUser}>Регистрирай се!</button>
    </form>
}

export default RegisterForm;