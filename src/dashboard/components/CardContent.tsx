interface Props {
  title: string,
  description: string,
}
export const CardContent = ({title, description}: Props) => {
  return (
    <>
      <h2
        className={`text-md md:text-2xl 2xl:text-3xl font-semibold text-lime-300 mt-4 line-clamp-1 md:line-clamp-2 text-center`}
        style={{ wordBreak: "break-all" }}
      >
        {title}
      </h2>
      <p
        className=" text-white text-center text-sm md:text-lg mt-2 line-clamp-1 md:line-clamp-3"
        style={{ wordBreak: "break-all" }}
      >
        {description}
      </p>
    </>
  )
}
