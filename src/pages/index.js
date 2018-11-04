import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/Card'
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

const IndexPage = () => (

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


