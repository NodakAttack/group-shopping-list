import React, { useState , useEffect} from 'react';

import axios from 'axios';

import Header from '../Header/Header.jsx'
import Form from '../Form.jsx/Form.jsx';
import List from '../List/List.jsx';
import Clear from '../Clear/Clear.jsx';
import Reset from '../Reset/Reset.jsx';

import './App.css';


function App() {
    let [itemList, setItemList] = useState([]);

    const fetchItems = () => {
        axios
        .get('/items')
        .then((response) => {
          console.log(response.data);
          setItemList(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
      }

    const addItems = (newItem) => {
        console.log(newItem.name, newItem.quantity, newItem.unit);
    axios
        .post('/items', {
            name:newItem.name,
            quantity:newItem.quantity,
            unit:newItem.unit,
        })
        .then((response) => {
            console.log(response);
            fetchItems();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const deleteItem = (id) => {
        axios
        .delete(`/items/${id}`)
        .then((response) => {
            console.log(response);
            fetchItems();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const clearItems = () => {
        axios
        .post(`/items/clear`)
        .then((response) => {
            console.log(response);
            fetchItems();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const resetItems = () => {
        axios
        .post(`/items/reset`)
        .then((response) => {
            console.log(response);
            fetchItems();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const toggleItem = (id) => {
        axios
        .put(`/items/toggle/${id}`)
        .then((response) => {
          console.log(response);
          fetchItems();
        })
        .catch((error) => {
          console.log(error);
        })
      }

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <>
        <Header />
        <Clear clearItems={clearItems}/>
        <Reset resetItems={resetItems}/>
        <List list={itemList} deleteItem={deleteItem} toggleItem={toggleItem}/>
        <Form addItems={addItems} />
        </>
    );
}

export default App;
