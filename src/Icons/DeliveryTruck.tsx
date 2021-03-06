import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const DeliveryTruck: React.FunctionComponent<Props> = ({
  width = '30',
  height = '30',
  fillColor = '#2D2926',
  ...rest
}) => (
  <svg width={width} height={height} viewBox="0 0 30 30" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M27 16.33l-2-5.67c-.362-1.015-1.333-1.684-2.41-1.66H19V7.5C19 6.12 17.88 5 16.5 5h-11C4.12 5 3 6.12 3 7.5v14c0 .828.672 1.5 1.5 1.5h1.55c.176 1.232 1.23 2.147 2.475 2.147 1.244 0 2.3-.915 2.475-2.147h9.1c.237 1.165 1.261 2.003 2.45 2.003 1.189 0 2.213-.838 2.45-2.003h.55c.809-.027 1.45-.69 1.45-1.5v-5c.01-.056.01-.114 0-.17zM5.5 6h11c.828 0 1.5.672 1.5 1.5V18H4V7.5C4 6.672 4.672 6 5.5 6zM7 22.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5S9.328 21 8.5 21 7 21.672 7 22.5zM22.5 24c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm3-2c.276 0 .5-.224.5-.5v-4.91L24 11c-.211-.598-.776-.998-1.41-1H19v8.5c0 .276-.224.5-.5.5H4v2.5c0 .276.224.5.5.5h1.6c.237-1.165 1.261-2.003 2.45-2.003 1.189 0 2.213.838 2.45 2.003h9.1c.237-1.165 1.261-2.003 2.45-2.003 1.189 0 2.213.838 2.45 2.003h.5zM21 15v-3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v4c0 .276.224.5.5.5H24c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-3zm-4.5-2.987c-.002 3.037-2.464 5.497-5.5 5.497-3.04-.006-5.5-2.47-5.5-5.51.006-3.036 2.47-5.494 5.507-5.49 3.036.004 5.495 2.467 5.493 5.503zM11 7.51c1.821 0 3.463 1.097 4.158 2.78.696 1.683.31 3.62-.98 4.905-1.289 1.287-3.226 1.67-4.907.97S6.496 13.82 6.5 12c.011-2.48 2.02-4.485 4.5-4.49zm2 7.002c-.133 0-.26-.055-.35-.152l-2-2.01c-.097-.09-.152-.217-.15-.35V9c0-.276.224-.5.5-.5s.5.224.5.5v2.8l1.85 1.86c.097.09.152.217.152.35 0 .133-.055.26-.152.35-.09.097-.217.152-.35.152z"
      clipRule="evenodd"
    />
  </svg>
)

export default DeliveryTruck
