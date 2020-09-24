import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const CalKing: React.FunctionComponent<Props> = ({ width = '22', height = '24', fillColor = '#2D2926', ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...rest} fill="none" viewBox="0 0 22 24">
    <mask id="zog8wlhs5a" width="22" height="24" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M22 23.5c0 .276-.224.5-.5.5H.5c-.276 0-.5-.224-.5-.5V.5C0 .224.224 0 .5 0h21c.276 0 .5.224.5.5v23zM1 23h20V1H1v22zm1.5-.79h17c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-17c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5zm.5-1h16v-12H3v12zM4.56 1.93h4.32c.89 0 1.61.72 1.61 1.61v2.22c0 .89-.72 1.61-1.61 1.61H4.01c-.496-.001-.963-.23-1.27-.62-.306-.39-.416-.898-.3-1.38L3 3.15c.176-.718.82-1.223 1.56-1.22zM9.5 3.54v2.22c0 .164-.066.32-.182.435-.117.115-.274.178-.438.175H4c-.19.002-.37-.082-.49-.23-.11-.153-.15-.346-.11-.53L4 3.39c.069-.27.311-.46.59-.46h4.32c.33.01.59.28.59.61zm9.5-.39l.56 2.22h.01c.116.482.006.99-.3 1.38-.307.39-.774.619-1.27.62h-4.88c-.89 0-1.61-.72-1.61-1.61V3.54c0-.89.72-1.61 1.61-1.61h4.32c.74-.003 1.384.502 1.56 1.22zm-.52 2.99c-.12.148-.3.232-.49.23h-4.87c-.163.003-.321-.06-.438-.175-.116-.115-.182-.271-.182-.435V3.54c0-.164.066-.32.182-.435.117-.115.274-.178.438-.175h4.32c.279 0 .521.19.59.46l.56 2.22c.04.184 0 .377-.11.53zM6.863 16.353C7.368 18.219 9.067 19.51 11 19.5c1.22.006 2.383-.516 3.19-1.43l-.75-.66c-.991 1.13-2.627 1.436-3.96.74-1.332-.696-2.016-2.213-1.655-3.672.36-1.46 1.672-2.483 3.175-2.478.87.008 1.7.369 2.3 1l.7-.76c-1.361-1.373-3.476-1.656-5.152-.69-1.675.964-2.49 2.937-1.985 4.803z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#zog8wlhs5a)">
      <path fill={fillColor} d="M-4 -3H26V27H-4z" />
    </g>
  </svg>
)

export default CalKing
