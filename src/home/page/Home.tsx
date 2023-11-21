import { Link } from "react-router-dom";
import { useProfileStore } from "../../store/authProfileStore";

export const Home = () => {
  const user = useProfileStore((state) => state.user);

  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <h1 className="text-6xl underline underline-offset-4">Resume Porfolio</h1>
      {user.name !== "" && (
        <Link
          className="bg-gray-500 px-10 py-4 rounded-xl hover:bg-gray-400 text-lg"
          to={`/${user.uid}`}
        >
          Go to Resume
        </Link>
      )}
      {user.name === "" && (
        <Link
          className="bg-gray-500 px-10 py-4 rounded-xl hover:bg-gray-400 text-lg"
          to={`/auth`}
        >
          Login User
        </Link>
      )}
    </div>
  );
};
