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
    <div>
      <button onClick={handlePrint} style={{marginRight :"2px" , marginTop :"1px" , marginTop:"10px"}}>Print Invoices</button>
      <button onClick={handleCopyInvoice} style={{marginLeft : "2px"}}>Copy Invoice</button>
      
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

