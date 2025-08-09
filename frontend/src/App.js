import React, { useState, useEffect } from 'react';

function App() {
  const [backendData, setBackendData] = useState('Loading backend data...');
  const [proxyData, setProxyData] = useState('Loading proxy data...');

  useEffect(() => {
 
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        setBackendData(data.message);
      })
      .catch(error => {
        console.error('Error fetching backend data:', error);
        setBackendData('Error: Could not connect to backend.');
      });
//

    fetch('/api/hello')
      .then(response => response.json())
      .then(data => {
        setProxyData(data.message);
      })
      .catch(error => {
        console.error('Error fetching proxy data:', error);
        setProxyData('Error: Could not connect to backend.');
      });
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <div>
        <h3>Backend Endpoint 1: <code>/api/data</code></h3>
        <p>{backendData}</p>
      </div>
      <div >
        <h3>Backend Endpoint 2: <code>/api/hello</code></h3>
        <p >{proxyData}</p>
      </div>
    </div>
  );
}

export default App;