import { useState } from "react";

function Form ({addItems}) {
    let [itemName, setItemName] = useState('');
    let [itemQuantity, setItemQuantity] = useState('');
    let [itemUnit, setItemUnit] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name: itemName,
            quantity: itemQuantity,
            unit: itemUnit
        }

        // checks for number as well as name input
        // adds newItem
        if (!isNaN(itemQuantity)) {
            if (itemName) {
                addItems(newItem);
            } else {
                alert('Needs a name');
            }
        } else {
            alert('Not a number');
        }
        

        // clear inputs
        setItemName('')
        setItemQuantity('')
        setItemUnit('')
    }

    return (
    <section>{itemName} of {itemQuantity} {itemUnit}
        <form onSubmit={handleSubmit}> 
            <label htmlFor='name-input'>Name:</label>
            <input id='name-input' value={itemName} onChange={evt => setItemName(evt.target.value)} /> <br/>
            <label htmlFor='quantity-input'>Quantity:</label>
            <input id='quantity-input' value={itemQuantity} onChange={evt => setItemQuantity(evt.target.value)} />
            <label htmlFor='unit-input'>Unit:</label>
            <input id='unit-input' value={itemUnit} onChange={evt => setItemUnit(evt.target.value)} />
            <button type='submit'>Add</button>
        </form>
    </section>)
};

export default Form;