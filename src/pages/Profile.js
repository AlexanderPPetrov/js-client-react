import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import {editUser} from '../redux/actions';


const RegisterForm = () => {

    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentUser);
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const dispatchEditUser = () => {
        dispatch(editUser({
            _id: currentUser._id,
            firstName,
            lastName,
            password,
        }));
    }

    useEffect(() => {
        if(Object.keys(currentUser).length){
            setFirstName(currentUser.firstName);
            setLastName(currentUser.lastName);
        }
    }, [currentUser]);

    return  <div className="row">
        <div className="col-md-3">
                <form>
                <div className="form-group">
                    <label htmlFor="first-name">Име</label>
                    <input type="text"
                        className="form-control"
                        value={firstName} 
                        onChange={e => setFirstName(e.target.value)}
                        id="first-name" 
                        placeholder="Въведи име"/>
                </div>
                    <div className="form-group">
                    <label htmlFor="last-name">Фамилия</label>
                    <input 
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        className="form-control" 
                        id="last-name" 
                        placeholder="Въведи фамиия"/>
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
                <button type="button" className="btn btn-success" onClick={dispatchEditUser}>Запази</button>
            </form>
        </div>
</div>
    
    
    
}

export default RegisterForm;