import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const TempRegulation: React.FunctionComponent<Props> = ({
  width = '10',
  height = '26',
  fillColor = '#2D2926',
  ...rest
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...rest} fill="none" viewBox="0 0 10 26">
    <mask id="88dou23oja" width="10" height="26" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M7.64 7.22v9.56c1.074.755 1.724 1.977 1.75 3.29.156 1.325-.283 2.65-1.2 3.62l-.09.09c-1.745 1.63-4.455 1.63-6.2 0-.98-.97-1.457-2.34-1.29-3.71.026-1.313.676-2.535 1.75-3.29V3.61c-.003-.701.274-1.374.77-1.87.755-.758 1.893-.985 2.881-.575C7 1.575 7.643 2.54 7.64 3.61v3.61zM3.467 23.686c1.314.657 2.902.4 3.943-.636.746-.77 1.105-1.835.98-2.9-.003-1.095-.58-2.108-1.52-2.67-.147-.094-.237-.256-.24-.43v-1.53h-.2c-.282 0-.51-.228-.51-.51 0-.134.054-.263.15-.357.096-.094.226-.146.36-.143h.2v-1.59h-.2c-.282 0-.51-.228-.51-.51 0-.134.054-.263.15-.357.096-.094.226-.146.36-.143h.2v-1.6h-.2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.2v-1.6h-.2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h.2v-1.6h-.2c-.134.003-.264-.049-.36-.143-.096-.094-.15-.223-.15-.357 0-.282.228-.51.51-.51h.2v-.47c0-.43-.17-.843-.47-1.15C5.853 2.171 5.435 1.999 5 2c-.895.021-1.614.745-1.63 1.64v13.41c-.003.174-.093.336-.24.43-.227.135-.436.3-.62.49-.56.59-.88 1.367-.9 2.18-.205 1.455.543 2.879 1.857 3.536zM5.5 18V8.56c0-.276-.224-.5-.5-.5s-.5.224-.5.5V18c-.485.093-.931.33-1.28.68-.722.72-.938 1.805-.549 2.747.39.942 1.31 1.557 2.329 1.557 1.02 0 1.939-.615 2.329-1.557.39-.942.173-2.027-.549-2.747-.35-.35-.795-.587-1.28-.68zm-1.077 3.86c.566.234 1.216.103 1.647-.33.586-.59.586-1.541 0-2.13-.431-.433-1.081-.564-1.647-.33-.565.232-.933.784-.933 1.395s.368 1.163.933 1.396z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#88dou23oja)">
      <path fill={fillColor} d="M-10 -2H20V28H-10z" />
    </g>
  </svg>
)

export default TempRegulation
