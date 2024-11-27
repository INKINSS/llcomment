import { useForm } from "react-hook-form";
import { submitForm } from "../../utils/submitForm";
import { Editor } from "@toast-ui/react-editor";
import { useEffect, useRef } from "react";
import {Input} from "@nextui-org/react";
import "@toast-ui/editor/dist/toastui-editor.css";
import "./styles.css";

const Form = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const editorRef = useRef(null);

  useEffect(() => {
    register("content", { required: true });
  }, [register]);

  const onSubmit = async (data) => {
    const content = editorRef.current.getInstance().getMarkdown();
    setValue("content", content);
    const result = await submitForm({ ...data, content });
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
      <h3 className="ssm:my-1 text-[.5rem] font-bold">titulo principal</h3>
      <Input className="ssm:my-2" size="lg" type="text" {...register('title')} placeholder="ej: herrramientas que usan javascript" />
      <h3 className="ssm:my-1 text-[.5rem] font-bold">etiquetas</h3>
      <Input className="ssm:my-2 ssm:mb-6" size="lg"{...register('tags')} type="text" placeholder="ej: javascript, react, node" />
      <Editor
        ref={editorRef}
        previewStyle="tab"
        height="300px"
        initialEditType="markdown"
        placeholder="escribe aquí tu artículo"
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
      <input
        type="submit"
        value={"enviar"}
        className="bg-primary text-white py-2 mt-10 mb-5 rounded-lg text-center cursor-pointer hover:bg-purplePrimary transition duration-200"
      />
    </form>
  );
};

export default Form;
