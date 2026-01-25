import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className='future-ai'>
            <div className='future-tech'>
                <h1>Futureproof Technologies</h1>
                <p className='ft-text' style={{ textAlign: 'justify' }}>We are allowed to speak about futureproof software technologies when software is understandable, extensible, upgradeable and offers assistance at the board-room level. That is, software:</p>

                <p style={{ textAlign: 'justify' }}> ✦ that goes beyond record-keeping and compliance assistance<br />
                    ✦ and beyond being a personal productivity tool<br />
                    ✦ by offering coordination, risk and opportunities warnings for decision-makers<br />
                    ✦ and has the architecture to grow together with the maritime enterprise, the industry and its concerns</p>
            </div>

            <div className='future-tech'>
                <h1>AI and Automation</h1>
                <p className='ft-text' style={{ textAlign: 'justify' }}>Some of the challenges today with AI and automation is teaching the software to do what humans do, which is not simple. If AI is to compensate for what people do, fortunately there are experts in each domain, who can assist in teaching the software what people do.</p>

                <p style={{ textAlign: 'justify' }}>
                    And for ship owners and ship managers seriously interested in what AI can do for the maritime enterprise the following link leads to a discussion on the essentials of creating training material for a machine:<span>Automated Learning for Computers Useful for the Maritime Vertical </span>
                </p>
            </div>
        </div>
    )
}
