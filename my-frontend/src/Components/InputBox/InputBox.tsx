import React, { useState } from 'react';
import "./InputBox.css"

interface InputBoxProps {
    label: string;
}

const InputBox: React.FC<InputBoxProps> = ( { label }) => {
    const [inputValue, setInputValue] = useState('');
    const hasInput = inputValue.length > 0;

    return (
        <div className="input-container">
            <label htmlFor="myInput" className={hasInput ? 'label active' : 'label'}>
                {label}
            </label>
            <input
                id="myInput"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="input-field"
                // placeholder={hasInput ? '' }
            />
        </div>
    );
};

export default InputBox;