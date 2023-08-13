import React, { useState , useEffect} from 'react';
import './Header.css';
import axios from 'axios';


function Header() {
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
        <>
        <header className="banner-header">
            <h1>My Shopping List</h1>
        </header>
            <div>
                {itemList.map(item =>
                    (<p key={item.name}>
                        {item.name}
                        {item.quantity} {item.unit}
                </p>
                ))}
            </div>
        </>
    );
}

export default Header;
