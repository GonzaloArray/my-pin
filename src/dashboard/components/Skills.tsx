import { TitleNotHash } from '../../components/Title'
import { SpacingContent } from '../../components/SpacingContent'
import { AlertInformation } from '../../common/components/Alert'
import { BadgeAction } from '../../components/BadgeAction'
import { ButtonAddNewProyect } from './ButtonActionCrud'
import { ReactNode, useEffect, useState } from 'react'
import { Skill } from '../../type'
import { Backend, Frontend } from '../data/Skills'
import Modal from '../../components/Modal'
import { useParams } from 'react-router-dom'
import { arrayUnion } from 'firebase/firestore'
import { getFirebaseData, sendArrayFirebaseData, sendFirebaseData } from '../../service/firebaseAction'

interface Props {
  children: ReactNode,
  name: string
}

export const Skills = ({ children, name }: Props) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [modalSkill, setModalSkill] = useState(false);

  const { id } = useParams()

  useEffect(() => {
    const getDataSkills = async () => {
      if (!id) return
      const data = await getFirebaseData(id, name)
      setSkills(data.skill)
    }

    getDataSkills()
  }, [id, name])

  const handleDelete = ({ id: idSkill }: Skill) => {
    const removeSkills = skills.filter((skill) => skill.id !== idSkill);
    if (!id) return
    sendFirebaseData(id, name, { skill: removeSkills })
    setSkills(removeSkills);
  };

  const handleModalSkill = () => {
    setModalSkill(!modalSkill);
  };

  const handleAddSkill = (skill: Skill) => {
    if (!id) return
    sendArrayFirebaseData(id, name, {
      skill: arrayUnion(skill)
    })
    setSkills([...skills, skill])
  }

  return (
    <div className="flex flex-col gap-3">
      {children}
      <SpacingContent>
        <div className="flex flex-wrap gap-3 items-center">
          {skills.length === 0 && (
            <AlertInformation>No empty Skills...</AlertInformation>
          )}
          {skills.map((skill) => (
            <BadgeAction key={skill.id} skill={skill} click={handleDelete}>
              {skill.name}
            </BadgeAction>
          ))}
        </div>
        <div className="flex gap-5 items-center mt-10">
          <ButtonAddNewProyect click={handleModalSkill}>
            Add New Skills
          </ButtonAddNewProyect>
        </div>
      </SpacingContent>

      {/* MODAL SKILLS */}
      {modalSkill && (
        <Modal className="max-h-[500px] overflow-y-scroll" modalCv={modalSkill} setModalCv={handleModalSkill}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <TitleNotHash title="Frontend" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Frontend.map((skill) => (
                  <BadgeAction
                    icon="add"
                    active={skills.includes(skill) ? true : false}
                    key={skill.id}
                    skill={skill}
                    click={handleAddSkill}
                  >
                    {skill.name}
                  </BadgeAction>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <TitleNotHash title="Backend" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Backend.map((skill) => (
                  <BadgeAction
                    icon="add"
                    active={skills.includes(skill) ? true : false}
                    key={skill.id}
                    skill={skill}
                    click={handleAddSkill}
                  >
                    {skill.name}
                  </BadgeAction>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
