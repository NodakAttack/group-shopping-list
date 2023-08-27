import './Toggle.css';

function Toggle({ item, toggleItem }) {
    return (
        <div>
            {item.purchased ? (
                <p className="purchased-text">Purchased</p>
            ) : (
                <button className="purchase-button" onClick={() => toggleItem(item.id)}>Purchase</button>
            )}
        </div>
    );
}

export default Toggle;