import React from 'react'
import Bonuses from '../components/home/Bonuses/Bonuses'
import NewArrival from '../components/home/NewArrival/NewArrival'
import Slider from '../components/home/Slider/SliderArea'

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
