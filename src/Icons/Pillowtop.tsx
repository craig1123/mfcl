import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Pillowtop: React.FunctionComponent<Props> = ({ width = '24', height = '24', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 24 24" {...rest}>
    <mask id="wjmybce4ea" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M2 0h20c1.105 0 2 .895 2 2v4.5c0 .276-.224.5-.5.5H.5C.224 7 0 6.776 0 6.5V2C0 .895.895 0 2 0zm20 1c.552 0 1 .448 1 1v4H1V2c0-.552.448-1 1-1h20zM0 8.5c0-.276.224-.5.5-.5h23c.276 0 .5.224.5.5s-.224.5-.5.5H.5C.224 9 0 8.776 0 8.5zm0 15c0-.276.224-.5.5-.5h23c.276 0 .5.224.5.5s-.224.5-.5.5H.5c-.276 0-.5-.224-.5-.5zM.5 10c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5s.5-.224.5-.5v-11c0-.276-.224-.5-.5-.5zm2.37.5c0-.276.224-.5.5-.5s.5.224.5.5v11c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-11zm3.38-.5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5s.5-.224.5-.5v-11c0-.276-.224-.5-.5-.5zm2.37.5c0-.276.224-.5.5-.5s.5.224.5.5v11c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-11zM23.5 10c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5s.5-.224.5-.5v-11c0-.276-.224-.5-.5-.5zm-3.38.5c0-.276.224-.5.5-.5s.5.224.5.5v11c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-11zm-2.37-.5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5s.5-.224.5-.5v-11c0-.276-.224-.5-.5-.5zm-3.38.5c0-.276.224-.5.5-.5s.5.224.5.5v11c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-11zM12 10c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5s.5-.224.5-.5v-11c0-.276-.224-.5-.5-.5z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#wjmybce4ea)">
      <path fill={fillColor} d="M-3 -3H27V27H-3z" />
    </g>
  </svg>
)

export default Pillowtop
