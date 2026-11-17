const customers = [
  { id: 1, name: "Ramesh", phone: "9876543210" },
  { id: 2, name: "Sunita", phone: "9123456780" },
  { id: 3, name: "Mohan", phone: "9988776655" },
];

function CustomerList() {
  return (
    <div>
      <h2>Customers</h2>
      {customers.map((customer) => (
        <p key={customer.id}>
          {customer.name} - {customer.phone}
        </p>
      ))}
    </div>
  );
}

export default CustomerList;