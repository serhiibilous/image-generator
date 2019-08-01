import React, {Fragment} from 'react'

const IconEyedropper = ({color}) => {
  return (
    <Fragment>
      <svg xmlns="http://www.w3.org/2000/svg"
           width="16" height="16" viewBox="0 0 16 16">
        <g fill={color} fillRule="nonzero">
          <path d="M1.162 11.76a.288.288 0 0 0-.072.12L.06 15.231a.288.288 0 0 0 .361.36l3.35-1.03a.287.287 0 0 0 .12-.07l5.37-5.37-2.73-2.73-5.37 5.37zM15.073.8l-.199-.2a2.016 2.016 0 0 0-2.848 0L8.37 4.255l-.276-.276a.956.956 0 0 0-.68-.281c-.257 0-.499.1-.68.282l-.078.077a.956.956 0 0 0-.282.68c0 .258.1.5.282.681l3.599 3.599a.956.956 0 0 0 .68.282c.257 0 .499-.1.68-.282l.078-.078a.963.963 0 0 0 0-1.36l-.275-.276 3.655-3.655a2 2 0 0 0 .59-1.424A2 2 0 0 0 15.073.8z"/>
        </g>
      </svg>
    </Fragment>
  )
}

export default IconEyedropper