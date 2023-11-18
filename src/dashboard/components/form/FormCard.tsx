interface Props {
  url: string;
  title: string,
  description: string,
}

export const FormCard = ({url, title, description}: Props) => {
  return (
    <>
      <label className="absolute top-0 flex items-center gap-3">
        <span>URL</span>
        <input type="url" id="url" name="url" className={`text-sm font-semibold w-full bg-black-100 p-2`} defaultValue={url} placeholder="ex: http://">
        </input>
      </label>
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
    </>
  )
}
