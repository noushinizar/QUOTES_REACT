import React, { useState } from 'react';

function CategoryPage({ category, quotes, onBack }) {
    const [quote, setQuote] = useState({
        quote: quotes[0].quote,
        author: quotes[0].author
    });

    function generateQuote(){
        const filteredQuotes = quotes.filter((q) => q.category === category);
        const randomQuote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
        setQuote(randomQuote);
    };

    return (
        <div className='box1'> 
           <button className='back' onClick={onBack}>🡰</button>
           <div className='content'>
            <h1>{category} Quotes</h1>
            {quote && (
                <div>
                    <p className='quote'>"{quote.quote}"</p>
                    <p className='author'>- {quote.author}</p>  
                </div>
            )}
            <button className='btn' onClick={generateQuote}>⟲</button>
            </div>
        </div>
    );
}

export default CategoryPage;