import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addGame} from '../redux/actions';

const AddGame = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [price, setPrice] = useState(0);

    const dispatchAddGame = () => {
        dispatch(addGame({
            name,
            description,
            imageUrl,
            price
        }, '_id name description imageUrl price'));
    }

    return <form>
        <div className="form-group">
            <label htmlFor="game-name">Име</label>
            <input type="text"
                className="form-control"
                onChange={e => setName(e.target.value)}
                id="game-name" 
                placeholder="Въведи име на игра"/>
        </div>
            <div className="form-group">
            <label htmlFor="description">Описание</label>
            <input 
                type="text"
                onChange={e => setDescription(e.target.value)}
                className="form-control" 
                id="description" 
                placeholder="Въведи описание на игра"/>
        </div>
        <div className="form-group">
            <label htmlFor="image">URL на картинката</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setImageUrl(e.target.value)}
                id="image"
                placeholder="Въведи URL за картинка"/>
            <img src={imageUrl} className="d-block img-fluid" alt=""/>
        </div>
        <div className="form-group">
            <label htmlFor="price">Цена</label>
            <input 
                type="text" 
                className="form-control" 
                onChange={e => setPrice(Number(e.target.value))}
                id="price" 
                placeholder="Въведи цена"/>
        </div>
        <button type="button" className="btn btn-primary" onClick={dispatchAddGame}>Запази</button>
    </form>
}

export default AddGame;