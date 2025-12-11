import React, { useState } from 'react';

const CalculatorInput = ({ onCalculate }) => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
        setError('');
    };

    const validateInput = (input) => {
        // Basic validation for empty input and invalid characters
        const regex = /^[\d\+\-\*\/\^()x\s]+$/;
        return regex.test(input);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateInput(input)) {
            onCalculate(input);
            setInput('');
        } else {
            setError('Invalid input. Please enter a valid mathematical expression.');
        }
    };

    return (
        <div className="calculator-input">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Enter function (e.g., x^2 + 3x - 5)"
                />
                <button type="submit">Calculate</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default CalculatorInput;