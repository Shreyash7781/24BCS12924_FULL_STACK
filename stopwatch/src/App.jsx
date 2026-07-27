import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const timer = useRef(null);

  const start = () => {
    if (timer.current) return;

    timer.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const stop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  const hr = String(Math.floor(time / 3600000)).padStart(2, "0");
  const min = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
  const sec = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  const ms = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

  return (
    <div>
      <h1>Stopwatch</h1>

      <h2>{hr}:{min}:{sec}:{ms}</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;