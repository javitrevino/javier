import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/Card'
import Gif from '../components/Gif'
import ShadowGif from '../components/ShadowGif'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Cell from '../components/Cell'
import styled from 'styled-components'
import staticdata from '../../staticdata.json'


const BtnGroup = styled.div`
display: grid;
grid-template-columns: 280px 280px;
grid-gap: 1px;
padding: 40px;
justify-content: center;
`
const MainBtn = styled.a` 
cursor: pointer;
background: linear-gradient(125deg, #015FDF, #1ED2FC);
border: 1px solid hsl(0, 0%, 100%);
border-radius: 97px;
font-weight: 600;
font-size: 21px;
line-height: 64px;
text-transform: uppercase;
color: white;
display: block;
width: 250px;
height: 64px;
transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
&:hover{
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.25);

}

`
const ActionContainer = styled.div `
display: grid;
justify-content: center;
padding-top: 100px
padding-bottom: 100px
`
const MainBtnNoBorder = styled.a` 
cursor: pointer;
background: linear-gradient(125deg, #015FDF, #1ED2FC);
border: 0px;
border-radius: 97px;
font-weight: 600;
font-size: 21px;
line-height: 64px;
text-transform: uppercase;
color: white;
display: block;
width: 250px;
height: 64px;
text-align: center
transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
&:hover{
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.25);

}


`

const SideBtn = styled.button` 
cursor: pointer;

background: rgba(0, 0, 0, 0.75);
border: 1px solid hsl(0, 0%, 100%);
border-radius: 97px;
font-weight: 600;
font-size: 21px;
line-height: 64px;
text-transform: uppercase;
color: white;
display: block;
width: 250px;
height: 64px;
transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
&:hover{
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.25);

}

`

const GifsArea = styled.div` 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  margin:20px;
  padding: 20px
 `

const BenefitsArea = styled.section` 
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-gap: 188px
  margin:64px;
  padding: 64px
  align-content: center;
 `
const BenefitsAreaReversed = styled.section` 
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  grid-gap: 188px
  margin:64px;
  padding: 64px
  align-content: center;
 `

const Benefit = styled.div`
display: grid;
align-content: center;
 `

const BenefitTitle = styled.h2`
 color: #333333;
font-family: "Poppins", serif;
font-size: 56px;
font-weight: 500;
text-align: center;
margin: 0;
 `
const BenefitSubTitle = styled.h3`
color: #333333;
font-family: "Poppins", serif;
font-size: 26px;
font-weight: 200;
text-align: center;
margin: 0;
 `

const BenefitsParagraph = styled.p`
font-family: "Roboto";
font-weight: 400;
font-size: 26px;
color: black;
 
 `

const GifWrapper = styled.div`
 display: grid;
 align-content: center;
 justify-content: center;
 `

const SectionCaption = styled.h1`
  font-weight: 200;
  font-size: 36px;
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

const SpecialBtn = styled.a`
text-align: center;
cursor: pointer;
background: linear-gradient(125deg, rgba(45, 55, 105, 1.00), rgba(234, 80, 108, 1.00));
border: 1px solid hsl(0, 0%, 100%);
border-radius: 97px;
font-weight: 600;
font-size: 21px;
line-height: 64px;
text-transform: uppercase;
color: white;
display: block;
width: 250px;
height: 64px;
transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
&:hover{
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.25);

}
`
const IndexPage = ({ data }) => (

  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Diseño UI + Prototipos </h1>
        <p>Interaction es la única empresa en México dedicada 100% al diseño UI/UX y prototipos de apps. Ayudamos a las empresas y startups en el diseño de pantallas, experiencia de usuario y  prototipos interactivos para que puedan desarrollar software increíble.</p>
        <BtnGroup>
          <MainBtn to="/page-2/">Cotizar Ya</MainBtn>
          <SideBtn to="/page-2/">Conocer Más</SideBtn>
        </BtnGroup>

        <Wave />
      </div>
    </div>
    <GifsArea>
      <Gif image={require('../images/pagination_UI.gif')} ></Gif>
      <ShadowGif image={require('../images/enterprise_UI.gif')}></ShadowGif>
      <Gif image={require('../images/switch_UI.gif')} ></Gif>
      <Gif image={require('../images/socialshare_UI.gif')} ></Gif>
      <Gif image={require('../images/hamburguermenu_UI.gif')} ></Gif>
      <Gif image={require('../images/searchbar_UX.gif')} ></Gif>

    </GifsArea>
    <BenefitsArea>
      <GifWrapper>
        <Gif image={require('../images/cards_UI.gif')} ></Gif>
      </GifWrapper>
      <Benefit>
        <div>
          <BenefitTitle>Cultura de diseño</BenefitTitle>
          <BenefitSubTitle> Calidad visual y funcional </BenefitSubTitle>
          <BenefitsParagraph>El objetivo es que tú app tenga un gran aspecto visual y que ofrezca una gran experiencia de usuario para que puedas hacer software de calidad mundial.
Un gran diseño de interfaz te ayudará a alcanzar tus objetivos de negocios u organizacionales.</BenefitsParagraph>
        </div>
      </Benefit>
    </BenefitsArea>
    <BenefitsAreaReversed>
      <div>
        <BenefitTitle>Visión Clara</BenefitTitle>
        <BenefitSubTitle> Diseña antes de desarrollar </BenefitSubTitle>
        <BenefitsParagraph>
          Tener diseños de UI y un prototipo online te permite poder presentar tu visión a  ejecutivos, desarrolladores o inversionistas sin necesidad de desarrollar partes de tu app.

Interaction te ayudará a poder envisionar y dar forma a tu app antes de gastar preciadas horas de desarrollo.
        </BenefitsParagraph>
      </div>
      <GifWrapper>
        <Gif image={require('../images/ux_collaboration.png')} ></Gif>
      </GifWrapper>

    </BenefitsAreaReversed>
    <BenefitsArea>
      <GifWrapper>
        <Gif image={require('../images/microinteractions.gif')} ></Gif>
      </GifWrapper>
      <Benefit>
        <div>
          <BenefitTitle>Modernidad</BenefitTitle>
          <BenefitSubTitle> Interacciones únicas</BenefitSubTitle>
          <BenefitsParagraph>
            El diseño de interacciones táctiles y animaciones es muy efectivo para deleitar a los usuarios y crear algo fuera lo establecido.

Interaction puede ayudarte a definir features nuevos, proponer interacciones o trabajar en funcionalidades poco convencionales con herramientas de diseño experimentales
          </BenefitsParagraph>
        </div>
      </Benefit>
    </BenefitsArea>
    <BenefitsAreaReversed>
      <div>
        <BenefitTitle>Developer Friendly</BenefitTitle>
        <BenefitSubTitle> Diseñadores de software</BenefitSubTitle>
        <BenefitsParagraph>
        Interaction diseña proyectos de UI/UX y prototipos que son posibles de implementar,s dentro de los límites tecnológicos y lógicos de la plataforma ya sea iOS, Android o web apps. 
  
  Generamos especificaciones de desarrollo o el código relevante al UI/UX dependiendo de la necesidad del cliente. Así asegurándonos de que el diseño se pueda implementar fácilmente.
        </BenefitsParagraph>
      </div>
      <GifWrapper>
        <Gif image={require('../images/developer_specs.png')} ></Gif>
      </GifWrapper>

    </BenefitsAreaReversed>
    <ActionContainer>
      <MainBtnNoBorder>Cotiza Ya</MainBtnNoBorder>
    </ActionContainer>
    
    <SectionCaption>Herramientas principales</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image} />
      ))}
    </SectionCellGroup>
    <ActionContainer>
    <SpecialBtn>Conocer más</SpecialBtn>
    </ActionContainer>

  </Layout >

)

export default IndexPage



