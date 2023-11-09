import { FormEvent } from "react"

interface Props {
  title: string,
  description: string,
  submit: (e: FormEvent) => void
}
export const FormCard = ({title, description, submit}: Props) => {
  return (
    <form onSubmit={submit}>
      <label>
        <span>Title</span>
        <textarea id="title" name="title" className={`text-md md:text-2xl 2xl:text-3xl font-semibold text-lime-300 text-center w-full bg-black-100 p-2`} defaultValue={title}>
        </textarea>
      </label>
      <label>
        <span>Description</span>
        <textarea id="description" name="description" className={`text-white text-center text-sm md:text-lg w-full bg-black-100 p-2`} defaultValue={description}>
        </textarea>
      </label>
      <div className="flex items-center justify-end ">
        <button type="submit" className="bg-black-100 border border-blue-400 p-2 rounded-sm">Save Card</button>
      </div>
    </form>
  )
}
