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

const SideBtn = styled.button` 
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
  grid-gap: 24px
  margin:64px;
  padding: 64px
  align-content: center;
 `

const Benefit = styled.div`

 `

const BenefitTitle = styled.h2`
 
 `
const BenefitSubTitle = styled.h3`
 
 `

const BenefitsParagraph = styled.p`
 
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
      <div>
        <Gif image={require('../images/cards_UI.gif')} ></Gif>
      </div>
      <Benefit>
        <div>
          <BenefitTitle>Cultura de diseño</BenefitTitle>
          <BenefitSubTitle> Calidad visual y funcional </BenefitSubTitle>
          <BenefitsParagraph>El objetivo es que tú app tenga un gran aspecto visual y que ofrezca una gran experiencia de usuario para que puedas hacer software de calidad mundial.
Un gran diseño de interfaz te ayudará a alcanzar tus objetivos de negocios u organizacionales.</BenefitsParagraph>
        </div>
      </Benefit>
    </BenefitsArea>
    <SectionCaption>Herramientas principales</SectionCaption>
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



