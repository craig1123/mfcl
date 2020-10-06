import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Comfort: React.FunctionComponent<Props> = ({ width = '24', height = '11', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 24 11" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M3.71 5.773h-.14c-1.246.086-2.329-.846-2.43-2.09-.028-.242.125-.467.36-.53.4-.11 9.74-2.59 11.14-2.78h2.78c1.75.02 5.02.04 5.5-.28.225-.158.534-.11.7.11.158.216.113.518-.1.68-.65.49-2.84.49-6.11.49-.409 0-.811-.008-1.18-.015-.648-.013-1.19-.024-1.47.015-1.04.12-7.11 1.69-10.56 2.6.256.524.81.835 1.39.78l3.91-.61c.037-.056.077-.11.12-.16.67-.67 3.75-1.29 4.6-1.39l.023-.002c.3-.023 3.397-.264 4.257.692.095.094.148.221.148.355 0 .133-.053.26-.148.355-.194.19-.506.19-.7 0-.32-.36-2.2-.5-3.43-.36-1.378.167-2.725.53-4 1.08.096.13.2.253.31.37.277.305.66.495 1.07.53.87-.071 1.731-.229 2.57-.47H12.55c1.468.279 2.956.44 4.45.48 1.407-.134 2.748-.661 3.87-1.52.141-.111.33-.138.497-.071.167.066.285.217.31.395.025.177-.046.355-.187.466-1.298 1-2.857 1.605-4.49 1.74-1.518-.033-3.03-.194-4.52-.48-.891.252-1.806.413-2.73.48-.944-.058-1.788-.61-2.22-1.45l-3.82.59zm19.2 1.87h.59c.272.005.49.227.49.5 0 .276-.224.5-.5.5h-.59c-1.715.01-3.413.35-5 1l-.76.31c-1.713.673-3.54 1.012-5.38 1-1.688 0-3.363-.295-4.95-.87l-1.7-.62c-1.475-.552-3.035-.84-4.61-.85-.276 0-.5-.224-.5-.5 0-.277.224-.5.5-.5 1.688-.002 3.364.292 4.95.87l1.7.62c3.116 1.136 6.541 1.083 9.62-.15l.76-.31c1.714-.67 3.54-1.01 5.38-1z"
      clipRule="evenodd"
    />
  </svg>
)

export default Comfort
