interface Props {
  name: string
  placeholder: string
  type: string

}

export const Input = ({ name, placeholder, type }: Props) => {
  return (
    <label className="relative">
      <span className="absolute -top-3 left-2 bg-black px-2">{name}</span>
      <input className="bg-black border p-4 rounded-md w-full" type={type} placeholder={placeholder} />
    </label>
  )
}
