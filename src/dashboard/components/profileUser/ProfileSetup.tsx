import { Title } from '../../../components/Title'
import { SpacingContent } from '../../../components/SpacingContent'
import { Input } from '../Input'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs } from '../../page/ProfileUser';
import { sendFirebaseData } from '../../../service/firebaseAction';
import { useProfileStore } from '../../../store/authProfileStore';
import { toast } from 'sonner';

export const ProfileSetup = () => {
  const user = useProfileStore((state) => state.user);

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await sendFirebaseData(user.uid, "users", { ...user, ...data });
    toast.success('Saved Successfully')
  };

  return (
    <form className="flex flex-col gap-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <Title title="Name" />
        <SpacingContent>
          <Input
            value={user.name}
            register={register}
            required
            name="name"
            placeholder="Ex: Melty Smile"
            type="text"
          />
        </SpacingContent>
      </div>
      <div className="flex flex-col gap-3">
        <Title title="Title" />
        <SpacingContent>
          <Input
            value={user.title}
            register={register}
            required
            name="title"
            placeholder="Ex: Hello :), My name is Julian Melty."
            type="text"
          />
        </SpacingContent>
      </div>
      <div className="flex flex-col gap-3">
        <Title title="Job Description" />
        <SpacingContent>
          <Input
            value={user.job}
            register={register}
            required
            name="job"
            placeholder="Ex: Frontend Developer."
            type="text"
          />
        </SpacingContent>
      </div>
      <div className="flex flex-col gap-3">
        <Title title="Description" />
        <SpacingContent>
          <div className="border-b border-white-100">
            <textarea
              {...register("description", { required: true })}
              defaultValue={user.description}
              className="w-full xl:w-[1000px] p-5 bg-transparent  font-bold text-3xl outline-none"
              name="description"
              rows={5}
              placeholder="Ex: I'm from Argentina, my name is Melty :)"
            ></textarea>
          </div>
        </SpacingContent>
      </div>
      <SpacingContent>
        <button
          type="submit"
          className="w-[400px] text-2xl h-[100px] border border-white-100 py-3 px-10 hover:bg-white-100"
        >
          Save Profile
        </button>
      </SpacingContent>
    </form>
  )
}
