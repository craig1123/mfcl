import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const MapMarker: React.FunctionComponent<Props> = ({ width = '18', height = '25', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 18 25" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M9 1c2.176-.056 4.284.756 5.86 2.257 1.576 1.5 2.49 3.567 2.54 5.743 0 1.56-.95 3.94-2.63 7-.42.76-.88 1.55-1.37 2.36-.86 1.43-1.79 2.86-2.71 4.22l-.9 1.3-.34.48L9 25l-.45-.63-.34-.48-.9-1.3c-.92-1.36-1.85-2.79-2.71-4.22-.49-.81-.95-1.6-1.37-2.36C1.55 13 .6 10.58.6 9c.05-2.176.964-4.242 2.54-5.743C4.716 1.756 6.824.944 9 1zM4.283 11.408c.802 1.89 2.665 3.106 4.717 3.082 1.336 0 2.617-.535 3.557-1.486.94-.95 1.459-2.237 1.443-3.574 0-2.052-1.24-3.9-3.138-4.68-1.898-.78-4.079-.336-5.521 1.124-1.443 1.46-1.86 3.646-1.058 5.534zm8.355-.467c-.611 1.468-2.048 2.423-3.638 2.42-1.044.007-2.047-.405-2.784-1.144-.738-.739-1.147-1.743-1.136-2.787 0-1.59.959-3.024 2.428-3.632 1.47-.607 3.161-.27 4.285.857 1.123 1.126 1.456 2.818.845 4.286zm-.198 6.89c-.85 1.41-1.76 2.82-2.68 4.17L9 23.07l-.76-1.13c-.92-1.35-1.83-2.76-2.68-4.17-.49-.8-.94-1.58-1.35-2.32C2.62 12.56 1.72 10.3 1.72 9c.052-1.879.849-3.66 2.214-4.95C5.3 2.761 7.122 2.066 9 2.121c1.888-.055 3.72.648 5.087 1.952 1.367 1.303 2.156 3.099 2.193 4.987 0 1.3-.9 3.56-2.49 6.45-.41.74-.86 1.52-1.35 2.32z"
      clipRule="evenodd"
    />
  </svg>
)

export default MapMarker
