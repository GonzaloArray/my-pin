interface Props{
  className: string
}

export const Arrow = ({className}: Props) => {
  const svgStyle = {
    fill: 'white',
    transform: '',
    msFilter: '',
  };

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={svgStyle}>
      <path d="M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091 6.757 12 17 4.909v14.182z"></path>
    </svg>
  )
}
