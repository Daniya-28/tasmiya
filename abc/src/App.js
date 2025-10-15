
import './App.css';
import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const sum = Number(num1) + Number(num2); 
    setResult(sum);
  };
const handleSubmitmin = (e) => {
    e.preventDefault(); 
    const sum = Number(num1) -Number(num2); 
    setResult(sum);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input type="number" placeholder="Enter second number"  value={num2}onChange={(e) => setNum2(e.target.value)}/>
        <button type="submit">Add</button>

        <br/>
        <br/>
          <form onSubmit={handleSubmit}></form>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input type="number" placeholder="Enter second number"  value={num2}onChange={(e) => setNum2(e.target.value)}/>
        <button type="submit2">subtract</button>
      </form>

      <h2>Result: {result}</h2>
    </>
  );
}

export default App;