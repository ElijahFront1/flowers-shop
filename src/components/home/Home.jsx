import React from 'react'
import Bonuses from './Bonuses/Bonuses'
import NewArrival from './NewArrival/NewArrival'
import Slider from './Slider/SliderArea'

function Home() {
    return (
        <div>
            <Slider />
            <Bonuses />
            <NewArrival />
        </div>
    )
}

export default Home
