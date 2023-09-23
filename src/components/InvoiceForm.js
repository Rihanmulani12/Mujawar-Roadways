import React, { useState } from "react";
import "./InvoiceForm.css"; 

import logo from "./img.png";
import { blue, red } from "@mui/material/colors";

const InvoiceBox = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [billNumber, setBillNumber] = useState(1000);

  const generateBillNumber = () => {
    setBillNumber(prevBillNumber => prevBillNumber + 1);
    document.getElementById("repcit").value = billNumber + 1;
  };

  const handlePrintInvoice = () => {
    generateBillNumber();
    
  };
  
  


  return (
    <div className="invoice-form">
      <table cellPadding="0" cellSpacing="0">
        <tbody>
          <tr className="top-row">
            <td colSpan="2">
              <div className="logo-header-container">
                <img src={logo} alt="logo" />
                <h3>MUJAWAR ROADWAYS (BABA)</h3>
              </div>
              <h6 className="address">
                P.B.Road, Jadhav Chambers, Mahalaxmi Mangal Karyalaya, Nagaon
                Phata, Shiroli, Kolhapur-416122
              </h6>
              <h5 className="mobile">
                Mobile No : 9370135469, 7767882009, 9764484163
              </h5>
              <h5 className="services">
                Daily Services : Karad, Islampur, Kasegav, Vathar
              </h5>
            </td>
            <td className="date-billno-container">
              <div className="subjectedkop">
                <label htmlFor="Date" style={{ marginRight: "50px" , marginBottom:"10px" }}>
                  <b>Subjected To Kolhapur Jurisdication Only</b>
                </label>
              </div>

              <div className="small-label">
                <label htmlFor="Date" style={{marginLeft : "15px"}}>Date:</label>
                <input type="date" id="Date" defaultValue={currentDate} />
              </div>

              <div className="small-label">
                <button onClick={handlePrintInvoice}>Bill no</button>
                <input style={{ width: "50%" }} type="text" id="repcit" />
              </div>
            </td>
          </tr>
          <tr className="top">
            <td colSpan="3"></td>
          </tr>
          <tr className="information">
            <td colSpan="3">
              <table>
                <tbody style={{ textAlign: "center" }}>
                  <tr className="info">
                    <td className="info-column" id="coningerid">
                      <div className="Consignorlable">
                        <label
                          htmlFor="consignorInput"
                          style={{ fontWeight: "bold" }}
                        >
                          Consignor:
                        </label>
                      </div>
                      <div className="consignorBox">
                        <input
                          type="text"
                          id="consignorInput"
                          name="consignor"
                        />
                      </div>
                    </td>
                    <td className="info-column">
                      <div className="Consigneelable">
                        <label
                          htmlFor="consigneeInput"
                          style={{
                            fontWeight: "bold",
                            textAlign: "start",
                            marginLeft: "20px",
                          }}
                        >
                          Consignee:
                        </label>
                      </div>
                      <div className="consigneeBox">
                        <input
                          style={{ textAlign: "start" }}
                          type="text"
                          id="consigneeInput"
                          name="consignee"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="6">
              <table cellSpacing="0" cellPadding="0" className="service-table">
                <thead>
                  <tr className="heading">
                    <td className="center-column">QTY</td>
                    <td className="center-column">PARTICULARS (DAG)</td>
                    <td className="center-column">WEIGHT</td>
                    <td className="center-column">DECIDED VALUE</td>
                    <td className="center-column" colSpan="2">
                      FRIGTE
                    </td>
                    <td className="center-column">TOTAL AMOUNT (INR)</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="item">
                    <td>
                      <input type="text" id="QTY" name="QTY" />
                    </td>
                    <td>
                      <input type="text" id="Parts" name="Parts" />
                    </td>
                    <td>
                      <input type="text" id="Weight" name="Weight" />
                    </td>

                    <td>
                      <input
                        type="text"
                        id="DecideVal"
                        name="DecideVal"
                        style={{ marginBottom: "10" }}
                      />
                    </td>

                    <td>
                      <label>Crossing</label>
                      <input type="text" id="crossing" name="crossing" />
                      <label>Handling Charges</label>
                      <input type="text" id="Hamali" name="Hamali" />
                    </td>
                    <td>
                      <label>OTHERS</label>
                      <input type="text" id="others" name="others" />
                      <div className="BC">
                        <label>Bill Charges : 5 /- only </label>
                      </div>
                    </td>

                    <td>
                      <div className="totaldiv">
                        <div>
                          <input type="text" id="Total" name="Total" />
                        </div>
                        <div className="Payment">
                          <div className="Paymentlabel">
                            <label htmlFor="payment">Payment:</label>
                          </div>
                          <label htmlFor="payment">Paid</label>
                          <input type="checkbox" id="topayInput" name="TOPAY" />
                          <label htmlFor="payment">To-Pay</label>
                          <input type="checkbox" id="topayInput" name="TOPAY" />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colSpan="0">
              <table cellSpacing="0" cellPadding="0">
                <tbody>
                  <tr>
                    <td colSpan="1" className="receiver-container">
                      <b>RECEIVER'S STAMP & SIGN:</b>
                    </td>
                    <td className="authorized-signature-container">
                      <b>Authorized Signature:</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="Terms">
        <p>
          {" "}
          <b>Terms and Conditions:</b> 1) Report any goods within 30 days from
          the date of booking No complaint will be considered after that 2) We
          will not be responsible for damage to glassware, sun mic roll and
          sanitary ware 3) If your party does not take delivery of the goods and
          the truck driver brings back the goods, you will have to pay the
          return fare and delivery. 4) In case of accident, we are not
          responsible for the loss of goods. 5) You have to take insurance for
          the goods value above 25000 rupees, otherwise we are not responsible
          for the above value in case of loss
        </p>
      </div>
    </div>
  );
};

export default InvoiceBox;
