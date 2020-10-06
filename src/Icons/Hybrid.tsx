import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const Hybrid: React.FunctionComponent<Props> = ({ width = '25', height = '25', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} viewBox="0 0 25 25" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M24.49 11.69H1.54c-.126.004-.249-.043-.34-.13-.11-.077-.182-.197-.2-.33V2.37c.004-.381.167-.744.45-1 .27-.256.628-.396 1-.39h21.08c.371-.006.73.134 1 .39.283.256.446.619.45 1v8.86c.002.125-.049.245-.14.33-.082.078-.189.124-.3.13h-.05zM11.36 8.2c.493.44 1.14.67 1.8.64 1.36-.101 2.386-1.278 2.3-2.64.016-.922-.491-1.775-1.31-2.2-.83-.426-1.827-.356-2.59.18-.74.521-1.127 1.413-1 2.31.022.656.31 1.273.8 1.71zm6.58 0c.488.442 1.132.672 1.79.64 1.348-.117 2.357-1.29 2.27-2.64-.025-.878-.528-1.671-1.31-2.07-.794-.397-1.74-.34-2.48.15-.737.483-1.148 1.333-1.07 2.21.022.656.31 1.273.8 1.71zm-13.17 0c.489.442 1.132.672 1.79.64 1.159-.066 2.11-.939 2.277-2.087.165-1.15-.501-2.256-1.594-2.646-1.093-.391-2.31.042-2.91 1.035-.6.994-.417 2.273.437 3.058zm.145-1.775c-.047-.828.587-1.538 1.415-1.585.538-.033 1.053.217 1.36.66.298.447.333 1.02.09 1.5-.246.489-.734.81-1.28.84-.828.047-1.538-.586-1.585-1.415zM19.5 4.84c-.816.059-1.431.764-1.38 1.58.02.382.188.741.47 1 .297.262.684.398 1.08.38.817-.059 1.436-.762 1.39-1.58-.027-.384-.203-.743-.49-1-.293-.262-.677-.398-1.07-.38zm-6.57 0c-.625.016-1.176.413-1.39 1-.22.572-.065 1.22.39 1.63.456.419 1.119.521 1.68.26.659-.291 1.015-1.013.845-1.713-.17-.7-.816-1.179-1.535-1.137l.01-.04zM24 10.78H2V2.37c.01-.253.216-.455.47-.46H23.5c.127-.005.252.04.345.126.094.087.15.207.155.334v8.41zM13.66 22.94c-.184.002-.355-.093-.45-.25-.057-.11-.064-.24-.02-.356.044-.116.135-.208.25-.254l2.09-.95c.24-.118.532-.026.66.21.05.111.05.239 0 .35-.016.126-.085.239-.19.31l-2.1.95c-.07.01-.14.01-.21 0l-.03-.01zm-4.28-1.03c.088.16.257.26.44.26.062-.006.123-.023.18-.05l5.96-2.7c.113-.052.203-.145.25-.26.05-.111.05-.238 0-.35-.132-.231-.419-.323-.66-.21l-5.93 2.7c-.113.05-.2.144-.24.26-.05.112-.05.239 0 .35zm.44-2.27c-.182.007-.353-.09-.44-.25-.05-.111-.05-.239 0-.35.04-.116.127-.21.24-.26l5.93-2.7c.241-.113.528-.021.66.21.05.111.05.239 0 .35-.047.116-.137.208-.25.26L10 19.6h-.21l.03.04zm-.44-2.78c.083.166.255.268.44.26.063-.001.125-.018.18-.05l5.96-2.69c.113-.052.203-.145.25-.26.05-.111.05-.238 0-.35-.132-.231-.419-.323-.66-.21l-5.93 2.69c-.113.05-.2.144-.24.26-.05.111-.05.239 0 .35zm.44-2.26c-.183 0-.352-.1-.44-.26-.05-.111-.05-.239 0-.35.04-.116.127-.21.24-.26l2-.91c.238-.117.526-.024.65.21.055.11.055.24 0 .35-.04.117-.127.21-.24.26l-2 .91h-.21v.05zm11.74 8.09c.087.16.258.257.44.25V23c.087.013.175-.005.25-.05l2.1-.95c.122-.053.216-.155.26-.28.04-.129.019-.27-.06-.38-.124-.234-.412-.327-.65-.21l-2.09.95c-.117.046-.209.141-.25.26-.045.113-.045.238 0 .35zm-3.84-.78c.09.159.256.258.438.26h-.002.003-.001c.077 0 .152-.018.222-.05l5.93-2.7c.116-.045.207-.138.249-.255.042-.117.031-.246-.029-.355-.128-.23-.412-.322-.65-.21l-5.93 2.7c-.116.046-.206.138-.25.254-.044.116-.037.246.02.356zm0-2.52c.095.157.266.252.45.25v-.04h.21l5.93-2.7c.116-.045.207-.138.249-.255.042-.117.031-.246-.029-.355-.124-.234-.412-.327-.65-.21l-5.93 2.7c-.116.046-.206.138-.25.254-.044.116-.037.246.02.356zm0-2.53c.09.16.257.258.439.26h-.009c.08.008.16-.01.23-.05l5.93-2.69c.116-.045.207-.138.249-.255.042-.117.031-.246-.029-.355-.124-.234-.412-.327-.65-.21l-5.93 2.69c-.116.046-.206.138-.25.254-.044.116-.037.246.02.356zm0-2.52c.091.162.264.262.45.26l-.02-.05h.21l2-.91c.113-.052.203-.145.25-.26.05-.111.05-.239 0-.35-.128-.236-.42-.328-.66-.21l-2 .91c-.116.046-.206.138-.25.254-.044.116-.037.246.02.356zm-12.39 8.6c-.182.007-.353-.09-.44-.25-.057-.11-.064-.24-.02-.356.044-.116.134-.208.25-.254l2.09-.95c.238-.117.526-.024.65.21.05.111.05.239 0 .35-.04.117-.127.21-.24.26l-2.1.95c-.07.01-.14.01-.21 0l.02.04zm-4.28-1.03c.086.163.256.263.44.26.073-.002.144-.02.21-.05l5.93-2.7c.113-.052.203-.145.25-.26.05-.111.05-.238 0-.35-.128-.23-.412-.322-.65-.21l-5.94 2.7c-.113.05-.2.144-.24.26-.055.11-.055.24 0 .35zm.44-2.27c-.183.01-.355-.088-.44-.25C.964 19.28.945 19.13 1 19c.04-.116.127-.21.24-.26l5.94-2.7c.238-.117.526-.024.65.21.05.111.05.239 0 .35-.047.115-.137.208-.25.26L1.7 19.6c-.069.02-.141.02-.21 0v.04zm-.44-2.78c.083.166.255.268.44.26.073.002.146-.015.21-.05l5.93-2.69c.113-.052.203-.145.25-.26.05-.111.05-.238 0-.35-.124-.234-.412-.327-.65-.21l-5.94 2.69c-.113.05-.2.144-.24.26-.055.11-.055.24 0 .35zm.44-2.26c-.184.003-.354-.098-.44-.26-.068-.1-.087-.225-.05-.34.04-.116.127-.21.24-.26l2-.91c.118-.094.273-.13.42-.097.148.033.273.131.34.267.055.11.055.24 0 .35-.04.117-.127.21-.24.26l-2 .91c-.069.02-.141.02-.21 0l-.06.08zM1.51 25h22.56c.276 0 .5-.224.5-.5s-.224-.5-.5-.5H1.51c-.276 0-.5.224-.5.5s.224.5.5.5z"
      clipRule="evenodd"
    />
  </svg>
)

export default Hybrid
