import React from 'react'
import Layout from '../components/layout'
import Wave from '../components/Wave'
import styled from 'styled-components'



const InteractionServicesSection = styled.section`
display: grid;
 margin-bottom: 140px;
 margin-top: 40px;
 padding: 100px;

 /* Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 812px)
  and (orientation: landscape) {
    display: none;
}
 
 `

const ToolsLabel = styled.span`
color: #777777;
font-family: "Roboto", sans-serif;
font-size: 24px;
font-weight: 500;
line-height: 1.2;
`
const ServicesPage = ({ data }) => (

  <Layout>
    <div className="HeroAlt">
      <div className="HeroAltGroup">
        <h1>UI/UX en Monterrey</h1>
        <p>
          Nuestro proceso de diseño UX/UI ayuda a las empresas y stratups a diseñar y prototipar apps
           de iOS, Android y web apps modernas. Desde diseños UI de las pantallas,
            pasando por prototipos e interacciones animadas hasta workflows avanzados
           con componentes de código. Interaction es la única empresa que ofrece servicios de diseño UI y UX en Monterrey, somos especialistas en este rubro y nada más.
           </p>
      </div>
      <Wave />
    </div>

    <InteractionServicesSection>
      <ToolsLabel>Herramientas relevantes</ToolsLabel>
      <p>
        Por medio de herramientas modernas como Sketch podemos diseñar interfaces de usuario con un gran aspecto visual y funcionalidad. Empezamos por diseñar wireframes ( esquemas ) para definir la estructura de contenidos navegación de tu app, después los refinamos a diseños de pantalla estilizados (mockups) que lucen como una app terminada.
      </p>

    </InteractionServicesSection>
  </Layout >

)

export default ServicesPage



