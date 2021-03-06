import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Bouncer: React.FunctionComponent<Props> = ({ width = '20', height = '24', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 20 24" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M19 23h-1.83l-1.56-1.17c-1.208-.898-1.704-2.47-1.23-3.9.823-.425 1.579-.971 2.24-1.62 1.85-1.781 2.89-4.242 2.88-6.81 0-.191-.11-.365-.283-.448-.172-.083-.377-.06-.527.058-3.333 2.454-7.466 3.564-11.58 3.11-2.177-.19-4.192-1.227-5.61-2.89.086-4.438 3.569-8.065 8-8.33v2H7c-.276 0-.5.224-.5.5v2c0 .276.224.5.5.5s.5-.224.5-.5V4h5v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-2c0-.276-.224-.5-.5-.5h-2.5V.5c0-.276-.224-.5-.5-.5-2.566.002-5.023 1.04-6.812 2.88C1.4 4.72.43 7.205.5 9.77c.137 3.418 2.08 6.506 5.1 8.11.481 1.43-.01 3.007-1.22 3.91L2.83 23H1c-.276 0-.5.224-.5.5s.224.5.5.5h18c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zM1.62 10.91c1.518 1.296 3.395 2.098 5.38 2.3 4.018.44 8.066-.51 11.47-2.69-.53 4.371-4.309 7.616-8.71 7.48-4.039-.165-7.422-3.112-8.14-7.09zm5.13 7.49c.238 1.624-.434 3.248-1.75 4.23l-.5.37h10.99l-.49-.37c-1.305-.98-1.972-2.594-1.74-4.21-1.044.385-2.148.581-3.26.58h-.25c-1.026-.034-2.04-.237-3-.6z"
      clipRule="evenodd"
    />
  </svg>
)

export default Bouncer
