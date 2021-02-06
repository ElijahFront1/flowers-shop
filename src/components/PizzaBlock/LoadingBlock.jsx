import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="132" cy="142" r="115" /> 
        <rect x="0" y="300" rx="5" ry="5" width="280" height="26" /> 
        <rect x="0" y="339" rx="6" ry="6" width="280" height="84" /> 
        <rect x="8" y="432" rx="3" ry="3" width="91" height="31" /> 
        <rect x="49" y="451" rx="0" ry="0" width="9" height="0" /> 
        <rect x="144" y="427" rx="21" ry="21" width="130" height="31" />
      </ContentLoader>
    )
}

export default LoadingBlock
