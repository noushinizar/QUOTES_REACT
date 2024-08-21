import React, { useState } from 'react';
import InitialPage from './category_selector';
import CategoryPage from './quotegenerator';
import quotes from './json/quotes.json'; 
import './style.css'

function App() {
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = [...new Set(quotes.map((quote) => quote.category))];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const handleBack = () => {
        setSelectedCategory('');
    };

    return (
        <div className='main'>
          <div>
            {selectedCategory ? (
                <CategoryPage
                    category={selectedCategory}
                    quotes={quotes}
                    onBack={handleBack}
                />
            ) : (
                <InitialPage
                    categories={categories}
                    onCategorySelect={handleCategorySelect}
                />
            )}
            </div>
        </div>
    );
}

export default App;