import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Minus: React.FunctionComponent<Props> = ({ width = '18', height = '2', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 18 2" {...rest}>
    <path
      fill={fillColor}
      d="M0 1C0 .74.21.53.47.53h17.06c.26 0 .47.21.47.47v.01c0 .26-.21.47-.47.47H.47c-.26 0-.47-.21-.47-.47V1z"
    />
  </svg>
)

export default Minus
