import { Title } from '../../components/Title'
import { SpacingContent } from '../../components/SpacingContent'
import { CardProyect } from './CardProyect'
import { useButtonContext } from '../context/ButtonContext'
import { AlertInformation } from '../../common/components/Alert'

export const ProyectCards = () => {
  const {cards, selectedCard, handleEditProyect} = useButtonContext()

  const handleSelectProyect = (id: string) => {
    const findProyect = cards.find(c => c.id === id)

    if (findProyect) {
      handleEditProyect(findProyect)
    }
  }

  return (
    <div className="flex flex-col gap-3 mt-10 z-40">
      <Title title="Proyects" />
      <SpacingContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {
            cards.length === 0 && <AlertInformation>No Proyect Yet...</AlertInformation>
          }
          {cards.map((card) => (
            <CardProyect
              click={handleSelectProyect}
              key={card.id}
              id={card.id ?? ''}
              title={card.title}
              description={card.description}
              icon={card?.icon?.name ?? ''}
              className={`cursor-pointer bg-slate-700 rounded-lg shadow-lg relative transition-all box-border h-[130px] md:h-[180px] xl:h-[250px] flex flex-col justify-center items-center overflow-hidden ${card.id === selectedCard.id ? 'border-4 border-blue-1000': 'md:hover:border'}`}
            />
          ))}
        </div>
      </SpacingContent>
    </div>
  )
}
