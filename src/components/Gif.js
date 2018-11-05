import React from 'react'
import './Gif.css'

const Gif = props => (
    <img alt="UI GIF" width="350" src={props.image}></img>
)

export default Gif