import React from 'react'
// import cashbackIcon from '../../../images/cashback-icon.png'
// import safetyIcon from '../../../images/safety-icon.png'
// import giftsIcon from '../../../images/gifts-icon.png'
import BonusesItem from './BonusesItem'

function Bonuses() {
    return (
        <div className="container">
            <div className="bonuses-wrap">
                <div className="bonuses">
                    <BonusesItem />
                    <BonusesItem />
                    <BonusesItem />
                    <BonusesItem />
                </div>
            </div>
        </div>
    )
}

export default Bonuses
