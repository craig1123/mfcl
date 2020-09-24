import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Support: React.FunctionComponent<Props> = ({ width = '25', height = '24', fillColor = '#2D2926', ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...rest} fill="none" viewBox="0 0 25 24">
    <mask id="fhqczot59a" width="25" height="24" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10.61 7.89c.146-.234.452-.31.69-.17.217.144.29.429.17.66L9.9 11c-.094.163-.272.26-.46.25-.18-.002-.347-.096-.44-.25L7.5 8.43c-.07-.114-.09-.25-.059-.38.032-.13.114-.242.229-.31.238-.14.544-.064.69.17L9 9V1.23c.005-.274.226-.495.5-.5.276 0 .5.224.5.5V9l.61-1.11zm-6.3-.72c.146-.234.452-.31.69-.17.214.148.28.434.15.66l-1.57 2.62c-.089.154-.252.249-.43.25-.18-.003-.345-.098-.44-.25L1.14 7.66c-.144-.237-.067-.546.17-.69.237-.144.546-.067.69.17l.67 1.12v-7c0-.276.224-.5.5-.5.274.005.495.226.5.5v7l.64-1.09zm13.07.55c-.235-.138-.538-.063-.68.17L16.05 9V1.23c0-.276-.224-.5-.5-.5s-.5.224-.5.5V9l-.65-1.09c-.142-.233-.445-.308-.68-.17-.117.066-.201.178-.233.308s-.01.269.063.382L15.11 11c.1.153.268.246.45.25.18-.002.346-.096.44-.25l1.57-2.62c.116-.236.034-.522-.19-.66zm5.4-.55c.146-.234.452-.31.69-.17.115.068.197.18.229.31s.01.266-.059.38l-1.57 2.62c-.089.154-.252.249-.43.25-.18-.003-.345-.098-.44-.25l-1.57-2.62c-.093-.154-.097-.345-.01-.502.086-.158.25-.257.43-.26.18-.004.347.088.44.242l.65 1.09v-7c0-.276.224-.5.5-.5.274.005.495.226.5.5v7l.64-1.09zm1.66 6.21c-.004-.167-.09-.32-.23-.41-1.55-.895-3.3-1.386-5.09-1.43-1.27.048-2.519.35-3.67.89-.943.44-1.961.698-3 .76-1.039-.062-2.057-.32-3-.76-1.151-.54-2.4-.842-3.67-.89-1.782.058-3.521.56-5.06 1.46-.143.087-.23.243-.23.41v9.05c-.005.392.145.771.42 1.052.273.282.647.443 1.04.448H23c.814-.016 1.461-.686 1.45-1.5v-9l-.01-.08zM1.93 22.93H23c.13-.003.254-.057.344-.15.09-.094.139-.22.136-.35v-8.7c-1.341-.727-2.835-1.128-4.36-1.17-1.143.048-2.265.324-3.3.81-1.045.493-2.176.778-3.33.84h-.06c-1.15-.063-2.278-.349-3.32-.84-1.035-.486-2.157-.762-3.3-.81-1.528.045-3.024.445-4.37 1.17v8.7c0 .272.218.494.49.5z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#fhqczot59a)">
      <path fill={fillColor} d="M-2 -4H28V26H-2z" />
    </g>
  </svg>
)

export default Support
