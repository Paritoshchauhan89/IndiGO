import React, { useState, useEffect } from 'react';
import FlightStatus from './components/FlightStatus';
import NotificationSettings from './components/NotificationSettings';
import { requestForToken, onMessageListener } from '../src/components/firebase';

const App = () => {
  const flightId = 'flight123';
  const [isTokenFound, setTokenFound] = useState(false);

  useEffect(() => {
    requestForToken(setTokenFound);
  }, []);

  useEffect(() => {
    if (isTokenFound) {
      onMessageListener()
        .then(payload => {
          console.log('Message received. ', payload);
          // Display notification
        })
        .catch(err => console.log('failed: ', err));
    }
  }, [isTokenFound]);

  return (
    <div>
      <h1>Flight Status and Notifications</h1>
      <FlightStatus flightId={flightId} />
      <NotificationSettings flightId={flightId} />
    </div>
  );
};

export default App;
