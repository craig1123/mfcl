import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  [x: string]: unknown
}

const BeautyRestBrand: React.FunctionComponent<Props> = ({
  width = 150,
  height = 34,
  fillColor = '#2D2926',
  ...rest
}) => (
  <svg width={width} height={height} viewBox="0 0 150 34" {...rest}>
    <g fillRule="evenodd" fill={fillColor}>
      <path d="M22.67 16.674c4.344-.544 8.432-2.04 9.318-6.486.675-3.34-2.686-6.905-8.232-7.697A10.34 10.34 0 0 1 26.29.326L26.163 0c-1.552.227-3.215 1.177-4.544 2.217C15.954 2.04 7.16 4.05 2.349 9.86.565 12.015-.938 15.45.71 18.032c.805 1.262 2.198 1.929 4.025 1.929a9.488 9.488 0 0 0 3.413-.68l-.074-.347h-.297c-1.411 0-2.667-.48-3.445-1.317-.66-.71-.96-1.646-.9-2.775.095-1.587.785-3.174 2.025-4.76 4.092-5.179 11.416-6.845 15.016-6.87-3.477 3.247-6.3 8.05-7.403 10.286-.564 1.151-2.504 5.257-2.924 6.11a72.834 72.834 0 0 1-3.6 6.59c-.9 1.416-3.283 4.05-6.48 4.928l.068.353c.418-.052.848-.12 1.28-.201 4.13-.778 6.788-2.2 9.17-4.9 1.733-1.967 2.786-3.722 3.942-6.333 1.053-2.363 2.896-6.72 3.994-9.023 1.255-2.634 2.79-5.461 4.486-7.622 3.34.538 6.153 2.345 5.341 6.436-.62 3.12-4.083 5.824-7.94 6.121a76.84 76.84 0 0 1-2.25.039l-.342.77a12.6 12.6 0 0 1 1.78.082c3.6.397 5.175 2.895 3.856 6.676-1.428 4.108-5.982 7.119-12.511 4.494l-.558.58c1.829 1.038 4.84 1.748 7.424 1.716 4.538-.054 8.87-1.947 9.484-6.236.45-3.063-.675-5.53-4.628-7.382l.006-.022zm79.289-6.955l-3.6 1.9.158.328c.361-.102.75-.002 1.019.263.24.281.47.755.321 1.814-.265 1.856-2.724 5.98-7.336 10.711l.623-13.706-3.663.47h-4.437l1.773-5.464h-.272c-.945.773-2.826 1.775-4.171 2.067l-1.125 3.4H79.32l-.52 1.617h1.93l-2.99 9.22c-.26.769-.438 1.564-.53 2.371-.858.467-2.51 1.36-3.128 1.36a.942.942 0 0 1-.83-.374c-.41-.59-.097-1.66.056-2.092l4.297-12.6-5.807 1.03-.058.407c.558-.094.933-.001 1.125.277.202.285.193.757-.025 1.403l-1.94 5.56c-1.774 5.11-5.034 6.262-6.038 6.262-.493 0-.848-.154-1.06-.453-.276-.404-.274-1.061.012-1.848l4.533-12.726-5.897 1.088-.054.415c.12 0 .225-.019.32-.019a.845.845 0 0 1 .747.295c.225.32.184.907-.13 1.814l-3.2 9.083c-.144.42-.223.858-.236 1.302-.686.39-2.194 1.247-2.84 1.247a.877.877 0 0 1-.774-.363c-.375-.549-.123-1.567 0-1.914l3.967-12.015c-.9-.367-3.085-.802-4.441-.802-8.804 0-12.696 8.148-13.117 11.108-.07.5-.093 1.006-.07 1.51-3.001 1.988-6.247 2.72-8.083 2.72-.765 0-1.339-.226-1.708-.65-.45-.528-.592-1.338-.43-2.476a12.62 12.62 0 0 1 .464-1.852c9.944-.705 11.218-5.837 11.364-6.86a3.205 3.205 0 0 0-.648-2.575c-.628-.732-1.627-1.12-2.889-1.12-7.771 0-11.492 8.338-11.897 11.21-.254 1.787.058 3.21.931 4.23 1.247 1.456 3.195 1.615 3.973 1.615 2.498 0 5.591-1.184 9.022-3.401.428 2.079 1.868 3.373 3.915 3.373 3.15 0 5.049-2.346 5.782-3.25a8.52 8.52 0 0 0-.263 1.249c-.083.68 0 1.18.308 1.532.308.351.797.533 1.467.533 1.332 0 4.012-.862 6.059-2.217.369 1.29 1.539 2.153 3.087 2.153 3.03 0 5.323-2.18 6.713-4.008l.31-.41-.188.48c-.56 1.45-.617 2.583-.167 3.247.3.453.833.694 1.503.694 1.476 0 4.45-1.36 5.96-2.317.185 1.482 1.233 2.317 3.181 2.317 1.409 0 3.778-1.27 4.78-2.21l.17-.837c-.66.49-2.106 1.235-3.314 1.235a1.15 1.15 0 0 1-1.006-.435c-.306-.428-.243-1.097-.083-1.587l3.584-10.94h3.825c.495.29.729 1.133.72 2.7l-.11 12.536c-2.149 2.129-3.733 3.303-5.823 3.303a6.537 6.537 0 0 1-1.755-.258c-1.37-.381-2.232-1.327-2.405-1.875-.04-.172-.133-.193-.171-.193-.117 0-.225.136-.281.331-.302 1.11-.45 3.108 1.982 4.044.676.256 1.4.352 2.12.281.784-.072 1.675-.353 2.893-.906 2.353-1.109 7.66-6.801 7.66-6.801 5.819-5.92 9.133-10.628 9.558-13.636.267-1.895-.594-2.757-.774-2.915zm-62.425 2.34c.34-.021.671.114.9.369.333.392.432 1.09.29 2.083-.146 1.038-1.997 5.289-7.332 5.543.538-1.741 3.352-7.996 6.145-7.996h-.003zM53.59 20.32c-.967 2.832-3.15 5.878-5.636 5.878a1.346 1.346 0 0 1-1.021-.487c-.45-.528-.596-1.394-.43-2.573.302-2.11 2.736-10.632 8.399-10.632.424.015.84.13 1.212.335l-2.524 7.48zm90.177-7.023c4.571.143 5.924-1.065 5.924-1.065l.31-.941c-.782.147-1.576.223-2.371.227a23.81 23.81 0 0 1-2.7-.2l-.497-.054c.94-2.857 1.559-4.797 1.698-5.237h-.294c-.945.773-2.824 1.775-4.17 2.067l-1.075 3.24c-1.408.274-1.825.524-2.841 1.276l-.432 1.204c1.304-.621 1.928-.82 2.7-.71l-2.973 9.232c-.45 1.376-.936 3.339-.1 4.506.492.68 1.416 1.036 2.742 1.036 1.647 0 4.108-1.553 4.78-2.208l.172-.836c-.662.49-2.106 1.235-3.314 1.235a1.146 1.146 0 0 1-1.006-.435c-.306-.428-.245-1.097-.086-1.587.018-.057 1.8-5.602 3.524-10.757m-30.488 1.288l1.872-2.893c-.47-.358-1.892-.68-2.718-.68-2.081 0-3.45 1.787-4.275 2.854l-.376.49 1.152-3.518-5.424 1.004-.043.406c.092 0 .182-.016.263-.016.293-.028.58.09.77.315.335.471.067 1.41-.225 2.333L99.938 27.93l3.97-.405a900.768 900.768 0 0 0 3.077-9.601c.06-.184 1.476-4.452 4.315-4.452a2.14 2.14 0 0 1 1.978 1.101m19.98-3.967c-2.688 0-5.79 1.793-6.245 5.117-.26 1.902.428 2.754 1.676 4.307l.9 1.134c1.24 1.527 1.701 2.099 1.575 3.058-.157 1.133-1.316 2.36-3.15 2.36a3.277 3.277 0 0 1-2.697-1.247c-.664-.848-.884-1.973-.765-2.655h-.405l-.97 4.049c.968.68 3.08 1.181 4.95 1.181 3.894 0 6.277-2.51 6.617-4.987.225-1.617-.662-3.024-2.158-4.761l-.13-.152c-1.593-1.857-2.25-2.625-2.088-3.824.119-.884.978-2.2 2.844-2.2.857 0 1.523.27 1.977.799.745.866.675 2.135.65 2.473h.385l1.125-3.4c-1.053-.819-2.475-1.25-4.097-1.25m-16.935 15.783c-.762 0-1.336-.227-1.705-.65-.45-.529-.592-1.338-.432-2.476.108-.628.263-1.248.464-1.852 9.946-.705 11.22-5.838 11.364-6.86a3.192 3.192 0 0 0-.648-2.575c-.626-.733-1.625-1.134-2.887-1.134-7.771 0-11.492 8.34-11.9 11.213-.251 1.786.061 3.21.932 4.23 1.246 1.455 3.195 1.614 3.975 1.614 3.072 0 5.49-1.437 7.607-4.518l-.353-.315c-1.957 2.196-4.115 3.312-6.417 3.312m4.984-14.334c.34-.02.67.115.9.37.333.391.432 1.09.292 2.083-.148 1.038-1.998 5.288-7.334 5.542.54-1.74 3.352-7.995 6.144-7.995m28.688 14.49a1.422 1.422 0 0 1-.845 1.341c-.526.232-1.14.12-1.55-.285a1.43 1.43 0 0 1-.32-1.555 1.41 1.41 0 0 1 1.309-.884c.37-.007.726.135.99.395s.414.616.416.988zm-2.475 0c-.008.291.1.573.303.782.202.208.48.324.768.322a1.1 1.1 0 0 0 1.096-1.104 1.1 1.1 0 0 0-1.096-1.104c-.287 0-.563.118-.763.326-.2.208-.309.489-.301.778h-.007zm.844.726h-.32V25.88c.174-.031.35-.046.527-.043a.84.84 0 0 1 .477.102.38.38 0 0 1 .135.304.35.35 0 0 1-.286.32v.015a.41.41 0 0 1 .252.338c.014.12.048.237.099.347h-.342a1.14 1.14 0 0 1-.108-.338c-.027-.152-.11-.227-.286-.227h-.15l.002.565zm0-.785h.15c.176 0 .318-.059.318-.201 0-.143-.092-.211-.293-.211a.737.737 0 0 0-.175.016v.396z" />
    </g>
  </svg>
)

export default BeautyRestBrand