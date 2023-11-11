import { ReactNode } from "react";
import { ButtonActionSubmit, ButtonDeleteProyect, ButtonGenericAction } from "./ButtonActionCrud";
type Crud = 'add' | 'delete'|'edit'| 'normal';
interface Props{
  onClick: (valor: Crud) => void;
  isActive?: boolean;
}
interface ButtonStates {
  normal: ReactNode;
  add: ReactNode;
  edit: ReactNode;
  delete: ReactNode;
}

const AnimatedContainer = ({children}: {children: ReactNode}) => (
  <div className={`animate__animated animate__fadeIn flex flex-wrap gap-3`}>
    {children}
  </div>
);

export const NormalState = ({ onClick, isActive }: { onClick: (state: keyof ButtonStates) => void, isActive: boolean }) => (
  <AnimatedContainer>
    <ButtonGenericAction click={() => onClick('add')}>Add New Project</ButtonGenericAction>
    <ButtonGenericAction isActive={isActive} click={() => onClick('edit')}>Edit Project</ButtonGenericAction>
    <ButtonDeleteProyect click={() => onClick('delete')}>Delete Project</ButtonDeleteProyect>
  </AnimatedContainer>
);

export const AddState = ({ onClick }: Props) => (
  <AnimatedContainer>
    <ButtonGenericAction click={() => onClick('normal')}>Cancel Project</ButtonGenericAction>
    <ButtonActionSubmit>Save Project</ButtonActionSubmit>
  </AnimatedContainer>
);

export const EditState = ({ onClick }: Props) => (
  <AnimatedContainer>
    <ButtonGenericAction click={() => onClick('normal')}>Cancel Edit</ButtonGenericAction>
    <ButtonActionSubmit>Save Edit</ButtonActionSubmit>
  </AnimatedContainer>
);