import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { SpacingContent } from "../../components/SpacingContent";
import { Stack } from "../../components/Stack";
import { Title } from "../../components/Title";
import { Dashboard } from "../../common/icons/Dashboard.icon";
import { StepIntroUser } from "../../components/StepIntroUser";
import { Guide } from "../data/StepGuideIntroduction";
import { GuideCaptureButtonContent, GuideCaptureContent, GuideCaptureSettingContent } from "../../components/GuideCaptureContent";
import { saveConfigToLocalStorage } from "../helpers/saveConfigToLocalStorage";
import { getFirebaseData } from "../../service/firebaseAction";
import { Card as CardDetails } from "../../type";
import { useParams } from "react-router-dom";
import { AlertInformation } from "../../common/components/Alert";

export const Proyects = () => {
  const { id } = useParams()
  const [cards, setCards] = useState<CardDetails[]>([])
  const [status, setStatus] = useState(() => {
    const storedStatus = localStorage.getItem('status');
    return storedStatus ? parseInt(storedStatus, 10) : 1;
  });

  const [removeGuide, setRemoveGuide] = useState(() => {
    const storedRemoveGuide = localStorage.getItem('removeGuide');
    return storedRemoveGuide ? JSON.parse(storedRemoveGuide) : false;
  });

  useEffect(() => {
    const getDataCardsFirebase = async () => {
      if (!id) return
      console.log(id)
      const data = await getFirebaseData(id, 'proyects')
      console.log(data)
      setCards(data.cards)
    }
    return () => {
      getDataCardsFirebase()
    }
  }, [id])

  const handleNextGuides = () => {
    if (Guide.length <= status) {
      setRemoveGuide(true)
      saveConfigToLocalStorage();
    }
    setStatus(status + 1)
  }

  const handlePrevGuides = () => {
    setStatus(status - 1)
  }

  const handleClose = () => {
    setRemoveGuide(true)
    setStatus(0)
    saveConfigToLocalStorage();
  }


  const [dashboard, setDashboard] = useState({
    xr: "grid-cols-2",
    sm: "sm:grid-cols-1",
    md: "md:grid-cols-2",
    lg: "lg:grid-cols-3",
    xl: "xr:grid-cols-4",
    btnActive: 2,
  });

  const handleDashRectangle = (layout: {
    xr: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    btnActive: number;
  }) => {
    setDashboard(layout);
  };

  return (
    <div className="flex flex-col gap-10 p-4 lg:p-10">
      <div className="flex justify-between">
        <Title title="Projects." />
        <div className="flex gap-1">
          <button
            onClick={() =>
              handleDashRectangle({
                xr: "grid-cols-1",
                sm: "sm:grid-cols-1",
                md: "md:grid-cols-1",
                lg: "lg:grid-cols-1",
                xl: "xl:grid-cols-2",
                btnActive: 1,
              })
            }
            className={`${dashboard.btnActive === 1 ? "bg-gray-500" : "hover:bg-gray-500"
              } p-2 transition-colors  rounded-xl`}
          >
            {Dashboard.rectangle}
          </button>
          <button
            onClick={() =>
              handleDashRectangle({
                xr: "grid-cols-2",
                sm: "sm:grid-cols-2",
                md: "md:grid-cols-2",
                lg: "lg:grid-cols-3",
                xl: "xl:grid-cols-3",
                btnActive: 2,
              })
            }
            className={`${dashboard.btnActive === 2 ? "bg-gray-500" : "hover:bg-gray-500"
              } p-2 transition-colors  rounded-xl`}
          >
            {Dashboard.dashboard}
          </button>
          <button
            onClick={() =>
              handleDashRectangle({
                xr: "grid-cols-3",
                sm: "sm:grid-cols-3",
                md: "md:grid-cols-3",
                lg: "lg:grid-cols-4",
                xl: "xl:grid-cols-4",
                btnActive: 3,
              })
            }
            className={`${dashboard.btnActive === 3 ? "bg-gray-500" : "hover:bg-gray-500"
              } p-2 transition-colors  rounded-xl`}
          >
            {Dashboard.square}
          </button>
        </div>
      </div>
      <SpacingContent>
        {
          status === 1 && <GuideCaptureContent />
        }
        <div
          className={`grid ${dashboard.xr} ${dashboard.sm} ${dashboard.md} ${dashboard.lg} ${dashboard.xl} gap-1 md:gap-4 box-border`}
        >
          {
            cards.length === 0 && <AlertInformation>No proyect yet</AlertInformation>
          }
          {
            cards.map(card => (
              <Card
                icon={card.icon?.name ?? ''}
                key={card.id}
                link={card.url}
                title={card.title}
                description={card.description}
              />
            ))
          }
        </div>
      </SpacingContent>
      <Title title="Skills." />
      <SpacingContent>
        <Stack />
      </SpacingContent>
      <Title title="Learning." />
      <SpacingContent>
        <Stack />
      </SpacingContent>
      {
        !removeGuide &&
        (
          <div className='fixed top-0 bottom-0 right-0 left-0 bg-black-100 flex justify-end items-end p-10 z-10'>
            {
              Guide.map(step => (
                <StepIntroUser handleClose={handleClose} status={status} prevGuide={handlePrevGuides} nextGuide={handleNextGuides} index={step.id} title={step.title} content={step.content} key={step.id} />
              ))
            }
          </div>
        )
      }
      {
        status === 2 && <GuideCaptureButtonContent />
      }
      {
        status === 3 && <GuideCaptureSettingContent />
      }
    </div>
  );
};
