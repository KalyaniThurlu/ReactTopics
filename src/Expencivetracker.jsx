
import { useState } from "react";

const ExpensiveTracker = () => {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleClick = () => {
    const newEntry = {
      id: Date.now(), // unique id
      income: parseFloat(income),
      tax: parseFloat(tax),
    };
    setTransactions([...transactions, newEntry]);
    setIncome("");
    setTax("");
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>This is Expense Tracker</h1>
      Income:{" "}
      <input
        type="text"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
      />
      <br />
      Tax:{" "}
      <input
        type="text"
        value={tax}
        onChange={(e) => setTax(e.target.value)}
      />
      <br />

      <h3>Transaction History</h3>
      <ul>
        {transactions.map((item) => (
            <li key={item.id}>
            Income: ₹{item.income} | Tax: ₹{item.tax}{" "}
              <button onClick={handleClick}>Add</button>
            <button onClick={() => deleteTransaction(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpensiveTracker;
