import { useEffect, useState } from 'react';

const Quote = () => {
  const baseURL = 'https://api.api-ninjas.com/v1/quotes';
  const [quotes, setQuote] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch(`${baseURL}?limit=4&category=success`, {
        limit: 4,
        headers: {
          'X-Api-Key': 'XVTYDqKegKHVDqR0pHEeSQ==MnYjSlly2QbA1h0u',
        },
      })
        .then((result) => {
          setLoading(false);
          return result.json();
        })
        .then((data) => setQuote(data));
    } catch (e) {
      setError('Failed fetching data from the API');
      setLoading(false);
    }
  }, []); // TODO
  return (
    <div className="quotes">
      {error && <span>{error}</span>}
      {
        quotes.map((quote) => (
          <div className="quoteContainer" key={quote}>
            <p className="quote">{quote.quote}</p>
            <small className="author">{quote.author}</small>
          </div>
        ))
        }
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Quote;
