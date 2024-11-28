import { useForm } from "react-hook-form";
import { submitForm } from "../../utils/submitForm";
import { Editor } from "@toast-ui/react-editor";
import { useEffect, useRef } from "react";
import { Input } from "@nextui-org/react";
import "@toast-ui/editor/dist/toastui-editor.css";
import "./styles.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const editorRef = useRef(null);

  useEffect(() => {
    register("content", { required: true });
  }, [register]);

  const onSubmit = async (data) => {
    const content = editorRef.current.getInstance().getMarkdown();
    setValue("content", content);

    // Convertir los tags a un array
    const tagsArray = data.tags
      ? data.tags.split(" ").map((tag) => tag.trim()) // Dividir por espacios y eliminar espacios
      : [];

    // Enviar datos al backend
    const result = await submitForm({ ...data, content, tags: tagsArray });
    if (result) {
      reset();
      editorRef.current.getInstance().setMarkdown("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col ssm:w-full md:w-[70%] ssm:px-9 md:px-12 py-8 rounded-lg prose lg:prose-xl md:prose-xl"
    >
      <h3 className="ssm:my-1 text-[.5rem] font-bold">Titulo Principal</h3>
      <Input
        className="ssm:my-2"
        size="lg"
        type="text"
        {...register("title", {
          required: "El título es obligatorio",
          maxLength: {
            value: 50,
            message: "El título no puede tener más de 50 caracteres",
          },
        })}
        placeholder="ej: Herramientas que usan JavaScript"
      />
      {errors.title && (
        <span className="text-red-500">{errors.title.message}</span>
      )}
      <h3 className="ssm:my-1 text-[.5rem] font-bold">Etiquetas</h3>
      <Input
        className="ssm:my-2 ssm:mb-6"
        size="lg"
        type="text"
        {...register("tags", {
          validate: {
            maxWords: (value) =>
              value.split(" ").length <= 3 || "Máximo 3 palabras separadas por espacios",
          },
        })}
        placeholder="ej: javascript react node"
      />
      {errors.tags && (
        <span className="text-red-500">{errors.tags.message}</span>
      )}
      <Editor
        ref={editorRef}
        previewStyle="tab"
        height="300px"
        initialEditType="markdown"
        placeholder="Escribe aquí tu artículo"
        useCommandShortcut={true}
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task"],
          ["table", "link"],
          ["code", "codeblock"],
        ]}
        onChange={() => {
          const content = editorRef.current?.getInstance().getMarkdown();
          setValue("content", content, { shouldValidate: true });
        }}
      />
      {errors.content && (
        <span className="text-red-500">El contenido es requerido</span>
      )}
      <input
        type="submit"
        value={"Enviar"}
        className="bg-primary text-white py-2 mt-10 mb-5 rounded-lg text-center cursor-pointer hover:bg-purplePrimary transition duration-200"
      />
    </form>
  );
};

export default Form;