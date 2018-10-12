import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;

`
const Text = styled.h2`

color: #486791;
/* max-width: 500px; */
margin: 0 auto;
/* font-family: "Poppins"; */
font-weight: 400;
`

const Button = styled.button`
    background: linear-gradient(109.57deg, #1E16A3 0%, #7E4270 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover{
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        transform: translateY(-3px);
    }
`

const LinkGroup = styled.div`

width: 500px;
margin: 50px auto;
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 10px;

a{
    transition: 0.8s;
}

a:hover{
    color: #486791;
}

`

const Copyright = styled.div`
    color: "#486791"
    max-width: 500px; 
    margin: 0 auto;
    padding: 0 20px;
    font-size: 18px;
`

const Footer = ({ data, children }) => (

    <FooterGroup>
        <Text>Design is not just what it looks and feels like. Design is how it works.</Text>
        <Button>Cotizar Ya</Button>
        <LinkGroup>{data.allContentfulLink.edges.map(edge => (
            <a href={edge.node.url}>{edge.node.title}</a>
        ))}
        </LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer;