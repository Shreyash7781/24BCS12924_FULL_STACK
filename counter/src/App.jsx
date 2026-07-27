import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>+</button>

      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;