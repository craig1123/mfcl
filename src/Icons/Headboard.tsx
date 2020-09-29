import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Headboard: React.FunctionComponent<Props> = ({ width = '24', height = '14', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 24 16" {...rest}>
    <mask id="did4fm0a2a" width="24" height="16" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M3 0h18c1.657 0 3 1.343 3 3v6c0 .276-.224.5-.5.5H22v6c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-6H3v6c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-6H.5C.224 9.5 0 9.276 0 9V3c0-1.657 1.343-3 3-3zM1 8.5h22V3c0-1.105-.895-2-2-2H3c-1.105 0-2 .895-2 2v5.5z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#did4fm0a2a)">
      <path fill={fillColor} d="M-3 -7H27V23H-3z" />
    </g>
  </svg>
)

export default Headboard
