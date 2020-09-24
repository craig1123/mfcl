import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Calendar: React.FunctionComponent<Props> = ({ width = '30', height = '30', fillColor = '#2D2926', ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...rest} fill="none" viewBox="0 0 30 30">
    <mask id="59y1plmzwa" width="23" height="25" x="3" y="2" maskUnits="userSpaceOnUse">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M21.81 5.07c-.003.111.04.219.12.297.08.077.189.118.3.113 1.23 0 2.48 1.57 2.48 2.9v1.24H4.92l-.07-1.31c.059-1.41 1.09-2.587 2.48-2.83.226 0 .41-.184.41-.41 0-.227-.184-.41-.41-.41C5.445 4.835 4.002 6.416 4 8.31v14.48c-.062 1.799 1.341 3.31 3.14 3.38H22.4c1.799-.07 3.202-1.581 3.14-3.38V8.31c0-1.889-1.431-3.47-3.31-3.66-.232 0-.42.188-.42.42zm2.9 17.79c.057 1.307-.953 2.415-2.26 2.48H7.11c-1.307-.065-2.317-1.173-2.26-2.48V10.45h19.86v12.41zM9.4 8c.252-.026.438-.248.42-.5v-4c.011-.122-.027-.244-.106-.338C9.635 3.07 9.522 3.01 9.4 3c-.247.031-.424.253-.4.5v4c-.024.247.153.469.4.5zm11.17-.5v-4c.037-.168-.032-.342-.174-.439-.143-.096-.33-.096-.472 0-.142.097-.211.27-.174.439v4c-.037.168.032.342.174.438.143.097.33.097.472 0 .142-.096.211-.27.174-.438zM18.5 5.48c.226 0 .41-.184.41-.41 0-.227-.184-.41-.41-.41h-7.44c-.226 0-.41.183-.41.41 0 .226.184.41.41.41h7.44zm-1.15 12.91c0-2.8 1.11-4.69 3.14-4.69 2.03 0 3.14 1.89 3.14 4.69 0 2.8-1.11 4.69-3.14 4.69-2.03 0-3.14-1.89-3.14-4.69zm5.45 0c0-2.42-.85-3.81-2.31-3.81s-2.31 1.42-2.31 3.81.82 3.81 2.31 3.81c1.49 0 2.31-1.39 2.31-3.81zm-11.68 3.72l3-3.29c.702-.62 1.156-1.472 1.28-2.4.045-.471-.11-.939-.428-1.29-.318-.35-.769-.55-1.242-.55-.83-.015-1.578.5-1.86 1.28l-.7-.45c.429-1.036 1.44-1.71 2.56-1.71.699.01 1.363.306 1.836.82.474.516.714 1.203.664 1.9-.124 1.156-.673 2.225-1.54 3L12.32 22h4.08v.88h-5.28v-.77zM9.7 13.86v9.07h-.83v-8.08l-1.86.61-.21-.77 2.19-.83h.71z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#59y1plmzwa)">
      <path fill={fillColor} d="M0 0H30V30H0z" />
    </g>
  </svg>
)

export default Calendar
