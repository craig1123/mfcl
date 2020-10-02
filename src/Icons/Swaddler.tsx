import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Swaddler: React.FunctionComponent<Props> = ({ width = '14', height = '24', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 14 24" {...rest}>
    <mask id="h65s3xcxra" width="14" height="24" x="0" y="0" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M.28 6.72C.28 3.009 3.289 0 7 0c3.694.027 6.675 3.026 6.68 6.72v10.53c-.006 3.144-2.19 5.864-5.26 6.547-3.068.683-6.2-.852-7.54-3.697V20c-.388-.855-.593-1.781-.6-2.72V6.72zm.96 6.08v4.48c.003.558.084 1.114.24 1.65l6.88-2.29-7.12-3.84zm4.4 1.28l7.12-2.37v6.19l-7.12-3.82zm7.12-7.32C12.76 3.579 10.181 1 7 1 3.838 1 1.267 3.548 1.24 6.71v5l3.24 1.82 8.28-2.77v-4zM7 23c-2.19-.002-4.19-1.246-5.16-3.21l7.68-2.57 3 1.62C11.806 21.297 9.559 22.99 7 23zm4.8-16.28c0 2.651-2.149 4.8-4.8 4.8-2.65 0-4.8-2.149-4.8-4.8s2.15-4.8 4.8-4.8c2.651 0 4.8 2.149 4.8 4.8zm-1.11-1.01c-.965-.168-1.807-.753-2.3-1.6.13-.261.24-.532.33-.81.965.492 1.68 1.366 1.97 2.41zM7.81 2.97c-.266-.06-.537-.09-.81-.09-1.711.006-3.212 1.144-3.68 2.79.263.055.531.085.8.09 1.716.002 3.224-1.138 3.69-2.79zM3.17 6.62c.313.064.63.097.95.1 1.425.007 2.779-.624 3.69-1.72.71.974 1.801 1.599 3 1.72 0 2.12-1.72 3.84-3.84 3.84S3.13 8.84 3.13 6.72c0 0 .04-.07.04-.1zm5.08 2.74c-.262.442-.736.715-1.25.72-.514-.005-.988-.278-1.25-.72-.128-.23-.048-.52.18-.65.108-.068.239-.088.362-.056.123.032.227.114.288.226.092.143.25.229.42.229.17 0 .328-.086.42-.229.06-.112.165-.194.288-.226.123-.032.254-.012.362.056.228.13.308.42.18.65z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#h65s3xcxra)">
      <path fill={fillColor} d="M-8 -3H22V27H-8z" />
    </g>
  </svg>
)

export default Swaddler
