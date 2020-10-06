import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const CalKing: React.FunctionComponent<Props> = ({ width = '24', height = '24', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M23.5 21.94H.5c-.276 0-.5-.224-.5-.5V1.5C0 .672.672 0 1.5 0h21c.828 0 1.5.672 1.5 1.5v19.94c0 .276-.224.5-.5.5zM14.41 6.8c-1.377.08-2.559-.97-2.64-2.348-.083-1.377.966-2.56 2.344-2.643 1.377-.084 2.56.964 2.646 2.341.041.663-.184 1.316-.625 1.813-.44.497-1.062.798-1.725.837zm-1.614-2.705c.09-.704.666-1.246 1.374-1.295.398-.022.788.11 1.09.37.532.47.658 1.25.302 1.864-.356.614-1.096.891-1.768.663-.672-.228-1.09-.898-.998-1.602zM19.11 11c-1.01.063-1.957-.489-2.401-1.397-.444-.908-.297-1.995.372-2.753.67-.758 1.73-1.038 2.686-.71.956.329 1.62 1.2 1.683 2.21.085 1.378-.962 2.564-2.34 2.65zm-1.573-2.995c.2-.574.726-.971 1.333-1.005.398-.013.786.13 1.08.4.294.253.474.613.5 1 .04.607-.291 1.177-.837 1.445-.546.267-1.2.179-1.655-.225-.455-.403-.621-1.04-.421-1.615zM19.24 19.83c-1.01.063-1.957-.489-2.401-1.397-.444-.908-.297-1.995.372-2.753.67-.758 1.73-1.038 2.686-.71.956.329 1.62 1.2 1.683 2.21.086 1.363-.938 2.543-2.3 2.65h-.04zm-.24-4c-.605.032-1.131.427-1.33 1-.202.573-.04 1.212.41 1.62.458.4 1.11.49 1.66.23.546-.266.877-.834.84-1.44-.037-.386-.22-.743-.51-1-.291-.268-.674-.415-1.07-.41zM8.286 17.475c.09-.704.666-1.246 1.374-1.295.397-.022.788.11 1.09.37.532.47.658 1.25.302 1.864-.356.614-1.096.891-1.768.663-.672-.228-1.09-.898-.998-1.602zM9.9 20.18c-1.01.063-1.957-.489-2.401-1.397-.444-.908-.297-1.995.372-2.753.67-.758 1.73-1.038 2.685-.71.957.329 1.621 1.2 1.684 2.21.085 1.378-.962 2.564-2.34 2.65zm-6.234-7.175c.2-.574.727-.971 1.334-1.005.399-.014.786.13 1.08.4.294.253.474.613.5 1 .04.607-.291 1.177-.837 1.445-.546.267-1.2.179-1.655-.225-.455-.403-.621-1.04-.422-1.615zM5.2 16c-1.01.059-1.955-.496-2.396-1.406-.44-.91-.29-1.997.383-2.752.672-.755 1.733-1.031 2.689-.699.955.332 1.616 1.207 1.674 2.217.074 1.376-.975 2.554-2.35 2.64zm7.638-3.146c.107-.718.707-1.26 1.432-1.294.4-.02.793.12 1.09.39.539.486.659 1.286.286 1.908-.372.623-1.133.896-1.817.651-.683-.244-1.098-.938-.99-1.655zm1.672 2.706c-1.01.063-1.959-.49-2.403-1.399-.443-.91-.295-1.997.376-2.754.672-.758 1.733-1.036 2.69-.704.956.331 1.618 1.207 1.677 2.217.08 1.374-.966 2.554-2.34 2.64zM8.25 8.4c.199-.573.724-.968 1.33-1v-.02c.716-.044 1.364.426 1.544 1.12.18.695-.157 1.42-.804 1.73-.55.26-1.202.17-1.66-.23-.442-.405-.603-1.033-.41-1.6zm1.56 3c-1.19.068-2.262-.713-2.562-1.866-.3-1.154.255-2.358 1.327-2.879 1.072-.52 2.363-.212 3.083.737.72.95.671 2.275-.118 3.168-.444.497-1.065.799-1.73.84zM3.367 4.42c.094-.712.676-1.26 1.393-1.31l.02.01c.397-.022.788.11 1.09.37.536.479.66 1.269.298 1.889-.363.62-1.113.899-1.793.666-.68-.233-1.101-.912-1.008-1.625zM5 7.11c-1.377.07-2.55-.989-2.622-2.365-.073-1.377.982-2.552 2.359-2.628 1.376-.076 2.554.977 2.633 2.353.044.666-.183 1.322-.63 1.819-.445.497-1.073.793-1.74.821zM.55 24h22.9c.276 0 .5-.224.5-.5s-.224-.5-.5-.5H.55c-.276 0-.5.224-.5.5s.224.5.5.5zM23 20.94H1V1.5c0-.276.224-.5.5-.5h21c.276 0 .5.224.5.5v19.44z"
      clipRule="evenodd"
    />
  </svg>
)

export default CalKing
