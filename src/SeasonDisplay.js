import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
  summer: {
    text: "it's hot!!",
    iconName: 'sun'
  },
  winter: {
    text: "I hate the cold",
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9){
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  // const text = (season === 'winter' ? 'Boo its cold!' : 'Yay its Summer!')
  // const icon = (season === 'winter' ? 'snowflake' : 'sun')

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-right massive spinner loading ${iconName} icon`} />
      <h1 >{text}</h1>
      <i className={`icon-left massive ${iconName} icon`} />
    </div>
  )
}

export default SeasonDisplay;
