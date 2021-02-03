import React from 'react'
import Bonuses from './Bonuses/Bonuses'
import NewArrivalItems from './NewArrivalItems/NewArrivalItems'
import Slider from './Slider/SliderArea'
import Actions from './Actions/Actions'

function Home() {
    return (
        <div>
            <Slider />
            <Bonuses />
            <Actions />
            <NewArrivalItems />
        </div>
    )
}

export default Home
