import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [service, setService] = useState(0);
  const [serviceFriend, setServiceFriend] = useState(0);

  function handleBill(value) {
    setBill(() => value);
  }

  function handleService(value) {
    console.log(value);
    setService(() => bill / value);
  }

  function handleServiceFriend(value) {
    console.log(value);
    setServiceFriend(() => bill / value);
  }

  return (
    <>
      <Bill bill={bill} handleBill={handleBill} />
      <Service handleService={handleService} />
      <ServiceForFried handleServiceFriend={handleServiceFriend} />
      <TotalBill serviceFriend={serviceFriend} service={service} bill={bill} />
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

function TotalBill({ service, bill, serviceFriend }) {
  return (
    <h2>
      You pay ${Number(bill) + Number(service + serviceFriend / 2)} (${bill} + $
      {service + serviceFriend / 2} tip)
    </h2>
  );
}

function ResetBill() {
  return <button>Reset</button>;
}

export default App;
