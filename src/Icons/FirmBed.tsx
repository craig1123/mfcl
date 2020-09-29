import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const FirmBed: React.FunctionComponent<Props> = ({ width = '24', height = '11', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 24 11" {...rest}>
    <mask id="83l0jsw3ka" width="24" height="11" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M0 1C0 .724.224.5.5.5h23c.276 0 .5.224.5.5s-.224.5-.5.5H.5C.224 1.5 0 1.276 0 1zm23.5 1.5H.5c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5H1v2c0 .276.224.5.5.5s.5-.224.5-.5v-2h20v2c0 .276.224.5.5.5s.5-.224.5-.5v-2h.5c.276 0 .5-.224.5-.5V3c0-.276-.224-.5-.5-.5zM1 3.5v4h22v-4H1z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#83l0jsw3ka)">
      <path fill={fillColor} d="M-3 -10H27V20H-3z" />
    </g>
  </svg>
)

export default FirmBed
