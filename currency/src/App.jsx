import { useState, useEffect, useCallback } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState(0);

  const convert = useCallback(async () => {
    const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await res.json();

    setResult((amount * data.rates[to]).toFixed(2));
  }, [amount, from, to]);

  useEffect(() => {
    convert();
  }, [convert]);

  return (
    <div>
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option>USD</option>
        <option>INR</option>
        <option>EUR</option>
        <option>GBP</option>
      </select>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option>INR</option>
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
      </select>

      <h2>
        {amount} {from} = {result} {to}
      </h2>
    </div>
  );
}

export default App;