import React, { useState, useEffect } from 'react';

function App() {
  const [backendData, setBackendData] = useState('Loading backend data...');
  const [proxyData, setProxyData] = useState('Loading proxy data...');

  useEffect(() => {
    // Fetch data from the backend through the Nginx proxy
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        setBackendData(data.message);
      })
      .catch(error => {
        console.error('Error fetching backend data:', error);
        setBackendData('Error fetching backend data:', error);
      });

    // A second fetch request to test another endpoint
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => {
        setProxyData(data.message);
      })
      .catch(error => {
        console.error('Error fetching proxy data:', error);
        setProxyData('Error fetching proxy data:', error);
      });
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p >This is a simple React app. It makes two fetch requests to the backend.</p>
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
