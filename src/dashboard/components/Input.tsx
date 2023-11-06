interface Props {
  type: string
  placeholder: string
  name: string
}

export const Input = ({ name, type, placeholder }: Props) => {
  return (
    <input
      className="w-full p-5 bg-transparent border-b border-white-100 font-bold text-3xl outline-none"
      placeholder={placeholder}
      type={type}
      name={name}
    />
  )
}
