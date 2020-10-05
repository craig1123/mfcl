import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const BrandTag: React.FunctionComponent<Props> = ({ width = '22', height = '25', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 22 25" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M17.28 4.22h2.88c.328-.003.643.126.876.357.233.23.364.545.364.873v7.27c-.041.782-.348 1.526-.87 2.11l-9.79 9.79c-.231.23-.544.36-.87.36-.326.001-.64-.128-.87-.36l-8-8c-.23-.23-.36-.544-.36-.87 0-.326.13-.64.36-.87l9.89-9.82c.585-.52 1.329-.827 2.11-.87h3.39c-.043-.126-.07-.257-.08-.39-.028-.992.33-1.957 1-2.69.081-.084.193-.132.31-.132.117 0 .229.048.31.132.17.172.17.448 0 .62-.501.546-.783 1.259-.79 2 .022.17.07.335.14.49zm3.23 8.52c-.043.548-.256 1.07-.61 1.49L10.1 24c-.063.065-.15.101-.24.1-.094.002-.184-.034-.25-.1l-8-8c-.066-.066-.102-.156-.1-.25 0-.09.035-.177.1-.24l9.87-9.8c.429-.36.961-.574 1.52-.61h3.81c.05.082.105.16.158.236l.092.134c.275.317.464.7.55 1.11-.875-.245-1.81.097-2.318.85-.51.754-.478 1.749.076 2.469.555.72 1.509 1.004 2.367.705.858-.3 1.429-1.115 1.415-2.024.005-.59-.243-1.154-.68-1.55.004-.053.004-.107 0-.16.025-.658-.192-1.302-.61-1.81h2.33c.193 0 .35.157.35.35v7.29l-.03.04zm-3.052-2.983c.461-.19.762-.639.762-1.137.003-.204-.041-.406-.13-.59-.204.356-.472.67-.79.93-.075.065-.17.1-.27.1-.136-.002-.264-.064-.35-.17-.072-.093-.104-.21-.09-.327.016-.116.077-.222.17-.293.263-.23.48-.509.64-.82-.13-.04-.264-.06-.4-.06-.498-.004-.95.293-1.143.752-.194.46-.091.99.26 1.344.35.354.88.461 1.341.271zM9.22 12.9l3.6 3.59c.126.127.163.318.092.483-.07.165-.233.27-.412.267-.117 0-.229-.046-.31-.13L8.6 13.52c-.147-.175-.136-.433.025-.595.162-.161.42-.172.595-.025zm-1.93 1.93l3.59 3.6c.17.172.17.448 0 .62-.084.08-.194.125-.31.13-.116-.003-.227-.05-.31-.13l-3.59-3.59c-.085-.083-.133-.196-.133-.315s.048-.232.133-.315c.172-.17.448-.17.62 0z"
      clipRule="evenodd"
    />
  </svg>
)

export default BrandTag
