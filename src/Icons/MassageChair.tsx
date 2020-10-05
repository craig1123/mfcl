import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const MassageChair: React.FunctionComponent<Props> = ({
  width = '21',
  height = '25',
  fillColor = '#2D2926',
  ...rest
}) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 21 24" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M17.62 19.06c.03.506.434.91.94.94.52-.008 1.02.193 1.391.558.37.364.58.862.579 1.382V23c0 .552-.448 1-1 1H3.9c-.258.005-.506-.102-.678-.294-.173-.192-.254-.45-.222-.706l.64-7.26c.046-.424.143-.84.29-1.24L.65 2.36C.521 1.88.59 1.37.84.94 1.095.505 1.512.189 2 .06c.163-.04.331-.061.5-.06.7-.003 1.343.382 1.67 1 .117-.06.241-.103.37-.13.12-.015.24-.015.36 0 .621 0 1.17.406 1.35 1l.92 3.43c.094.358.041.739-.146 1.058-.188.32-.495.55-.854.642-.11.01-.22.01-.33 0L7 11.34c.574-.223 1.184-.338 1.8-.34h3c1.222-.007 2.293.817 2.6 2l.66 2.78h1c.416 0 .814.166 1.107.46.292.295.456.695.453 1.11v1.71zM4.89 1.89h-.08c-.168.049-.269.22-.23.39l.57 2.15.35 1.3c.045.132.171.217.31.21h.11c.08-.023.149-.077.19-.15.04-.075.04-.165 0-.24L5.2 2.12c-.043-.135-.168-.228-.31-.23zM2.3 1.1c.066-.01.134-.01.2 0 .378-.01.715.237.82.6l.19.73v.15L4.45 6v.09L6 11.81c-.519.336-.975.759-1.35 1.25l-2.94-11c-.1-.428.163-.856.59-.96zM4 23l.6-7.17c.192-2.174 2.018-3.838 4.2-3.83h3c.77 0 1.442.523 1.63 1.27L15.86 23H4zm11.3-6.22L16.85 23h2.65v-1.06c0-.52-.42-.94-.94-.94-.521.01-1.025-.189-1.398-.554-.372-.365-.582-.864-.582-1.386v-1.71c0-.31-.25-.565-.56-.57h-.72z"
      clipRule="evenodd"
    />
  </svg>
)

export default MassageChair
