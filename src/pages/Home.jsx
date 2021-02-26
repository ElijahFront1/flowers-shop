import React from 'react'
import Bonuses from '../components/home/Bonuses/Bonuses'
import MostPopular from '../components/home/NewArrival/MostPopular'
import Slider from '../components/home/Slider/SliderArea'

function Home() {
    return (
        <div>
            <Slider />
            <Bonuses />
            <MostPopular />
        </div>
    )
}

export default Home
