import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Phone: React.FunctionComponent<Props> = ({ width = '16', height = '24', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 16 24" {...rest}>
    <mask id="vwua97rhha" width="16" height="26" x="0" y="-1" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.17 0h7.33c1.98-.045 3.62 1.521 3.67 3.5v17c-.05 1.979-1.69 3.545-3.67 3.5H4.17C2.19 24.045.55 22.479.5 20.5v-17C.55 1.521 2.19-.045 4.17 0zm7.33 1H4.17c-.679-.016-1.337.238-1.828.707-.491.469-.776 1.114-.792 1.793V4h12.57v-.5c-.016-.68-.3-1.324-.792-1.793C12.837 1.238 12.179.984 11.5 1zm.02 2c.276 0 .5-.224.5-.5s-.224-.5-.5-.5c-.139-.002-.272.052-.37.15-.098.09-.153.217-.15.35.01.28.24.5.52.5zM6.26 3H9.4c.276 0 .5-.224.5-.5S9.676 2 9.4 2H6.26c-.276 0-.5.224-.5.5s.224.5.5.5zm.62 18.032c-.017-.546.405-1.005.95-1.032.274-.014.541.085.74.275.198.189.31.45.31.725 0 .546-.439.99-.984.999-.546.008-.997-.422-1.015-.967zM11.5 23H4.17c-.679.016-1.337-.238-1.828-.707-.491-.47-.776-1.114-.792-1.793V19h12.57v1.5c-.016.679-.3 1.324-.792 1.793-.491.469-1.149.723-1.828.707zM1.55 5h12.57v13H1.55V5z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#vwua97rhha)">
      <path fill={fillColor} d="M-7 -3H23V27H-7z" />
    </g>
  </svg>
)

export default Phone
