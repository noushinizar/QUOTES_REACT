import React from 'react';

function InitialPage({ categories, onCategorySelect }) {
    return (
        <div className='box'>
            <h1>welcome to quote's world</h1>
            <select  className='dropdown' onChange={(e) => onCategorySelect(e.target.value)}>
                <option value="">Select a category</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default InitialPage;