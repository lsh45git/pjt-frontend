import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);
  return (
    <>
      {message.map((v, idx) => (
        <li key={`${idx}-${v}`}>{v}</li>
      ))}
    </>
  );
}

export default App;
