import React from 'react';

const InvoiceList = ({ invoices }) => {
  const handlePrint = () => {
    window.print();
  };
  const handleCopyInvoice = () => {
    const originalInvoice = document.querySelector(".invoice-form");
    const copyInvoice = originalInvoice.cloneNode(true);
    document.body.appendChild(copyInvoice);
  };

  return (
    <div style={{marginTop :"-25px" , marginBottom:"0px"}}>
      <button style={{marginRight : "5px"}} onClick={handlePrint}>Print Invoices</button>
      <button  onClick={handleCopyInvoice} >Copy Invoice</button>
      
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

