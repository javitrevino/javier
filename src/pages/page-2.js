import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (

  /*
<div className="Cards">
    <h2>Proyectos</h2>

    <div className="CardGroup">
        <Card
            title="Tec de Monterrey"
            text="Team Work"
            image={require('../images/wallpaper.jpg')} />
        <Card
            title="Prodynamics"
            text="Sales experience"
            image={require('../images/wallpaper.jpg')} />
        <Card
            title="OXXO Gas"
            text="To Do App"
            image={require('../images/wallpaper.jpg')} />
        <Card
            title="Salud Integral"
            text="Appointments"
            image={require('../images/wallpaper.jpg')} />


    </div>

    */


  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>

)

export default SecondPage
