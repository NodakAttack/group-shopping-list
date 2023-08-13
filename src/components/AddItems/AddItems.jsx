import React, { useState } from 'react';
import './AddItems.css';
import axios from 'axios';

function AddItems() {
    let [itemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState('');
    let [itemUnit, setItemUnit] = useState('');

    const addItems = (evt) => {
        evt.preventDefault();
        console.log(itemName, itemQuantity, itemUnit);
    axios
        .post('/items', {
            name:itemName,
            quantity:itemQuantity,
            unit:itemUnit,
        })
        .then((response) => {
            console.log(response);
            setItemName('')
            setItemQuantity('')
            setItemUnit('')
        })
        .catch((error) => {
            console.log(error);
        })

    }


    
    return (
        <section>{itemName} of {itemQuantity} {itemUnit}
            <form onSubmit={addItems}> 
                <label htmlFor='name-input'>Name:</label>
                <input id='name-input' value={itemName} onChange={evt => setItemName(evt.target.value)} /> <br/>
                <label htmlFor='quantity-input'>Quantity:</label>
                <input id='quantity-input' value={itemQuantity} onChange={evt => setItemQuantity(evt.target.value)} />
                <label htmlFor='unit-input'>Unit:</label>
                <input id='unit-input' value={itemUnit} onChange={evt => setItemUnit(evt.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </section>
    )
}

export default AddItems;