import React from 'react'
import './ShadowGif.css'

const Gif = props => (
    <img className="Shadowed" alt="UI GIF" width="400" src={props.image}></img>
)

export default Gif