import { FormEvent } from 'react'
import { PreviewCard } from '../PreviewCard'
import { useButtonContext } from '../../context/ButtonContext'
import { FormCard } from './FormCard'
import { CardContent } from '../CardContent'
import { ControlActionCard } from '../ControlActionCard'
import { SkillSection } from '../SkillSection'
import { BgProyect } from '../BgProyect'
import { useParams } from 'react-router-dom'

export const Form = () => {
  const {id} = useParams()
  const { activeSectionSkill, buttonState, selectedCard, handleSelectStackIconCard, handleAddNewProyect, handleUpdateProyect } = useButtonContext()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    if (!id) return
    if (buttonState === 'add') {
      handleAddNewProyect(id, title, description)
    } else if (buttonState === 'edit') {
      if (!selectedCard.id) return
      handleUpdateProyect(id, title, description)
    }

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center py-10 md:p-0">
      <BgProyect />
      <PreviewCard
        active3d={activeSectionSkill}
        icon={selectedCard}
        className=" bg-slate-700 rounded-lg shadow-lg relative transition-all box-border md:hover:scale-105 md:hover:border h-[150px] md:h-[350px] xl:h-[300px] w-full lg:w-[550px] flex flex-col justify-center items-center overflow-hidden"
      >
        {activeSectionSkill ? (
          <FormCard
            title={selectedCard.title}
            description={selectedCard.description}
          />
        ) : (
          <CardContent
            title={selectedCard.title}
            description={selectedCard.description}
          />
        )}
      </PreviewCard>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10 z-40">
        <ControlActionCard />
      </div>
      <SkillSection
        icon={selectedCard.icon?.name ?? ""}
        selectStackIcon={handleSelectStackIconCard}
      />
    </form>
  )
}
