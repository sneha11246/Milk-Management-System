import { useState } from "react";

function Customer() {
  const [quantity, setQuantity] = useState(5);

  return (
    <div>
      <h3>Ramesh</h3>
      <p>Aaj ka doodh: {quantity} kg</p>

      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button
        onClick={() => {
          if (quantity > 0) {
            setQuantity(quantity - 1);
          }
        }}
      >
        -
      </button>
      <button onClick={() => setQuantity(5)}>Reset</button>
    </div>
  );
}

export default Customer;