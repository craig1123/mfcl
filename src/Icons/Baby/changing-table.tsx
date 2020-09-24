import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const ChangingTable: React.FunctionComponent<Props> = ({
  width = '24',
  height = '25',
  fillColor = '#2D2926',
  ...rest
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" {...rest} viewBox="0 0 24 25">
    <mask id="wc9nock0aa" width="24" height="25" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M23.49 0h-1.92c-.282 0-.51.228-.51.51V1H2.94V.51c0-.282-.228-.51-.51-.51H.51C.228 0 0 .228 0 .51v23c0 .282.228.51.51.51h1.92c.135 0 .265-.054.36-.15L3.6 23h16.8l.81.81c.095.096.225.15.36.15h1.92c.282 0 .51-.228.51-.51v-23c-.03-.258-.25-.452-.51-.45zm-2.43 2v1.83H2.94V2h18.12zM1.91 4.34V1H1v4.74h22V1h-.92v3.34c.003.136-.05.267-.146.364-.097.096-.228.149-.364.146H2.43c-.137.003-.27-.05-.367-.146-.098-.096-.153-.227-.153-.364zm13.37 10.98h-6.6V6.77h6.6v8.55zM1 15.32h6.66l-.03-8.55H1v8.55zm21.97 1v3.78H1v-3.76l21.97-.02zm-6.67-4.76v3.76H23v-3.76h-6.7zm0-1.03V6.77H23v3.76h-6.7zm4.68 11.67l.8.8H23v-1.87H1V23h1.22l.8-.8c.095-.096.225-.15.36-.15h17.24c.135 0 .265.054.36.15zm-3.24-3.5h1.92c.257-.01.46-.223.46-.48 0-.256-.204-.464-.46-.47h-1.92c-.263.005-.475.217-.48.48.005.261.219.47.48.47zm-11.48 0H4.34c-.265 0-.48-.215-.48-.48.005-.263.217-.475.48-.48h1.92c.263.005.475.217.48.48 0 .265-.215.48-.48.48zm4.85-7.66c0 .265-.215.48-.48.48s-.48-.215-.48-.48.215-.48.48-.48.48.215.48.48zm-5.046.326c-.09.098-.22.155-.354.154-.141.012-.28-.038-.381-.139-.1-.1-.151-.24-.139-.381 0-.276.224-.5.5-.5s.5.224.5.5c.011.134-.034.267-.126.366z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#wc9nock0aa)">
      <path fill={fillColor} d="M-3 -3H27V27H-3z" />
    </g>
  </svg>
)

export default ChangingTable
