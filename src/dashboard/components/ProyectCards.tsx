import { Title } from '../../components/Title'
import { SpacingContent } from '../../components/SpacingContent'
import { CardProyect } from './CardProyect'
import { useButtonContext } from '../context/ButtonContext'

export const ProyectCards = () => {
  const {cards} = useButtonContext()

  return (
    <div className="flex flex-col gap-3 mt-10 z-40">
      <Title title="Proyects" />
      <SpacingContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {cards.map((card) => (
            <CardProyect
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card?.icon?.icon ?? <></>}
              className="cursor-pointer bg-slate-700 rounded-lg shadow-lg relative transition-all box-border md:hover:scale-105 md:hover:border h-[130px] md:h-[180px] xl:h-[180px] flex flex-col justify-center items-center overflow-hidden"
            />
          ))}
        </div>
      </SpacingContent>
    </div>
  )
}
