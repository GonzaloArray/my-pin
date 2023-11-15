import Style from "./LinkNetworking.module.css";

import { LinkAction } from "./LinkAction";
import { KeyBoard } from "../common/icons/KeyBoard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFirebaseData } from "../service/firebaseAction";
import { LinkIcon } from "../common/icon/Link.icon";

type ValidLinkKeys = keyof typeof LinkIcon

interface Props {
  toggle: boolean
}

export const LinkNetworking = ({ toggle }: Props) => {
  const { id } = useParams()
  const [links, setLinks] = useState({})

  useEffect(() => {
    const getDataLink = async () => {
      if (!id) return
      const data = await getFirebaseData(id, 'linksUser')
      setLinks(data)
    }
    return () => {
      getDataLink()
    }
  }, [id])

  return (
    <div
      className={`absolute top-48 right-1 flex flex-col gap-2 h-[100px] items-end ${Style.table} `}
    >
      <div className={` bg-gray-400 rounded-lg z-100 ${toggle ? '' : '-mr-8'}`}>
        {
          Object.entries(links).map((link, i) => {
            const controlKey = `control${i + 1}` as keyof typeof KeyBoard;
            const linkHref = link[1] as string;
            const selectedLink = link[0] as ValidLinkKeys;
            return (
              <LinkAction key={link[0]} className={`relative hover:bg-black-100 p-2 flex justify-center items-center transition-all ${Style.link_active}`} href={linkHref}>
                <div className={Style.tooltip}>
                  {KeyBoard[controlKey]}
                </div>
                {LinkIcon[selectedLink]}
              </LinkAction>
            );
          })
        }
      </div>
    </div>
  );
};
