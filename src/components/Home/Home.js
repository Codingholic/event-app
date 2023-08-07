import React from 'react'
import "./Home.css"
import Tables from './Table/Tables'
import Cards from './Card/Cards'
import Events from './Events/Events'



const Home = () => {
    return (
        <div className="HomePage">
            <div className='card_parent'>
                <Cards />
                <div className='table_container'>
                    <Tables />
                </div>
                <div className='Events_container '>
                    <Events />
                </div>
            </div>
            <div className='List_Container'>
            </div>
        </div>
    )
}

export default Home