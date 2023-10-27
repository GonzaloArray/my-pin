import Style from './Title.module.css'

interface Props{
  title: string
}

export const Title = ({title}: Props) => {
  return (
    <h2 className={Style.title}>
      <span className={Style.hash}>#</span> <span className="text-4xl underline underline-offset-4">{title}</span>
    </h2>
  )
}
