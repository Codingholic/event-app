import React from 'react'
import "./Cards.css"
const Cards = () => {
    return (
        <div class="card-container">
            <span class="pro">Active</span>
            <div className='profile_move'>
            <img class="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
            </div>
            <h3>LORETTO FERNANDES</h3>
            <h6><strong>Event Planner</strong></h6>
            <p><strong>Event Name</strong><br/>Sunburn Goa</p>
            <div class="buttons">
                <button class="primary">
                    Track Event
                </button>
                <button class="primary ghost">
                    View Profile
                </button>
            </div>
            <div class="skills">
                <h6>Skills</h6>
                <ul>
                    <li>UI / UX</li>
                    <li>Front End Development</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                </ul>
            </div>
        </div>
    )
}

export default Cards