import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const ChatBubble: React.FunctionComponent<Props> = ({
  width = '24',
  height = '20',
  fillColor = '#2D2926',
  ...rest
}) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 24 20" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M15 2.69h6.5c.663 0 1.3.262 1.77.73.469.478.731 1.12.73 1.79v8.57c0 1.382-1.118 2.504-2.5 2.51h-.31l.78 2.36c.073.209 0 .44-.18.57-.086.058-.186.09-.29.09-.11.007-.217-.029-.3-.1l-3.87-2.92H11.5c-1.187-.004-2.209-.838-2.45-2H6.64l-3.87 2.92c-.085.07-.19.109-.3.11-.104-.004-.205-.039-.29-.1-.18-.13-.253-.361-.18-.57l.81-2.36H2.5c-.666-.003-1.303-.27-1.772-.742-.469-.473-.73-1.112-.728-1.778V3.19C.005 1.81 1.122.695 2.5.69h10c1.208-.029 2.262.815 2.5 2zM6.5 13.28c-.108.003-.212.037-.3.1l-2.72 2L4 14c.057-.154.034-.326-.06-.46-.097-.13-.248-.208-.41-.21h-1c-.403.006-.792-.148-1.08-.43-.3-.298-.463-.707-.45-1.13V3.19c-.003-.4.154-.784.436-1.067.281-.284.664-.443 1.064-.443h10c.635-.001 1.201.4 1.41 1H11.5c-.667.003-1.306.27-1.775.746-.47.474-.73 1.116-.725 1.784v8.07H6.5zm16.5.5c.003.4-.154.786-.435 1.07-.282.286-.665.447-1.065.45h-1c-.162.002-.314.08-.41.21-.12.134-.154.323-.09.49l.49 1.5-2.72-2c-.088-.063-.192-.097-.3-.1h-6c-.414-.007-.807-.185-1.086-.492-.278-.307-.417-.715-.384-1.128V5.21c-.003-.4.154-.786.435-1.07.281-.286.665-.447 1.065-.45h10c.4.003.784.164 1.065.45.281.284.438.67.435 1.07v8.57z"
      clipRule="evenodd"
    />
  </svg>
)

export default ChatBubble
