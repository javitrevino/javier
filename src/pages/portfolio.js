import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Card from '../components/Card'
import Section from '../components/Section';
import Link from 'gatsby-link'



const CardsGroup = styled.div`
    display: grid;
`
const PortfolioPage = ({ data }) => (
    <Layout>
        <div className="HeroAlt">
            <div className="HeroAltGroup">
                <h1>Portfolio</h1>
                <p>
                    Hecha un vistazo a algunos de nuestros proyectos hechos para clientes de Monterrey.
                    Nuestro portfolio te permitirá ver nuestro trabajo previo. Pronto publicaremos más proyectos.
           </p>
            </div>

        </div >
        <div className="Cards">
            <h2>Algunos de nuestros proyectos</h2>
            <div className="CardGroup">
                <Link to="/project">
                    <Card
                        title="Tec de Monterrey"
                        text="Bee Working App"
                        image={require('../images/wallpaper.jpg')} />
                </Link>
                <Card
                    title="Banregio"
                    text="División Automotriz"
                    image={require('../images/wallpaper2.jpg')} />
                <Card
                    title="AR Salud Integral"
                    text="iOS App"
                    image={require('../images/wallpaper3.jpg')} />
                <Card
                    title="Hola Vecino"
                    text="Smart Mobile App"
                    image={require('../images/wallpaper4.jpg')} />
                <Card
                    title="Prodynamics"
                    text="Android Material App"
                    image={require('../images/wallpaper.jpg')} />

                <Card
                    title="Oxxo Gas"
                    text="Desktop Web App"
                    image={require('../images/wallpaper.jpg')} />
            </div>
        </div>



    </Layout >
)

export default PortfolioPage