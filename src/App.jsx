import { useState, useEffect } from 'react';
import Grid from './components/Grid/Grid';
import Form from './components/Form/Form';

function App() {
  const [expenses, setExpenses] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const res = await fetch(
      'https://expenses-api-production-7770.up.railway.app/api/v1/expense'
    );
    const data = await res.json();
    setExpenses(data);
  };

  const addExpense = async (newExpense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });
  };

  const removeExpense = async (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id != id);
    });
  };

  if (!expenses) {
    return;
  }

  return (
    <>
      <h1>My Expenses</h1>
      <div className="expenses-container">
        {showForm ? (
          <Form setShowForm={setShowForm} addExpense={addExpense} />
        ) : (
          <button className="btn-blue" onClick={() => setShowForm(true)}>
            Add new expense
          </button>
        )}
        <Grid expenses={expenses} removeExpense={removeExpense} />
      </div>
    </>
  );
}

export default App;
