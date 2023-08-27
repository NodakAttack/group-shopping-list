function Clear({ clearItems }) {
    const handleClearClick = () => {
        const userConfirmed = window.confirm('Are you sure you want to clear all items?');

        if (userConfirmed) {
            clearItems(); // Call the clearItems function if user confirms
        }
    };

    return (
        <button onClick={handleClearClick}>Clear</button>
    );
}

export default Clear;