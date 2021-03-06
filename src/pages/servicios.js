import React from 'react'
import Layout from '../components/layout'
import Gif from '../components/Gif'
import styled from 'styled-components'
import '../components/Services.css'

const InteractionServicesSection = styled.section`
display: grid;

 padding: 100px;
 border-bottom: 1px solid rgba(173,173,173,0.3);

 /* Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 812px)
  and (orientation: landscape) {
    display: none;
}

@media only screen and (max-width: 640px) {
  padding:0px;
  
}

 `
const ExamplesText = styled.div`
 padding: 8px;
 margin-bottom: 88px;
    
@media only screen and (max-width: 640px) {
 display: grid;
 justify-content: center;
 
}
 `

const ServiceTitle = styled.h1`

color: black
font-family: "Poppins",sans-serif;
font-size: 56px;
font-weight: 500;
letter-spacing: 0px;
line-height: 1.2;
text-align: center;
margin-bottom: 71px;

@media only screen and (max-width: 640px) {
font-size:24px;
text-align: center;
margin: 40px;
}
`

const ToolsLabel = styled.span`
color: #777777;
font-family: "Roboto", sans-serif;
font-size: 24px;
font-weight: 200;
line-height: 1.2;
margin-left: 32px;
@media only screen and (max-width: 640px) {
      display: none;

}


`

const ToolsLogos = styled.div`
display: grid;
grid-gap: 1px;
grid-template-columns: repeat(3, 144px);
margin-top: 16px;
margin-bottom: 54px;
justify-items: center;
@media only screen and (max-width: 640px) {
  
      justify-content: center;
      margin-top: 32px;
      margin-bottom: 8px;
      grid-template-columns: repeat(3, 104px);
  
}

`

const ExamplesGroup = styled.div`

display: grid;
grid-gap: 10px;
grid-template-columns: 1fr 1fr;
justify-items: center;
@media only screen and (max-width: 640px) {
      display: none;
  
}

`

const ExampleImg = styled.img`
    box-shadow: 3px 9px 88px -6px rgb(226, 226, 226);
  width: 500px;
  @media only screen and (max-width: 640px) {
      width: 350px;
  
}


`

const Caption = styled.p`
color: #777777;
font-family: "Roboto-Regular", "Roboto", sans-serif;
font-size: 18px;
font-weight: 400px;
letter-spacing: 0px;
line-height: 1.2;
text-align: center;
`

const GifsArea = styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  padding: 20px;
  justify-items: center;

  @media (max-width: 576px){
     display: none;

}
/* Landscape */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 812px)
  and (orientation: landscape) {
    display: none;
}


 `

const ServicesPage = ({ data }) => (

  <Layout>
    <div className="HeroAlt">
      <div className="HeroAltGroup">
        <h1>UI/UX en Monterrey</h1>
        <p>
          Nuestro proceso de diseño UX/UI ayuda a las empresas de software y startups a diseñar y prototipar apps
           de iOS, Android y web apps modernas. Desde diseños UI de las pantallas,
            pasando por prototipos e interacciones animadas hasta workflows avanzados
           con componentes de código. Interaction es la única empresa que ofrece servicios de diseño UI y UX en Monterrey, somos especialistas en este rubro y nada más.
           </p>
      </div>
    
    </div>

    <InteractionServicesSection>

      <ExamplesText>
        <ServiceTitle> Diseño de pantallas </ServiceTitle>
        <ToolsLabel>Herramientas relevantes</ToolsLabel>
        <ToolsLogos>
          <div className="AppBlock">
            <img src={require('../images/logo-sketch.png')} width="56"></img>
            <p>Sketch</p>
          </div>
          <div className="AppBlock">
            <img src={require('../images/logo-figma.png')} width="56"></img>
            <p>Figma</p>
          </div>
          <div className="AppBlock">
            <img src={require('../images/logo-invision-studio.png')} width="56"></img>
            <p>Invision Studio</p>
          </div>
        </ToolsLogos>

        <p>
          Por medio de herramientas modernas como Sketch podemos diseñar interfaces de usuario con un gran aspecto visual y funcionalidad. Empezamos por diseñar wireframes ( esquemas ) para definir la estructura de contenidos navegación de tu app, después los refinamos a diseños de pantalla estilizados (mockups) que lucen como una app terminada.
          La popularidad de Sketch se ha dado a cabo gracias a la flexibilidad de los vectores, sistemas de grids y ecosistema plugins/apps que permiten hacer cosas como diseño responsivo, animación y prototipos. Es usado por grandes empresas de EU como Apple, Facebook y Airbnb.
      </p>
      </ExamplesText>
      <ExamplesGroup>
        <div>
          <ExampleImg src={require('../images/sketch-ui.png')} />
          <Caption>Sketch es el estándar de la industria en diseño UI.</Caption>
        </div>

        <div>
          <ExampleImg src={require('../images/sketch-facebook.png')} width="500" />
          <Caption>Sketch sirve para mobile, desktop y web apps.</Caption>
        </div>
      </ExamplesGroup>

    </InteractionServicesSection>
    <InteractionServicesSection>
      <ExamplesText>
        <ServiceTitle> Prototipos Online</ServiceTitle>
        <ToolsLabel>Herramientas relevantes</ToolsLabel>
        <ToolsLogos>
         
          <div className="AppBlock">
            <img src={require('../images/logo-invision.png')} width="56"></img>
            <p>Invision</p>
          </div>
          <div className="AppBlock">
            <img src={require('../images/logo-invision-studio.png')} width="56"></img>
            <p>Invision Studio</p>
          </div>


        </ToolsLogos>

        <p>
          Tomamos las pantallas diseñadas típicamente en Sketch ( ó Invision Studio ) y las convertimos en un prototipo interactivo simple y poderoso para colaborar. Por medio de  Invision,  Interaction diseñará un prototipo online de tu  app que se puede  ver desde desde tu smartphone o de tu navegador web para presentarlo a tu equipo o gente involucrada en el proyecto.  Los desarrolladores pueden inspeccionar valores como colores, tipografía y tamaño ó hasta descargar  assets como iconos o imágenes.
      </p>
      </ExamplesText>
      <ExamplesGroup>
        <div>
          <ExampleImg src={require('../images/invision-monterrey.png')} width="500" />
          <Caption>Invision es una plataforma sofisticada para hacer prototipos</Caption>
        </div>

        <div>
          <ExampleImg src={require('../images/invision-studio-mexico.png')} width="500" />
          <Caption>Invision Studio es una alternativa viable a Sketch,</Caption>
        </div>
      </ExamplesGroup>

    </InteractionServicesSection>
    <InteractionServicesSection>
      <ExamplesText>
        <ServiceTitle> Interacciones animadas</ServiceTitle>
        <ToolsLabel>Herramientas relevantes</ToolsLabel>

        <ToolsLogos>
          <div className="AppBlock">
            <img src={require('../images/logo-principle.png')} width="56"></img>
            <p>Princple</p>
          </div>
          <div className="AppBlock">
            <img src={require('../images/logo-flinto.png')} width="56"></img>
            <p>Flinto</p>
          </div>
        
        </ToolsLogos>
        <p>
          Las interacciones táctiles ó "microinteractions" son un elemento importante en apps menos convencionales. Con herramientas como Principle y Flinto podemos hacer mini-prototipos que pueden ser utilizados en iPhone o visualizados en GIFs o videos de alta fidelidad que muestran interacciones únicas enfocadas a los eventos de la pantalla táctil de los smartphones como swipe, tap y pinch, entre otros. Las micro interactions son muy populares en las apps modernas del Silicon Valley, ya que deleitan a los usuarios y hacen que la app se sienta moderna y le da el toque humano. No sólo eso si no que la animación puede dar feedback importante para guiar a los usuarios de lo que ocurre en la app.
      </p>


      </ExamplesText>
      <ExamplesGroup>
        <div>
          <ExampleImg src={require('../images/switch_UI.gif')} width="500" />
          <Caption>La animación guía  y deleita a tus usuarios</Caption>
        </div>

        <div>
          <ExampleImg src={require('../images/socialshare_UI.gif')} width="500" />
          <Caption>El feedback visual aumenta la calidad de tu app</Caption>
        </div>
      </ExamplesGroup>
      <div className="UnevenExample">
        <ExampleImg src={require('../images/facebook_UI.gif')} width="500" />
        <Caption>Facebook Reactions, un perfecto ejemplo de microinteracción</Caption>
      </div>

    </InteractionServicesSection>
    <InteractionServicesSection>
      <ExamplesText>
        <ServiceTitle> Prototipos Avanzados</ServiceTitle>
        <ToolsLabel>Herramientas relevantes</ToolsLabel>

        <ToolsLogos>
       
          <div className="AppBlock">
            <img src={require('../images/logo-framerx.png')} width="56"></img>
            <p>Framer X</p>
          </div>
          <div className="AppBlock">
            <img src={require('../images/logo-react.png')} width="56"></img>
            <p>React</p>
          </div>

        </ToolsLogos>
        <p>
        Para los usuarios que usan React, existe la opción de utilizar la herramienta de vanguardia
  Framer X, la cual no solo permite generar prototipos de la más alta fidelidad si no que
  también genera componentes de código en React que pueden ser utilizados como referencia
para los equipos que utilizan React Native, ó directamente en el proyecto si utilizan React.js para web o Cordova.
  
  Incluso si tu compañía usa una tecnología diferente a React, Framer X es la mejor opción para
  generar un prototipo de la más alta fidelidad que incluye inputs de texto, lógica y todas las 
  interacciones completas de tu app, lo cual lo hace casi indistinguible de una app ya codificada para motivos de presentación y diseño de producto más sofisticado.
      </p>


      </ExamplesText>
      <ExamplesGroup>
        <div>
          <ExampleImg src={require('../images/framerx.gif')} width="500" />
          <Caption>La animación guía  y deleita a tus usuarios</Caption>
        </div>

        <div>
          <ExampleImg src={require('../images/framer-x-react-components.gif')} width="500" />
          <Caption>El feedback visual aumenta la calidad de tu app</Caption>
        </div>
      </ExamplesGroup>
      

    </InteractionServicesSection>

  </Layout >

)

export default ServicesPage



