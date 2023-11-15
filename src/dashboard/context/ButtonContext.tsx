import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { ButtonStates, Card, StackItem } from "../../type";
import {
  getFirebaseData,
  sendArrayFirebaseData,
  sendFirebaseData,
  updateArrayFirebaseData,
} from "../../service/firebaseAction";
import { arrayUnion } from "firebase/firestore";
import { useParams } from "react-router-dom";

export interface ButtonContextProps {
  activeSectionSkill: boolean;
  buttonState: keyof ButtonStates;
  cards: Card[];
  selectedCard: Card;
  activeEditProyect: boolean;
  handleAddNewProyect: (id: string, title: string, description: string, url: string) => void;
  handleUpdateProyect: (idUser:string, title: string, description: string, url: string) => void;
  handleButtonClick: (newState: keyof ButtonStates) => void;
  handleNotActiveEditCard: () => void;
  handleSelectStackIconCard: (stack: StackItem) => void;
  handleEditProyect: (card: Card) => void;
  handleDeleteProyect: () => void;
}

export const ButtonContext = createContext<ButtonContextProps | undefined>(
  undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }
  return context;
};

export const ButtonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [buttonState, setButtonState] = useState<keyof ButtonStates>("normal");
  const [activeSectionSkill, setActiveSectionSkill] = useState(false);
  const [activeEditProyect, setActiveEditProyect] = useState(true);
  const [cards, setCards] = useState<Card[]>([]);
  const {id} = useParams()

  const [selectedCard, setSelectedCard] = useState<Card>({
    title: "Title Example Melty",
    description: "Description Example Melty",
    url: '',
    icon: {
      name: "js",
      id: "",
    },
  });

  useEffect(() => {
    const getCardFirebase = async() => {
      if (!id) return
      const data = await getFirebaseData(id, 'proyects')
      setCards(data.cards)
    }
    return () => {
      getCardFirebase()
    }
  }, [id])

  const handleSelectStackIconCard = (stack: StackItem) => {
    console.log(stack);
    setSelectedCard({
      ...selectedCard,
      icon: stack,
    });
  };

  const handleAddNewProyect = (
    idUser: string,
    title: string,
    description: string,
    url: string
  ) => {
    const id = crypto.randomUUID()
    sendArrayFirebaseData(idUser, "proyects", {
      cards: arrayUnion( {
        ...selectedCard,
        title: title,
        description: description,
        url: url,
        id: id
      })
    });

    setCards([
      ...cards,
      {
        ...selectedCard,
        title: title,
        description: description,
        url: url,
        id: crypto.randomUUID(),
      },
    ]);

    setSelectedCard({
      title: "Title Example Melty",
      description: "Description Example Melty",
      url: '',
      icon: {
        name: "js",
        id: "",
      },
    });

    setButtonState("normal");
    setActiveEditProyect(true);
    handleNotActiveEditCard();
  };

  const handleUpdateProyect = async(
    idUser: string,
    title: string,
    description: string,
    url: string,
  ) => {
    updateArrayFirebaseData(idUser, 'proyects', { ...selectedCard, title: title, description: description, url: url })

    const findProyect = cards.map((card) =>
      card.id === selectedCard.id
        ? { ...selectedCard, title: title, description: description, url: url }
        : card
    );

    setCards(findProyect);

    setSelectedCard({
      title: "Title Example Melty",
      description: "Description Example Melty",
      url: '',
      icon: {
        name: "js",
        id: "",
      },
    });

    setButtonState("normal");
    setActiveEditProyect(true);
    handleNotActiveEditCard();
  };

  const handleEditProyect = (card: Card) => {
    setSelectedCard({ ...card });
    setActiveEditProyect(false);
  };

  const handleButtonClick = (newState: keyof ButtonStates) => {
    setButtonState(newState);
    setActiveSectionSkill(!activeSectionSkill);
  };

  const handleNotActiveEditCard = () => {
    setActiveSectionSkill(false);
  };

  const handleDeleteProyect = () => {
    const filterProyect = cards.filter((card) => card.id !== selectedCard.id);
    if (!id) return
    sendFirebaseData(id, 'proyects', {cards: filterProyect})
    setCards(filterProyect);

    setSelectedCard({
      title: "Title Example Melty",
      description: "Description Example Melty",
      url: '',
      icon: {
        name: "js",
        id: "",
      },
    });


    setButtonState("normal");
    setActiveEditProyect(true);
    handleNotActiveEditCard();
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
    handleUpdateProyect,
    handleDeleteProyect,
  };

  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
};
