import { ProyectCards } from "../components/ProyectCards";
import { Form } from "../components/form/Form";
import { ButtonProvider } from "../context/ButtonContext";

export const ProyectUser = () => {
  return (
    <ButtonProvider>
      <div className="flex flex-col gap-4 md:gap-8">

        <Form/>
        {/* Section Component */}
        <ProyectCards />
      </div>
    </ButtonProvider>
  );
};
