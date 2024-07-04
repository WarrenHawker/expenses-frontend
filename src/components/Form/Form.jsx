/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

function Form({ setShowForm, addExpense }) {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amountSpent, setAmountSpent] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    import('./Form.css');
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      description,
      category,
      amountSpent,
      date,
    };

    const res = await fetch(
      'https://expenses-api-production-7770.up.railway.app/api/v1/expense',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();

    addExpense(data);

    setDescription('');
    setAmountSpent('');
    setCategory('');
    setDate('');
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>Category</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <label>Amount</label>
      <input
        type="number"
        value={amountSpent}
        onChange={(e) => setAmountSpent(e.target.value)}
      />

      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button
        className="btn-red"
        type="button"
        onClick={() => {
          setShowForm(false);
        }}
      >
        Cancel
      </button>
      <button className="btn-green" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
