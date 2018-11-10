import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
    background: url(${props => props.image});
    height: 1020px;
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;

    @media (max-width: 720px){
        grid-template-columns: 1fr;
    }
`
const SectionLogo = styled.img`
align-self: end;
width: 128px;
margin: 0 auto;
`

const SectionTitleGroup = styled.div`
    display: grid;

    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const SectionTitle = styled.h3`
color: white;
font-size: 60px;
margin: 0;
line-height: 1.2;
align-self: center;
text-align: center;

@media (max-width: 720px) {
    font-size: 40px;
}
`

const SectionText = styled.p`
color: white;
margin-top: 50px;
`

const WaveBottom = styled.div` 
    position: absolute;
    width: 100%;
    bottom: -6px;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg);
`

const Section = props => (

    <SectionGroup image={props.image}>
        s        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section; 