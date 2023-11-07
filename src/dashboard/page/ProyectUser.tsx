import { Footer } from "../../components/Footer"
import { SpacingContent } from "../../components/SpacingContent"
import { Title } from "../../components/Title"
import { BgProyect } from "../components/BgProyect"
import { ButtonAddNewProyect, ButtonDeleteProyect, ButtonEditProyect } from "../components/ButtonActionCrud"
import { CardProyect } from "../components/CardProyect"
import { PreviewCard } from "../components/PreviewCard"

export const ProyectUser = () => {
  return (
    <div className="flex flex-col gap-8 container">
      <div className="flex flex-col gap-4 justify-center items-center mb-10 mt-5 py-10">
        <BgProyect />
        <PreviewCard
          title="Calculator UI and Functional"
          description="Website"
          className="cursor-pointer bg-slate-700 rounded-lg shadow-lg relative transition-all box-border md:hover:scale-105 md:hover:border md:h-[350px] xl:h-[300px] w-[550px] flex flex-col justify-center items-center overflow-hidden"
        />
      </div>
      <div className="flex justify-center items-center gap-4 z-40">
        <ButtonAddNewProyect>
          Add New Proyect
        </ButtonAddNewProyect>
        <ButtonEditProyect>
          Edit Proyect
        </ButtonEditProyect>
        <ButtonDeleteProyect>
          Delete Proyect
        </ButtonDeleteProyect>
      </div>
      <div className="flex flex-col gap-3 px-10 z-40">
        <Title title="Proyects" />
        <SpacingContent>
          <div className="grid grid-cols-3 gap-3">
            <CardProyect
              title="Calculator UI and Functional"
              description="Website"
              className="cursor-pointer bg-slate-700 rounded-lg shadow-lg relative transition-all box-border md:hover:scale-105 md:hover:border md:h-[180px] xl:h-[180px] flex flex-col justify-center items-center overflow-hidden"
            />
            <CardProyect
              title="Calculator UI and Functional"
              description="Website"
              className="cursor-pointer bg-slate-700 rounded-lg shadow-lg relative transition-all box-border md:hover:scale-105 md:hover:border md:h-[180px] xl:h-[180px] flex flex-col justify-center items-center overflow-hidden"
            />
            <CardProyect
              title="Calculator UI and Functional"
              description="Website"
              className="cursor-pointer bg-slate-700 rounded-lg shadow-lg relative transition-all box-border md:hover:scale-105 md:hover:border md:h-[180px] xl:h-[180px] flex flex-col justify-center items-center overflow-hidden"
            />
          </div>
        </SpacingContent>
      </div>
      <Footer />
    </div>
  )
}
