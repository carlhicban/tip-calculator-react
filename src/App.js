import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);

  function handleBill(value) {
    setBill(() => value);
  }
  return (
    <>
      <Bill bill={bill} />
      <Service />
      <TotalBill bill={bill} handleBill={handleBill} />
      <ResetBill />
    </>
  );
}

function Bill({ bill, handleBill }) {
  return (
    <>
      <h3>How much was the bill?</h3>
      <input
        type="number"
        value={bill}
        onChange={(e) => handleBill(e.target.value)}
      />
    </>
  );
}

function Service() {
  return (
    <>
      <h3>How did you like the service?</h3>
      <input type="number" />
    </>
  );
}

function TotalBill({ bill }) {
  return <h2>You pay $ (${bill} + $ tip)</h2>;
}

function ResetBill() {
  return <button>Reset</button>;
}

export default App;
