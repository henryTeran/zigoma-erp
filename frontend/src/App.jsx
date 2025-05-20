import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setMsg(data.message));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-blue-600">ZIGOMA ERP</h1>
      <p className="mt-4 text-gray-700">Backend says: {msg}</p>
    </div>
  );
}

export default App;
