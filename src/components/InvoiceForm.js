import React, { useState, useEffect } from "react";

import logo from "./img.png";
import "./InvoiceForm.css";

const consignorSuggestionsArray = ["SDM", "Sapuu", "Shaha"]; // Predefined consignor suggestions
const consigneeSuggestionsArray = ["Arbaz", "Summya", "Sahil"]; // Predefined consignee suggestions

const InvoiceBox = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [billNumber, setBillNumber] = useState(
    parseInt(localStorage.getItem("billNumber")) || 0
  );
  
  const [consignor, setConsignor] = useState("");
  const [consignee, setConsignee] = useState("");

  const [consignorSuggestions, setConsignorSuggestions] = useState([]);
  const [consigneeSuggestions, setConsigneeSuggestions] = useState([]);


  useEffect(() => {
    localStorage.setItem("billNumber", billNumber);
   }, [billNumber]);

   const generateBillNumber = () => {
    let updatedBillNumber = billNumber + 1;

    if (updatedBillNumber === 10000) {
      updatedBillNumber = 101;
    }
    setBillNumber(updatedBillNumber);
    document.getElementById("repcit").value = updatedBillNumber;
    
  };
  

  const handlePrintInvoice = () => {
    generateBillNumber();
    
  };
  
  
  

  const suggestConsignorNames = (input) => {
    const filteredNames = consignorSuggestionsArray.filter((name) =>
      name.toLowerCase().includes(input.toLowerCase())
    );
    return filteredNames.sort((a, b) => a.localeCompare(b));
  };

  const suggestConsigneeNames = (input) => {
    const filteredNames = consigneeSuggestionsArray.filter((name) =>
      name.toLowerCase().includes(input.toLowerCase())
    );
    return filteredNames.sort((a, b) => a.localeCompare(b));
  };

  const handleConsignorChange = (event) => {
    const newValue = event.target.value;
    setConsignor(newValue);
    setConsignorSuggestions(suggestConsignorNames(newValue));
    localStorage.setItem("consignor", newValue);
  };

  const handleConsigneeChange = (event) => {
    const newValue = event.target.value;
    setConsignee(newValue);
    setConsigneeSuggestions(suggestConsigneeNames(newValue));
    localStorage.setItem("consignee", newValue);
  };

  const handleConsignorSuggestionClick = (suggestion) => {
    setConsignor(suggestion);
    setConsignorSuggestions([]);
  };

  const handleConsigneeSuggestionClick = (suggestion) => {
    setConsignee(suggestion);
    setConsigneeSuggestions([]);
  };

  return (
    <div
      className="invoice-form"
      style={{ marginBottom: "40px", marginTop: "20px" }}
    >
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
                Daily Services : Karad, Islampur, Kasegaon, Vathar
              </h5>
            </td>
            <td className="date-billno-container">
              <div className="subjectedkop">
                <label
                  htmlFor="Date"
                  style={{ marginRight: "50px", marginBottom: "2px" }}
                >
                  <b>Subjected To Kolhapur Jurisdiction Only</b>
                </label>
              </div>

              <div className="small-label">
                <label htmlFor="Date" style={{ marginLeft: "15px" }}>
                  Date:
                </label>
                <input type="date" id="Date" defaultValue={currentDate} />
              </div>

              <div className="small-label">
                <button onClick={handlePrintInvoice}>Bill no</button>
                <input
                  style={{ width: "51%", marginLeft: "0px" }}
                  type="text"
                  id="repcit"
                />
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
                      <div
                        className="consignorBox"
                        style={{ position: "relative" }}
                      >
                        <input
                          type="text"
                          id="consignorInput"
                          name="consignor"
                          value={consignor}
                          onChange={handleConsignorChange}
                        />
                        {/* Display Consignor Suggestions */}
                        {consignorSuggestions.length > 0 && (
                          <ul className="suggestion-list">
                            {consignorSuggestions.map((suggestion, index) => (
                              <li
                                key={index}
                                onClick={() =>
                                  handleConsignorSuggestionClick(suggestion)
                                }
                              >
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </td>
                    <td className="info-column">
                      <div className="Consigneelable">
                        <label
                          htmlFor="consigneeInput"
                          style={{
                            fontWeight: "bold",
                            textAlign: "start",
                            marginLeft: "36px",
                          }}
                        >
                          Consignee:
                        </label>
                      </div>
                      <div
                        className="consigneeBox"
                        style={{ position: "relative" }}
                      >
                        <input
                          type="text"
                          id="consigneeInput"
                          name="consignee"
                          value={consignee}
                          onChange={handleConsigneeChange}
                        />

                        {consigneeSuggestions.length > 0 && (
                          <ul className="suggestion-list">
                            {consigneeSuggestions.map((suggestion, index) => (
                              <li
                                key={index}
                                onClick={() =>
                                  handleConsigneeSuggestionClick(suggestion)
                                }
                              >
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        )}
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
                      <textarea type="text" id="QTY" name="QTY" />
                    </td>
                    <td>
                      <textarea type="text" id="Parts" name="Parts" />
                    </td>
                    <td>
                      <textarea type="text" id="Weight" name="Weight" />
                    </td>

                    <td>
                      <textarea
                        type="text"
                        id="DecideVal"
                        name="DecideVal"
                        style={{ marginBottom: "10" }}
                      />
                    </td>

                    <td>
                      <label>Crossing</label>
                      <textarea type="text" id="crossing" name="crossing" />
                      <label>Handling Charges</label>
                      <textarea type="text" id="Hamali" name="Hamali" />
                    </td>
                    <td className="Othrestd " id="Othrestd">
                      <label>OTHERS</label>
                      <textarea type="text" id="others" name="others" />
                      <div className="BC">
                        <label>Bill Charges : 5 /- only </label>
                      </div>
                    </td>

                    <td>
                      <div className="totaldiv">
                        <div>
                          <textarea type="text" id="Total" name="Total" />
                        </div>
                        <div className="Payment">
                          <label
                            htmlFor="payment"
                            style={{
                              marginBottom: "10px",
                              marginRight: "15px",
                              fontWeight: "bold",
                            }}
                          >
                            Payment:
                          </label>

                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <label
                              htmlFor="paidInput"
                              style={{ marginLeft: "1px", marginRight: "1px" }}
                            >
                              PAID:
                            </label>
                            <input
                              type="checkbox"
                              id="paidInput"
                              name="TOPAY"
                              style={{ marginRight: "5px" }}
                            />
                          </div>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginTop: "5px",
                            }}
                          >
                            <label
                              htmlFor="topayInput"
                              style={{ marginRight: "1px", marginLeft: "1px" }}
                            >
                              TOPAY:
                            </label>
                            <input
                              type="checkbox"
                              id="topayInput"
                              name="TOPAY"
                              style={{ marginleft: "1px" }}
                            />
                          </div>
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
