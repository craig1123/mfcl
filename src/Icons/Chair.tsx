import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Chair: React.FunctionComponent<Props> = ({ width = '26', height = '22', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 26 22" {...rest}>
    <mask id="s1vlh7hm2a" width="26" height="22" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M22.5 10c-.544.003-1.071.186-1.5.52v-7c.005-.932-.361-1.827-1.018-2.488C19.325.372 18.432 0 17.5 0h-9C6.567 0 5 1.567 5 3.5v7c-.431-.327-.959-.503-1.5-.5-1.077-.007-2.037.68-2.378 1.701-.342 1.022.013 2.147.878 2.789v7c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5v-2h14v2c0 .276.224.5.5.5h3c.276 0 .5-.224.5-.5v-7c.865-.642 1.22-1.767.878-2.789-.34-1.022-1.3-1.708-2.378-1.701zM6 14.5V13h14v1.5H6zM8.5 1C7.12 1 6 2.12 6 3.5V12h14V3.5C20 2.12 18.88 1 17.5 1h-9zm14.75 12.79c-.157.086-.253.251-.25.43V21h-2v-2.5H5V21H3v-6.78c.003-.179-.093-.344-.25-.43-.464-.263-.75-.756-.75-1.29 0-.828.672-1.5 1.5-1.5.534 0 1.027.286 1.29.75.036.107.111.196.21.25v3.5h16V12c.09-.042.164-.112.21-.2.25-.484.746-.79 1.29-.8.828 0 1.5.672 1.5 1.5 0 .534-.286 1.027-.75 1.29zM13 7.25c.552 0 1-.56 1-1.25s-.448-1.25-1-1.25-1 .56-1 1.25.448 1.25 1 1.25z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#s1vlh7hm2a)">
      <path fill={fillColor} d="M-2 -4H28V26H-2z" />
    </g>
  </svg>
)

export default Chair
