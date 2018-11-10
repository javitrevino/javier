import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../components/Card'
import Section from '../components/Section';
import Link from 'gatsby-link'



const ScreensGroup = styled.div`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(4, 1fr);
 justify-items: center;

    justify-content: center;
    margin-bottom: 120px;

    @media (max-width: 647px) {
        grid-template-columns: 1fr;

    }

`

const MicroGroup = styled.div`
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    margin-bottom: 112px;
    justify-items: center;
    @media (max-width: 647px) {
        grid-template-columns: 1fr;
    grid-gap: 64px; 

    }s
`

const ViewPrototype = styled.div`
    display grid;
      justify-content: center;	
      justify-items: center;
    background: black;
    color: white;
    padding-top: 48px;
    padding-bottom:48px;
  

`

const GroupHeader = styled.div`
display: grid;
justify-content: center;
justify-items: center;
margin-top: 88px;
padding-bottom: 88px;

`

const ActionContainer = styled.div`
display: grid;
justify-content: center;
padding-top: 80px;
padding-bottom: 80px;
background-color: #ebeeff;


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

const MainBtnNoBorder = styled.a` 
@media (max-width: 576px){
  font-size: 18px !important;
}
text-align: center;
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
text-align: center;
transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
&:hover{
    /* background: 0 10px 20px rgba(0,0,0, 0.85); */
    color: #dcdde1;
    box-shadow: 0 10px 20px rgba(0,0,0, 0.25);

}


`

const ProjectPage = ({ data }) => (
    <Layout>
        <div className="HeroProject">
            <div className="HeroAltGroup">
                <h1>Bee Working</h1>
                <h2>Tecnólogico de Monterrey</h2>
                <p>
                    Bee Working es una propuesta de app móvil que se diseñó para el Tec de Monterrey, su propósito es
 el de ayudar a los estudiantes de finanzas a colaborar en sus proyectos escolares en equipo
 y actuar como una central para contenidos de educación financiera. La interfaz es simple y
 minimalista haciendo énfasis en el contenido primero, en crear un producto que ayude a los usuarios a
 colaborar en harmonia por medio de esta app en sus smartphones.
           </p>
            </div>

        </div >
        <GroupHeader>
            <h1 className="PieceHeaderTitle">Diseños de pantalla</h1>
        </GroupHeader>
        <ScreensGroup>
            <img className="Screen" src={require('../images/tec1.png')} />
            <img className="Screen" src={require('../images/tec2.png')} />
            <img className="Screen" src={require('../images/tec3.png')} />
            <img className="Screen" src={require('../images/tec4.png')} />
            <img className="Screen" src={require('../images/tec5.png')} />
            <img className="Screen" src={require('../images/tec6.png')} />
            <img className="Screen" src={require('../images/tec7.png')} />
            <img className="Screen" src={require('../images/tec8.png')} />
        </ScreensGroup>
        <ActionContainer>
            <SpecialBtn href="/portfolio">Otros Proyectos</SpecialBtn>
        </ActionContainer>



        <GroupHeader>
            <h1 className="PieceHeaderTitle">Interacciones animadas</h1>
        </GroupHeader>
        <MicroGroup>
            <img className="Screen" src={require('../images/tec_micro1.gif')} />
            <img className="Screen" src={require('../images/tec_micro2.gif')} />
            <img className="Screen" src={require('../images/tec_micro3.gif')} />
        </MicroGroup>
        <ActionContainer>
            <MainBtnNoBorder >Cotiza Ya</MainBtnNoBorder>
        </ActionContainer>
        <ViewPrototype>
            <a className="AnchorInvisionWrapper" href="https://invis.io/JKP13NMNSXF" target="_blank">
                <img src={require('../images/logo-invision.png')} width="64"></img>
                <h4 className="InvisionCta"> Ver prototipo en Invision </h4>

            </a>
        </ViewPrototype>


    </Layout >
)

export default ProjectPage