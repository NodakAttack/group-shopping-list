import React, { useState , useEffect} from 'react';
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
                {itemList.map(item =>
                    (<p key={item.name}>
                        {item.name}
                        {item.quantity} {item.unit}
                </p>
                ))}
            </div>
    );
}

export default GetItems;