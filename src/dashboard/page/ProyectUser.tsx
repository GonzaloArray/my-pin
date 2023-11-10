import { FormEvent, useState } from "react";
import { SpacingContent } from "../../components/SpacingContent";
import { Title } from "../../components/Title";
import { BgProyect } from "../components/BgProyect";
import {
  ButtonAddNewProyect,
  ButtonDeleteProyect,
  ButtonEditProyect,
} from "../components/ButtonActionCrud";
import { CardProyect } from "../components/CardProyect";
import { PreviewCard } from "../components/PreviewCard";
import { SkillSection } from "../components/SkillSection";
import { FormCard } from "../components/form/FormCard";
import { Card, StackItem } from "../../type";

export const ProyectUser = () => {
  const [activeSectionSkill, setActiveSectionSkill] = useState(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card>({
    title: "##################################",
    description: "#################### ############ ############# #######",
    icon: {
      icon: null,
      name: 'JS',
      id: ''
    }
  });

  const handleToggleStackSection = () => {
    setActiveSectionSkill(!activeSectionSkill);
  };

  const handleSelectStackIconCard = (stack: StackItem) => {
    setSelectedCard({
      ...selectedCard,
      icon: stack,
    });
  };

  const handleAddNewProyect = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    setSelectedCard({
      ...selectedCard,
      title: title,
      description: description,
    });
    setCards([
      ...cards,
      {
        ...selectedCard,
        title: title,
        description: description,
        id: crypto.randomUUID(),
      },
    ]);

    setActiveSectionSkill(false);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-4 justify-center items-center md:mb-10 py-10 md:p-0">
        <BgProyect />
        <PreviewCard
          icon={selectedCard}
          className=" bg-slate-700 rounded-lg shadow-lg relative transition-all box-border md:hover:scale-105 md:hover:border h-[150px] md:h-[350px] xl:h-[300px] w-full lg:w-[550px] flex flex-col justify-center items-center overflow-hidden"
        >
          {activeSectionSkill ? (
            <FormCard
              submit={handleAddNewProyect}
              title={selectedCard.title}
              description={selectedCard.description}
            />
          ) : (
            <>
              <h2
                className={`text-md md:text-2xl 2xl:text-3xl font-semibold text-lime-300 mt-4 line-clamp-1 md:line-clamp-2 text-center`}
                style={{ wordBreak: "break-all" }}
              >
                {selectedCard.title}
              </h2>
              <p
                className=" text-white text-center text-sm md:text-lg mt-2 line-clamp-1 md:line-clamp-3"
                style={{ wordBreak: "break-all" }}
              >
                {selectedCard.description}
              </p>
            </>
          )}
        </PreviewCard>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 z-40">
        <ButtonAddNewProyect click={handleToggleStackSection}>
          {activeSectionSkill ? "Cancel Proyect" : "Add New Proyect"}
        </ButtonAddNewProyect>
        <ButtonEditProyect>Edit Proyect</ButtonEditProyect>
        <ButtonDeleteProyect>Delete Proyect</ButtonDeleteProyect>
      </div>
      <SkillSection
        icon={selectedCard.icon?.name ?? ""}
        selectStackIcon={handleSelectStackIconCard}
      />
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
    </div>
  );
};
