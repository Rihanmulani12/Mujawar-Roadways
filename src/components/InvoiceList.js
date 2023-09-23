import React from 'react';

const InvoiceList = ({ invoices }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <button onClick={handlePrint}>Print Invoices</button>
      <ul>
        {invoices.map((invoice, index) => (
          <li key={index}>
            {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;

