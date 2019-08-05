import React, {Fragment} from 'react'

const IconLabel = () => {
  return (
    <Fragment>
      <svg xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink" width="223" height="223" viewBox="0 0 223 223">
        <defs>
          <path id="bull" d="M-51 167h495v59H-51z"/>
          <filter id="a" width="106.1%" height="150.8%" x="-3%" y="-20.3%" filterUnits="objectBoundingBox">
            <feOffset dy="3" in="SourceAlpha" result="shadowOffsetOuter1"/>
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="4.5"/>
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.223448427 0"/>
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="rotate(45 308.737 66.43)">
            <use fill="#000" filter="url(#a)" xlinkHref="#bull"/>
            <use fill="#95C8CF" xlinkHref="#bull"/>
          </g>
          <text fill="#FFF" fontFamily="GoodguesMain" fontSize="11"
                fontWeight="700" letterSpacing=".108" transform="rotate(45 302.497 77.784)">
            <tspan x="124.293" y="180.854">CAUTION! EVERY NEW</tspan>
            <tspan x="118.844" y="195.854">POST STARTS WITH ONE</tspan>
            <tspan x="122.215" y="210.854">CLICK OF YOUR MOUSE</tspan>
          </text>
        </g>
      </svg>
    </Fragment>
  )
}

export default IconLabel