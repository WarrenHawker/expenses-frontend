/* eslint-disable react/prop-types */
import { formatDate } from '../../functions/formatDate';
import { useEffect } from 'react';

function Grid({ expenses, removeExpense }) {
  useEffect(() => {
    import('./Grid.css'); //grid.css file is only loaded on pages that uses the component
  }, []);

  const deleteExpense = async (id) => {
    await fetch(
      `https://expenses-api-production-7770.up.railway.app/api/v1/expense/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    removeExpense(id);
  };

  return (
    <div className="expenses-grid">
      {expenses.map((expense, index) => (
        <div key={index} className="expense-item">
          <strong>Description:</strong> {expense.description}
          <br />
          <strong>Category:</strong> {expense.category}
          <br />
          <strong>Amount:</strong> ${expense.amount}
          <br />
          <strong>Date:</strong> {formatDate(expense.date)}
          <br />
          <button
            className="btn-red"
            onClick={() => deleteExpense(expense._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Grid;
