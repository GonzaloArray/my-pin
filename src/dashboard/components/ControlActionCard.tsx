import { ReactNode } from 'react'
import { AddState, EditState, NormalState } from './ButtoStateAction';
import { useButtonContext } from '../context/ButtonContext';
interface ButtonStates {
  normal: ReactNode;
  add: ReactNode;
  edit: ReactNode;
  delete?: ReactNode;
}


export const ControlActionCard = () => {
  const {buttonState, handleButtonClick} = useButtonContext()

  const renderButtons = () => {
    const stateComponents: ButtonStates = {
      normal: <NormalState onClick={handleButtonClick} />,
      add: <AddState onClick={handleButtonClick} />,
      edit: <EditState onClick={handleButtonClick} />,
    };

    return stateComponents[buttonState] || null;
  };

  return <>{renderButtons()}</>;
};







