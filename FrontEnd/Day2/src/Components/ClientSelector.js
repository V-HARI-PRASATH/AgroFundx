import React, { useEffect, useState } from 'react';
import './ClientSelector.css'; // Import your CSS file
import { connect } from 'react-redux';

function ClientSelector(props) {
  // Sample list of clients (replace this with your actual data)
  const clients = [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    // Add more clients as needed
  ];
  const [selectedClient, setSelectedClient] = useState('');
  useEffect(
    ()=>{
        props.onClientUpdate(selectedClient);
    },[selectedClient]
  )
  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  return (
    <div>
        <center>
      <h2>Select a Client:</h2>
      <select value={selectedClient} onChange={handleClientChange} className="client-dropdown">
        <option value="">Select a client</option>
        {props.clients.map((client) => (
          <option key={client.id} value={client.id}>
            {client.user.name}
          </option>
        ))}
      </select>
      </center>
    </div>
  );
}
const mapstateToprops=(state)=>{
    return{
        clients:state.trainer.clients
    }
}
export default connect(mapstateToprops)(ClientSelector);
