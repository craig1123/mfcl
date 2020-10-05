import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown // for the rest property
}

const PiggyBank: React.FunctionComponent<Props> = ({ width = '24', height = '24', fillColor = '#2D2926', ...rest }) => (
  <svg width={width} height={height} fill="none" viewBox="0 0 24 24" {...rest}>
    <path
      fill={fillColor}
      fillRule="evenodd"
      d="M13.73.06c1.239-.01 2.253.981 2.27 2.22.006 1.25-1 2.27-2.25 2.28-1.239 0-2.244-1.001-2.25-2.24-.005-1.239.992-2.249 2.23-2.26zm-2.34 8.52c.04.217.23.374.45.37H12c.576-.138 1.167-.205 1.76-.2h.38c.49.028.974.102 1.45.22h.14c.188.002.36-.108.436-.28.076-.171.042-.372-.086-.51-.087-.074-.19-.129-.3-.16-.71-.174-1.439-.258-2.17-.25-.593.015-1.183.092-1.76.23-.142.006-.274.074-.362.185-.089.111-.124.255-.098.395zM18.2 11c-.161.162-.251.382-.25.61.005.462.378.835.84.84.226 0 .442-.09.6-.25.233-.246.299-.606.17-.92-.13-.312-.431-.52-.77-.53-.222 0-.435.09-.59.25zM15 2.28c.043.475-.187.934-.593 1.184-.406.25-.918.25-1.324 0s-.635-.709-.593-1.184c-.042-.475.187-.933.593-1.184.406-.25.918-.25 1.324 0s.636.709.593 1.184zM.91 13.78c-.05.221-.27.36-.49.31-.208-.04-.354-.229-.34-.44.33-1.34 1.33-2.23 2.33-2 .285.065.546.21.75.42.268-.103.56-.127.84-.07.271.042.529.148.75.31.2-.707.504-1.38.9-2 1.144-1.766 2.87-3.075 4.88-3.7.557-.178 1.13-.305 1.71-.38.46-.069.925-.102 1.39-.1.29-.015.58-.015.87 0 .835.067 1.658.238 2.45.51l1-.6c.4-.22 1.7-.85 1.7-.85.132-.06.275-.09.42-.09.238 0 .469.085.65.24.303.261.421.679.3 1.06-.028.089-.128.424-.251.836-.14.471-.311 1.043-.439 1.464l.3.3c.629.671 1.143 1.441 1.52 2.28l.55.11c.7.096 1.217.703 1.2 1.41v3c-.033.66-.519 1.208-1.17 1.32l-.35.06-.26.05c-.06.14-.13.29-.21.44-.58 1.105-1.4 2.065-2.4 2.81l-.098.62v.001c-.074.466-.145.92-.222 1.38l-.03.132c-.026.102-.05.202-.05.307v.2c-.084.485-.508.837-1 .83h-1.59c-.365-.005-.698-.208-.87-.53-.06-.105-.1-.22-.12-.34l-.06-.35c-.007-.051-.019-.104-.03-.157-.02-.092-.04-.184-.04-.273h-.13c-.489.084-.984.127-1.48.13h-.44c-.152-.031-.302-.033-.458-.034-.142-.001-.29-.002-.452-.026-.34-.05-.68-.12-1-.19-.014.076-.03.151-.047.226-.042.191-.083.38-.083.574-.047.574-.534 1.013-1.11 1H8.73c-.39-.005-.74-.235-.9-.59-.045-.091-.075-.19-.09-.29l-.08-.43-.035-.219c-.049-.303-.099-.613-.155-.91-.07-.37-.14-.85-.21-1.37-.304-.266-.591-.55-.86-.85-.87-.96-1.485-2.122-1.79-3.38-.181-.828-.218-1.68-.11-2.52-.138-.26-.376-.452-.66-.53-.066-.01-.134-.01-.2 0 .172.497.21 1.032.11 1.55.004.025.004.053 0 .08-.074.264-.215.505-.41.7-.18.183-.423.29-.68.3h-.18c-.314-.085-.568-.316-.68-.62-.093-.26-.12-.538-.08-.81v-.22c.119-.51.375-.977.74-1.35-.057-.04-.122-.067-.19-.08-.56-.13-1.18.49-1.36 1.34zm4.61-.29c.131-.94.473-1.84 1-2.63 1.022-1.574 2.566-2.739 4.36-3.29.902-.287 1.843-.435 2.79-.44h.79c.825.064 1.636.246 2.41.54h.18c.095-.003.188-.03.27-.08.38-.24.77-.47 1.16-.69.313-.176 1.036-.532 1.425-.724l.215-.106c-.06.22-.59 2-.79 2.65-.063.17-.005.362.14.47l.5.48c.607.68 1.076 1.471 1.38 2.33.038.132.146.232.28.26l.91.18c.105.005.204.053.274.132.07.079.104.183.096.288v2.95c.013.196-.126.37-.32.4l-.9.17c-.15.023-.277.127-.33.27l-.04.095c-.077.18-.156.366-.25.545-.545 1.031-1.326 1.919-2.28 2.59-.104.072-.173.185-.19.31l-.36 2.18c0 .135-.029.274-.057.411-.016.077-.032.154-.043.23h-1.59c-.05-.35-.11-.69-.17-1 0-.124-.036-.246-.072-.365-.013-.046-.027-.091-.038-.136-.02-.106-.113-.182-.22-.18h-.28c-.118 0-.235.035-.353.07-.082.024-.165.048-.247.06-.44.072-.884.109-1.33.11h-.2c-.334 0-.668-.02-1-.06-.333-.052-.658-.117-.991-.184-.177-.035-.355-.071-.539-.106H11c-.194.003-.355.148-.38.34-.034.225-.071.452-.11.68-.041.25-.083.5-.12.75 0 .1 0 .11-.13.11h-1.5l-.27-1.55c-.04-.25-.077-.5-.115-.75-.038-.25-.075-.5-.115-.75-.02-.15-.099-.288-.22-.38-.308-.275-.602-.565-.88-.87-.76-.851-1.288-1.885-1.53-3-.186-.756-.223-1.54-.11-2.31zm-2.58-.28c-.206.26-.35.565-.42.89h-.01c-.045.147-.041.305.01.45.017.048.048.09.09.12.05-.008.096-.033.13-.07.104-.107.173-.243.2-.39.077-.329.077-.671 0-1z"
      clipRule="evenodd"
    />
  </svg>
)

export default PiggyBank
