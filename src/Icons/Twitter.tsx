import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Twitter: React.FunctionComponent<Props> = ({ width = '25', height = '21', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 25 21" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M1.28 18.79C3.616 20.188 6.278 20.95 9 21c2.605-.01 5.15-.794 7.31-2.25C20.43 16 23 11 22.66 6.42c.882-.665 1.645-1.472 2.26-2.39.12-.202.1-.458-.05-.64-.16-.174-.416-.222-.63-.12-.215.104-.44.188-.67.25.36-.463.631-.988.8-1.55.06-.215-.025-.445-.21-.57-.179-.13-.421-.13-.6 0-.796.428-1.638.764-2.51 1C19.27.67 16.51.45 14.48 1.88c-1.569 1.098-2.427 2.954-2.25 4.86-3.416-.303-6.551-2.017-8.65-4.73-.113-.147-.296-.224-.48-.2-.141.033-.26.129-.32.26-.73 1.2-.939 2.643-.58 4 .176.694.481 1.35.9 1.93-.21-.086-.411-.194-.6-.32-.155-.129-.371-.152-.55-.06-.181.087-.297.27-.3.47.015 1.955 1.076 3.752 2.78 4.71-.229-.02-.454-.07-.67-.15-.209-.07-.44-.012-.59.15-.137.157-.173.379-.09.57.741 1.663 2.224 2.88 4 3.28-1.665.957-3.592 1.357-5.5 1.14-.256-.03-.496.128-.57.374-.074.247.04.51.27.626zm14.5-.91c-3.548 2.414-8.101 2.794-12 1v-.04c1.847-.197 3.59-.95 5-2.16.158-.145.213-.372.139-.574-.075-.202-.264-.338-.479-.346-1.505.018-2.929-.684-3.83-1.89.675.061 1.349-.131 1.89-.54.164-.135.23-.356.17-.56-.057-.202-.231-.349-.44-.37-1.632-.437-2.919-1.69-3.4-3.31.578.242 1.215.309 1.83.19.219-.037.388-.21.42-.43.039-.222-.07-.445-.27-.55-.83-.593-1.416-1.467-1.65-2.46-.22-.82-.175-1.688.13-2.48 2.416 2.762 5.863 4.408 9.53 4.55.166.012.327-.059.43-.19.11-.13.151-.305.11-.47-.19-.79-.15-3.33 1.66-4.39 1.725-1.23 4.096-.991 5.54.56.115.109.273.16.43.14.583-.11 1.153-.281 1.7-.51-.259.38-.6.694-1 .92-.236.099-.373.348-.33.6.044.248.258.43.51.43.372-.024.741-.088 1.1-.19-.318.35-.67.668-1.05.95-.2.107-.31.326-.28.55.46 4.16-1.95 8.92-5.86 11.57z"
      clipRule="evenodd"
    />
  </svg>
)

export default Twitter
