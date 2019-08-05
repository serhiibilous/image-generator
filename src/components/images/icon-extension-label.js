import React from 'react'

const IconExtensionLabel = () => {
  return (
    <div className="parameter-selection__item-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
        <g fill="none" fillRule="evenodd">
          <path fill="#6D6D6D" d="M.5 1.568V.053l1.555 1.515zM24 25.026V23.51l1.555 1.515z"/>
          <path fill="#A6A6A6" fillRule="nonzero" d="M11.554.052l14.003 14.003L25.5 25 .5.052z"/>
          <text fill="#FFF" fontFamily="GoodguesMain" fontSize="4" fontWeight="900" letterSpacing=".067"
                style={{transformOrigin: '-14px -6px'}}
                transform="rotate(45 36.407 6.813)">
            <tspan x="17.328" y="13">SOON</tspan>
          </text>
        </g>
      </svg>
    </div>
  )
}

export default IconExtensionLabel