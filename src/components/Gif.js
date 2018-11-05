import React from 'react'
import './Gif.css'

const Gif = props => (
    <img alt="UI GIF" width="400" src={props.image}></img>
)

export default Gif