import { ChangeEvent, useEffect, useState } from "react";
import { SpacingContent } from "../../../components/SpacingContent";
import { Title } from "../../../components/Title";
import { SubmitHandler, useForm } from "react-hook-form";
import { AlertInformation } from "../../../common/components/Alert";
import { getFirebaseData, sendFirebaseData } from "../../../service/firebaseAction";
import { useParams } from "react-router-dom";

interface Selected {
  link: "linkedin" | "github" | "instagram" | "facebook" | "behance",
  url: string
}

type Inputs = {
  linkedin: string;
  github: string;
  instagram: string;
  behance: string;
  facebook: string;
};

export const SelectLink = () => {
  const { id } = useParams()
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedOptionValues, setSelectedOptionValues] = useState<Selected[]>(
    []
  );

  useEffect(() => {
    const getLinkUser = async() => {
      if (!id) return
      const data = await getFirebaseData(id, 'linksUser')
      const options = Object.entries(data).map(option => {
        return {
          link: option[0],
          url: option[1]
        }
      }) as Selected[]

      setSelectedOptionValues(options)
    }

    return () => {
      getLinkUser()
    }
  }, [id])

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (id) {
      sendFirebaseData(id,'linksUser',data)
    }
  };

  const handleChangeLink = (e: ChangeEvent<HTMLSelectElement>) => {
    const option = e.target.value;
    const findOption = selectedOptionValues.find(select => select.link === option)

    if (findOption) return

    setSelectedOptionValues([
      ...selectedOptionValues,
      {
        link: option as Selected['link'],
        url: ''
      },
    ]);
    setSelectedValue("");
  };

  return (
    <div className="flex flex-col gap-8 mt-10">
      <Title title="Select Link Redirect" />
      <SpacingContent>
        <div className="flex flex-col gap-3">
          <select
            onChange={handleChangeLink}
            className="text-black p-4  rounded-xl w-[300px]"
            value={selectedValue}
          >
            <option value="">--Select Link--</option>
            <option value="github">Github</option>
            <option value="linkedin">Linkedin</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="behance">Behance</option>
          </select>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl underline underline-offset-4">Links</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 mt-10">
            {selectedOptionValues.length === 0 && <AlertInformation>No Link Directily</AlertInformation>}
            {selectedOptionValues.map((optionValue) => {
              const linkName = optionValue.link;
              return (
                <label key={linkName} className="flex flex-col gap-4">
                  <span className="text-4xl">{linkName}:</span>
                  <input
                    {...register(linkName, { required: true })}
                    type="url"
                    defaultValue={optionValue.url}
                    placeholder={`Ex: https://${linkName}`}
                    className="bg-transparent border-b border-white w-full text-4xl outline-none"
                  />
                </label>
              );
            })}

            <button
              type="submit"
              className="w-[400px] text-2xl h-[100px] border border-white-100 py-3 px-10 hover:bg-white-100 mt-5"
            >
              Save Profile
            </button>
          </form>
        </div>
      </SpacingContent>
    </div>
  );
};
