import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState("");
  const [service, setService] = useState(0);
  const [serviceFriend, setServiceFriend] = useState(0);

  function handleDelete() {
    setBill("");
    setService(0);
    setServiceFriend(0);
  }

  return (
    <div className="app">
      <div className="card">
        <Bill bill={bill} setBill={setBill} />
        <ServiceLike service={service} setService={setService} />
        <ServiceLikeFriend
          serviceFriend={serviceFriend}
          setServiceFriend={setServiceFriend}
        />
        <TipCalculator
          bill={bill}
          service={service}
          serviceFriend={serviceFriend}
          onDeltete={handleDelete}
        />
      </div>
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div className="form-group">
      <label htmlFor="bill">How much was the bill?</label>
      <input
        id="bill"
        className="input"
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        placeholder="Enter bill amount"
      />
    </div>
  );
}

function ServiceLike({ service, setService }) {
  return (
    <div className="form-group">
      <label>How did you like the service?</label>
      <select
        className="select"
        value={service}
        onChange={(e) => setService(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function ServiceLikeFriend({ serviceFriend, setServiceFriend }) {
  return (
    <div className="form-group">
      <label>How did your friend like the service?</label>
      <select
        className="select"
        value={serviceFriend}
        onChange={(e) => setServiceFriend(Number(e.target.value))}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function TipCalculator({ bill, service, serviceFriend, onDeltete }) {
  const billNum = Number(bill);
  const tip = billNum * ((service + serviceFriend) / 2 / 100);
  const total = billNum + tip;

  return (
    <div className="result">
      <p>
        You pay <strong>${total.toFixed(2)}</strong> (${billNum.toFixed(2)} + $
        {tip.toFixed(2)} tip)
      </p>
      <button className="btn" onClick={onDeltete}>
        Reset
      </button>
    </div>
  );
}
