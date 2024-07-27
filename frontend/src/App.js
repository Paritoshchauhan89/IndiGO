import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Casestudy from './pages/Casestudy';
import About from './pages/About';
import Contact from './pages/Contact';
import NotificationForm from './components/Flights/NotificationForm';
import Dashboard from './components/Admin/Dashboard'
import UpdateFlight from './components/Flights/UpdateFlight'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/case-study' element={<Casestudy />} />
      <Route path='/about-project' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/notify-me' element={<NotificationForm />} />
      <Route path='/admin-dashboard' element={<Dashboard/>} />
      <Route path='/update-flight/:id' element={<UpdateFlight/>} />

    </Routes>
  );
};

export default App;
