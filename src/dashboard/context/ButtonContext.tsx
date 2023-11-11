import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ButtonStates, Card, StackItem } from '../../type';

export interface ButtonContextProps {
  activeSectionSkill: boolean;
  buttonState: keyof ButtonStates;
  cards: Card[];
  selectedCard: Card;
  activeEditProyect: boolean;
  handleAddNewProyect: (title: string, description: string) => void;
  handleButtonClick: (newState: keyof ButtonStates) => void;
  handleNotActiveEditCard: () => void;
  handleSelectStackIconCard: (stack: StackItem) => void;
  handleEditProyect: (card: Card) => void;
  handleUpdateProyect: (title: string, description: string) => void;
}

export const ButtonContext = createContext<ButtonContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error('useButtonContext must be used within a ButtonProvider');
  }
  return context;
};

export const ButtonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [buttonState, setButtonState] = useState<keyof ButtonStates>('normal');
  const [activeSectionSkill, setActiveSectionSkill] = useState(false);
  const [activeEditProyect, setActiveEditProyect] = useState(true);
  const [cards, setCards] = useState<Card[]>([]);

  const [selectedCard, setSelectedCard] = useState<Card>({
    title: "Title Example Melty",
    description: "Description Example Melty",
    icon: {
      icon: null,
      name: "JS",
      id: "",
    },
  });

  const handleSelectStackIconCard = (stack: StackItem) => {
    setSelectedCard({
      ...selectedCard,
      icon: stack,
    });
  };

  const handleAddNewProyect = (title: string, description: string) => {

    setCards([
      ...cards,
      {
        ...selectedCard,
        title: title,
        description: description,
        id: crypto.randomUUID(),
      },
    ]);

    setSelectedCard({
      title: "Title Example Melty",
      description: "Description Example Melty",
      icon: {
        icon: null,
        name: "JS",
        id: "",
      },
    });

    setButtonState('normal');
    setActiveEditProyect(true)
    handleNotActiveEditCard();
  };

  const handleUpdateProyect = (title: string, description: string) => {

    const findProyect = cards.map(card => card.id === selectedCard.id ? { ...selectedCard, title: title, description: description }: card)

    setCards(findProyect);

    setSelectedCard({
      title: "Title Example Melty",
      description: "Description Example Melty",
      icon: {
        icon: null,
        name: "JS",
        id: "",
      },
    });

    setButtonState('normal');
    setActiveEditProyect(true)
    handleNotActiveEditCard();
  };

  const handleEditProyect = (card: Card) => {
    setSelectedCard({ ...card })
    setActiveEditProyect(false)
  }

  const handleButtonClick = (newState: keyof ButtonStates) => {
    setButtonState(newState);
    setActiveSectionSkill(!activeSectionSkill)
  };

  const handleNotActiveEditCard = () => {
    setActiveSectionSkill(false)
  };

  const value: ButtonContextProps = {
    activeSectionSkill,
    buttonState,
    cards,
    selectedCard,
    activeEditProyect,
    handleAddNewProyect,
    handleButtonClick,
    handleNotActiveEditCard,
    handleSelectStackIconCard,
    handleEditProyect,
    handleUpdateProyect
  };

  return <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>;
};
