import React from "react";

export default function ItemList({ items, onChange, onClick, group, disabled }) {

    const handleClick = ({ target }) => {
        const item = target.value;
        onChange(item);
    };

    return (
        <fieldset>
            <legend>{group}</legend>
            {items.map((item, index) => (
                <div key={index} >
                  <input 
                    id={item} 
                    name={group} 
                    value={item} 
                    onChange={handleClick} 
                    onClick={onClick}
                    type={"radio"}
                    disabled={disabled}
                    />
                  <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </fieldset>
    );
}