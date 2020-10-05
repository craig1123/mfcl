import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Pinterest: React.FunctionComponent<Props> = ({ width = '20', height = '25', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 20 25" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M5.15 23.85c.093.093.218.147.35.15.105.008.21-.016.3-.07.919-.53 1.678-1.297 2.2-2.22.37-.9 1.31-3.32 1.74-4.45.84.482 1.791.737 2.76.74C18 18 20 13.15 20 9c0-3.11-2-9-9.5-9C1.89 0 0 6.5 0 9c0 2.81 2.69 7 4.5 7 .23.01.436-.14.5-.36l.37-1.38L4 20.4c-.192 1.268.236 2.55 1.15 3.45zM9 7c-.671-.029-1.324.226-1.8.7-.474.476-.729 1.129-.7 1.8.061.624.23 1.233.5 1.8.03.101.03.209 0 .31l-2 9c-.108.797.108 1.604.6 2.24.601-.4 1.101-.934 1.46-1.56.51-1.13 2-4.93 2-5 .06-.151.191-.263.35-.3.157-.05.329-.011.45.1.758.58 1.685.9 2.64.91 6.19 0 6.5-6.66 6.5-8 0-3-1.79-8-8.5-8C2.71 1 1 6.77 1 9c.19 2.317 1.33 4.453 3.15 5.9l.79-2.75c-.637-.733-.973-1.68-.94-2.65 0-3.94 3.27-6 6.5-6 2.897-.13 5.354 2.104 5.5 5 0 2.09-1.89 6.5-4 6.5-.672.023-1.324-.234-1.8-.71-.474-.472-.727-1.122-.7-1.79-.002-.133.053-.26.15-.35.79-1.062 1.26-2.329 1.35-3.65.04-.36-.069-.72-.3-1-.483-.377-1.09-.555-1.7-.5zm1.51 5.68c.014.383.184.745.47 1 .283.24.65.356 1.02.32 1.12 0 3-3.44 3-5.5-.145-2.344-2.155-4.131-4.5-4-2.65 0-5.5 1.56-5.5 5-.055.784.237 1.552.8 2.1.054.04.098.091.13.15l.07-.21c-.269-.636-.43-1.311-.48-2-.06-.946.284-1.872.948-2.548C7.133 6.316 8.053 5.955 9 6c.872-.072 1.737.2 2.41.76.418.464.631 1.077.59 1.7-.08 1.52-.598 2.986-1.49 4.22z"
      clipRule="evenodd"
    />
  </svg>
)

export default Pinterest
