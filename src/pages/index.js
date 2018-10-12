import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Cell from '../components/Cell'
import styled from 'styled-components'


import staticdata from '../../staticdata.json'

const SectionCaption = styled.h1`
  font-weight: 600;
  font-size: 23px;
  color: #717E90;
  text-align: center;
 
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (

  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Prototipos Móviles </h1>
        <p>Ayudamos a los emprendedores a diseñar y prototipar apps en alta fidelidad como ninguna otra empresa en México. Nuestro énfasis es en motion design, idear experiencias y generar las specs para desarrolladores. </p>
        <Link to="/page-2/">Cotizar</Link>
        <div className="Logos">
          <img alt="Sketch" src={require('../images/logo-sketch.png')} width="75" />
          <img alt="Marvel" src={require('../images/logo-marvel.png')} width="75" />
          <img alt="Origami" src={require('../images/logo-origami.png')} width="75" />
          <img alt="Framer X" src={require('../images/logo-framerx.png')} width="75" />
          <img alt="Flinto" src={require('../images/logo-flinto.png')} width="75" />
          <img alt="Principle" src={require('../images/logo-principle.png')} width="75" />
        </div>
        <Wave />
      </div>
    </div>
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
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="UI Mágica"
      text="
      Interaction te ayudará a diseñar y materializar la app de tus sueños en un prototipo animado de alta fidelidad que puedes probar en tu smartphone y presentar a inversionistas o ejecutivos involucrados. Tambien la finalidad es  generar las pantallas y  especificaciones  necesrias para guiar a tus desarrolladores en el camino correcto.
      "
    />
    <SectionCaption> Dale forma a tus ideas</SectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(cell => (
      <Cell 
        title={cell.title}
        image={cell.image} />
    ))}
</SectionCellGroup>
    
  </Layout >

)

export default IndexPage


