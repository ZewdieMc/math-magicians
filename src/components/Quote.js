import { useEffect, useState } from 'react';

const Quote = () => {
  const baseURL = 'https://api.api-ninjas.com/v1/quotes';
  const [quotes, setQuote] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${baseURL}?limit=4&category=success`, {
      headers: {
        'X-Api-Key': 'XVTYDqKegKHVDqR0pHEeSQ==MnYjSlly2QbA1h0u',
      },
    })
      .then((result) => {
        setError('');
        return result.json();
      })
      .then((data) => setQuote(data))
      .catch((err) => { setError(err); });
  }, []);

  return (
    <div className="quotes">
      {error && (
      <span className="error">
        Error while fetching data...
      </span>
      )}
      {
        quotes.length
          ? quotes.map((quote) => (
            <div className="quoteContainer" key={quote.quote}>
              <p className="quote">{quote.quote}</p>
              <small className="author">{quote.author}</small>
            </div>
          ))
          : <div>Loading...</div>
        }
    </div>
  );
};

export default Quote;
