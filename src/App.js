import React, { Component } from 'react'; // Keep only this line
import './App.css'; // Import your CSS file
import InvoiceForm from './components/InvoiceForm';
import InvoiceList from './components/InvoiceList';

class App extends Component {
  state = {
    invoices: [],
  };

  // Function to add a new invoice to the state
  addInvoice = (invoice) => {
    this.setState((prevState) => ({
      invoices: [...prevState.invoices, invoice],
    }));
  };

  render() {
    return (
      <div className="App">
        <InvoiceForm addInvoice={this.addInvoice} />
        <InvoiceList invoices={this.state.invoices} />
      </div>
    );
  }
}

export default App;


