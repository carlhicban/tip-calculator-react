import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [serviceFriend, setServiceFriend] = useState(0);
  const tip = bill * ((service + serviceFriend) / 2 / 100);
  // function handleBill(value) {
  //   setBill(() => value);
  // }

  // function handleService(value) {
  //   console.log(value);
  //   setService(() => bill / value);
  // }

  // function handleServiceFriend(value) {
  //   console.log(value);
  //   setServiceFriend(() => bill / value);
  // }

  function handleReset() {
    setBill("");
    setService(0);
    setServiceFriend(0);
  }
  return (
    <>
      <Bill bill={bill} handleBill={setBill} />
      <Service handleService={setService} />
      <ServiceForFried handleServiceFriend={setServiceFriend} />
      <TotalBill bill={bill} tip={tip} />
      <ResetBill onReset={handleReset} />
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

function Service({ handleService }) {
  return (
    <>
      <h3>How did you like the service?</h3>
      <select onChange={(e) => handleService(Number(e.target.value))}>
        <option value={0}>0%</option>
        <option value={10}>10%</option>
        <option value={20}>20%</option>
      </select>
    </>
  );
}

function ServiceForFried({ handleServiceFriend }) {
  return (
    <>
      <h3>How did your friend like the service?</h3>
      <select onChange={(e) => handleServiceFriend(Number(e.target.value))}>
        <option value={0}>0%</option>
        <option value={10}>10%</option>
        <option value={20}>20%</option>
      </select>
    </>
  );
}

function TotalBill({ bill, tip }) {
  return (
    <h2>
      You pay ${Number(bill) + Number(tip)} (${bill} + ${tip} tip)
    </h2>
  );
}

function ResetBill({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
