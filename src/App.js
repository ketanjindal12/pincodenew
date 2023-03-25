import React, { useState } from 'react';
import './App.css';

function PostalInfo() {
  const [pincode, setPincode] = useState("");
  const [postalInfo, setPostalInfo] = useState(null);

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  }

  const handleGetInfo = async () => {
    const url = `https://api.postalpincode.in/pincode/${pincode}`;
    const response = await fetch(url);
    const data = await response.json();
    setPostalInfo(data[0].PostOffice);
  }

  return (
    <div>
      <h2>Enter Pincode</h2>
      <div id='input'>
      <input type="text" value={pincode} onChange={handlePincodeChange} placeholder="Pincode" />
      </div>
     
      <button onClick={handleGetInfo}>Lookup</button>
      {postalInfo && (
        
        <ul>
          
          {postalInfo.map((office) => (
            <li key={office.Pincode}>
              <div id='boarder'>
              <p><strong>Name:</strong> {office.Name}</p>
              <p><strong>Delivery Status:</strong> {office.DeliveryStatus}</p>
              <p><strong>Contact:</strong> {office.Telephone}</p>
              <p><strong>Address:</strong> {office.Description}</p>
              </div>
            </li>
           
          ))}
        </ul>
        
      )}
    </div>
  );
}

export default PostalInfo;
