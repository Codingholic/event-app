import React from 'react'
import "./Events.css"
import { BsFillPinAngleFill } from 'react-icons/bs';
const Events = () => {
    return (
        <>
            <h4 className='uppercase text-white text-center mt-3 px-1 text-lg'>Events</h4>

            <button className='primary move_button active_button_event'><BsFillPinAngleFill />Sunburn</button>
            <button className='primary move_button active_button_event'><BsFillPinAngleFill />Sunburn</button>
            <button className='primary move_button active_button_event'><BsFillPinAngleFill />Sunburn</button>
            <button className='primary move_button active_button_event'><BsFillPinAngleFill />Sunburn</button>
            <button className='primary move_button active_button_event'><BsFillPinAngleFill />Sunburn</button>
            <button className='primary move_button active_button_event'><BsFillPinAngleFill />Sunburn</button>
        </>
    )
}

export default Events