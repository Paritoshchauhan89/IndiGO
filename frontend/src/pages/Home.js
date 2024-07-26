import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import FlightStatus from '../components/FlightStatus'
import FlightTable from '../components/FlightTable'

const Home = () => {
  return (
    <Layout title={'Home Page'}>
      <FlightStatus/>
      <FlightTable/>
     <Link to="/notify-me"> <button>Preferred Flight</button></Link>

    </Layout>
  )
}

export default Home