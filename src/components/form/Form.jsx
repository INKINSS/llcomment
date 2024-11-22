import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { submitForm } from "../../utils/submitForm";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const result = await submitForm(data);
    if (result) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col ssm:w-full md:w-[70%] ssm:px-9 md:px-12 py-8 rounded-lg prose lg:prose-xl md:prose-xl"
    >
      <Input
        type="text"
        label="nickname"
        placeholder="ej:@samito"
        isRequired
        variant="bordered"
        size="lg"
        isInvalid={errors.nickname?.type === "required" && true}
        errorMessage={
          errors.nickname?.type === "required" &&
          "registra un nick para tu artículo"
        }
        {...register("nickname", {
          required: true,
        })}
      />
      <Divider className="my-5 md:my-5" />
      <Input
        type="text"
        label="título de tu artículo"
        placeholder="ej:herramientas para usar con react"
        isRequired
        variant="bordered"
        size="lg"
        isInvalid={errors.title?.type === "required" && true}
        errorMessage={
          errors.title?.type === "required" &&
          "es necesario un titulo principal"
        }
        {...register("title", {
          required: true,
        })}
      />
      <Divider className="my-5 md:my-5" />
      <Input
        type="array"
        label="etiquetas"
        placeholder="ej: javascript, librerías, node, tailwind"
        isRequired
        variant="bordered"
        size="lg"
        isInvalid={errors.tags?.type === "required" && true}
        errorMessage={
          errors.tags?.type === "required" &&
          "es necesario al menos una etiqueta"
        }
        {...register("tags", {
          required: true,
        })}
      />
      <h2 className="text-primary ssm:text-[1.3rem] md:text-[1.6rem] ssm:mt-6 font-semibold">
        contenido principal
      </h2>
      <Textarea
        placeholder="escribe aquí tu artículo"
        variant="bordered"
        size="lg"
        isRequired
        rows={10}
        isInvalid={errors.content?.type === "required" && true}
        errorMessage={
          errors.content?.type === "required" && "es necesario un contenido"
        }
        {...register("content", {
          required: true,
        })}
      />
      <input
        type="submit"
        value={"enviar"}
        className="bg-primary text-white py-2 my-5 rounded-lg text-center cursor-pointer hover:bg-purplePrimary transition duration-200"
      />
    </form>
  );
};

export default Form;
