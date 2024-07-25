// Import the functions you need from the Firebase SDK
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_project_id.firebaseapp.com",
  projectId: "your_project_id",
  storageBucket: "your_project_id.appspot.com",
  messagingSenderId: "your_sender_id",
  appId: "your_app_id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Request permission and get token
export const requestForToken = (setTokenFound) => {
  return getToken(messaging, { vapidKey: 'your_public_vapid_key' })
    .then((currentToken) => {
      if (currentToken) {
        setTokenFound(true);
        return currentToken;
      } else {
        setTokenFound(false);
        return null;
      }
    })
    .catch((err) => {
      console.error('An error occurred while retrieving token. ', err);
      setTokenFound(false);
      return null;
    });
};

// Listener for incoming messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
