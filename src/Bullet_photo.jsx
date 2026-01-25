import React from 'react'
import { Link } from 'react-router-dom'

export default function Bullet_photo() {
    return (
        <div className='bullet-sec'>
            <div className='bu-text1'>
                <p>Finding IT excellence in Greece with Ulysses Systems makes sense.<br />
                    For Ulysses, I.T. excellence means to <span style={{ color: 'blue' }}> <Link to="/link2"> “keep in step with how urgently ship managers need software to be understandable and extensible.”</Link> </span>Ulysses Systems Task Assistant® Ship Management Software supports and provides solutions that work for the maritime enterprise.</p>
            </div>
            <div className='bul-img'>
                <img src='./images/bullt-img.jpg' />
            </div>
        </div>
    )
}
