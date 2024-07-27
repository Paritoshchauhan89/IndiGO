import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import FlightTable from '../components/FlightTable'

const Home = () => {
  return (
    <Layout title={'Home Page'}>
 

      <FlightTable/>

    </Layout>
  )
}

export default Home