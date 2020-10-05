import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  transform?: string
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const DefaultCarrier: React.FunctionComponent<Props> = ({
  width = '54',
  height = '54',
  fillColor = '#2D2926',
  transform = '',
  ...rest
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 54 54"
    transform={transform}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect opacity="0.1" width={width} height={height} rx="27" fill="#C4C4C4" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M43 28.7734L40.3333 21.2134C39.851 19.8603 38.5561 18.9683 37.12 19H32.3333V17C32.3333 15.1591 30.8409 13.6667 29 13.6667H14.3333C12.4924 13.6667 11 15.1591 11 17V35.6667C11 36.7713 11.8954 37.6667 13 37.6667H15.0667C15.3007 39.3094 16.7074 40.5298 18.3667 40.5298C20.026 40.5298 21.4326 39.3094 21.6667 37.6667H33.8C34.1155 39.2202 35.4814 40.3367 37.0667 40.3367C38.6519 40.3367 40.0179 39.2202 40.3333 37.6667H41.0667C42.1451 37.6307 43.0006 36.7457 43 35.6667V29C43.0127 28.925 43.0127 28.8484 43 28.7734ZM14.3333 15H29C30.1046 15 31 15.8954 31 17V31H12.3333V17C12.3333 15.8954 13.2288 15 14.3333 15ZM16.3333 37C16.3333 38.1046 17.2288 39 18.3333 39C19.4379 39 20.3333 38.1046 20.3333 37C20.3333 35.8954 19.4379 35 18.3333 35C17.2288 35 16.3333 35.8954 16.3333 37ZM37 39C35.8954 39 35 38.1046 35 37C35 35.8954 35.8954 35 37 35C38.1046 35 39 35.8954 39 37C39 38.1046 38.1046 39 37 39ZM41 36.3333C41.3682 36.3333 41.6667 36.0349 41.6667 35.6667V29.12L39 21.6667C38.7182 20.8695 37.9655 20.3357 37.12 20.3333H32.3333V31.6667C32.3333 32.0349 32.0349 32.3333 31.6667 32.3333H12.3333V35.6667C12.3333 36.0349 12.6318 36.3333 13 36.3333H15.1333C15.4488 34.7798 16.8147 33.6633 18.4 33.6633C19.9853 33.6633 21.3512 34.7798 21.6667 36.3333H33.8C34.1155 34.7798 35.4814 33.6633 37.0667 33.6633C38.6519 33.6633 40.0179 34.7798 40.3333 36.3333H41ZM35 27V22.3333C35 21.9651 34.7015 21.6667 34.3333 21.6667C33.9651 21.6667 33.6667 21.9651 33.6667 22.3333V27.6667C33.6667 28.0349 33.9651 28.3333 34.3333 28.3333H39C39.3682 28.3333 39.6667 28.0349 39.6667 27.6667C39.6667 27.2985 39.3682 27 39 27H35ZM29 23.0178C28.9975 27.0661 25.715 30.3467 21.6667 30.3467C17.6144 30.3393 14.3333 27.0523 14.3333 23C14.3407 18.9517 17.6272 15.6751 21.6755 15.68C25.7239 15.6849 29.0024 18.9694 29 23.0178ZM21.6667 17.0133C24.0947 17.0134 26.2833 18.4767 27.2112 20.7203C28.1391 22.964 27.6233 25.5458 25.9046 27.2607C24.1858 28.9756 21.6029 29.4857 19.3613 28.5528C17.1197 27.6199 15.6613 25.428 15.6667 23C15.6813 19.6946 18.3612 17.0206 21.6667 17.0133ZM24.3334 26.3487C24.1566 26.3487 23.9877 26.2756 23.8667 26.1467L21.2 23.4667C21.0705 23.3463 20.9979 23.1768 21 23V19C21 18.6318 21.2985 18.3333 21.6667 18.3333C22.0349 18.3333 22.3334 18.6318 22.3334 19V22.7333L24.8 25.2133C24.9289 25.3343 25.0021 25.5032 25.0021 25.68C25.0021 25.8568 24.9289 26.0257 24.8 26.1467C24.6791 26.2756 24.5102 26.3487 24.3334 26.3487Z"
      fill={fillColor}
    />
  </svg>
)

export default DefaultCarrier
