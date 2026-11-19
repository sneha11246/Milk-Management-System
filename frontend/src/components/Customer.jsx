
import { useState } from "react";

const STEP = 0.5;

function Customer(props) {
  const [morning, setMorning] = useState(0);
  const [evening, setEvening] = useState(0);

  const total = morning + evening;

  function increasingMorning() {
    setMorning(morning + STEP);
  }

  function decreaseMorning() {
    if (morning > 0) {
      setMorning(morning - STEP);
    }
  }

  function increaseEvening() {
    setEvening(evening + STEP);
  }

  function decreaseEvening() {
    if (evening > 0) {
      setEvening(evening - STEP);
    }
  }

  function resetAll() {
    setMorning(0);
    setEvening(0);
  }

  return (
    <div className="customer-card">
      <h3>{props.name}</h3>

      <div className="session-row">
        <span>Morning</span>
        <button onClick={decreaseMorning}>-</button>
        <span className="qty">{morning} L</span>
        <button onClick={increasingMorning}>+</button>
      </div>

      <div className="session-row">
        <span>Evening</span>
        <button onClick={decreaseEvening}>-</button>
        <span className="qty">{evening} L</span>
        <button onClick={increaseEvening}>+</button>
      </div>

      <p className="total">Total: {total} L</p>

      <button onClick={resetAll}>Reset</button>
    </div>
  );
}

export default Customer;
