import React, { useState , useEffect} from 'react';
import './GetItems.css';
import axios from 'axios';

function GetItems() {
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

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <div>
            {itemList.map(item => (
                <div key={item.name} className="item-container">
                    <div className="item-info">
                        <p>{item.name}</p>
                        <p>
                            {item.quantity} {item.unit}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default GetItems;