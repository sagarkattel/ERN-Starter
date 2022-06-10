import React, { useEffect, useState } from "react";

function Customers() {
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    fetch("https://second-expressapp.herokuapp.com/api/customers")
      .then((res) => res.json())
      .then((customers) => setCustomers(customers));
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      {!customers ? (
        <h2>Loading customers...</h2>
      ) : (
        <ul>
          {customers.map((customer) => {
            return (
              <li key={customer.id}>
                {customer.firstName} {customer.lastName}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Customers;
