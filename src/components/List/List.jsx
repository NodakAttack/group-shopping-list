import Toggle from '../Toggle/Toggle.jsx';

import './List.css'

function List({ list, deleteItem, toggleItem }) {
    return (
        <div>
            {list.map(item => (
                <div key={item.id} className={`item-container ${item.purchased ? 'purchased' : ''}`}>
                        <p>{item.name}</p>
                        <p>
                            {item.quantity} {item.unit}
                        </p>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                        <Toggle item={item} toggleItem={toggleItem}/>
                </div>
            ))}
        </div>
    );
}

export default List;