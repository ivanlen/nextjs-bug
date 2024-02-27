// pages/addToken.js
import { useState } from 'react';

const AddTokenPage = () => {
  const [tokenId, setTokenId] = useState('');
  const [tokenName, setTokenName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/addToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tokenId, tokenName }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Token added successfully!');
      setTokenId('');
      setTokenName('');
    } catch (error) {
      console.error('Error adding token:', error);
    }
  };

  return (
    <div>
      <h1>Add Token</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Token ID:
          <input type="text" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />
        </label>
        <br />
        <label>
          Token Name:
          <input type="text" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Token</button>
      </form>
    </div>
  );
};

export default AddTokenPage;
