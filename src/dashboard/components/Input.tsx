import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../page/ProfileUser";

interface Props {
  type: string;
  placeholder: string;
  name: keyof Inputs;
  register: UseFormRegister<Inputs>;
  required: boolean;
  value?: string;
}

export const Input = ({ value="", name, type, placeholder, register, required }: Props) => {
  return (
    <input
      className="w-full p-5 bg-transparent border-b border-white-100 font-bold text-3xl outline-none"
      placeholder={placeholder}
      type={type}
      defaultValue={value}
      {...register(name, { required })}
    />
  )
}
