import { useForm } from "react-hook-form";
import { submitForm } from "../../utils/submitForm";
import { Editor } from "@toast-ui/react-editor";
import { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import './styles.css'

const Form = () => {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
  } = useForm();
  const editorRef = useRef(null);

  useEffect(() => {
    register("content", { required: true });
  }, [register]);

  const onSubmit = async (data) => {
    const content = editorRef.current.getInstance().getMarkdown();
    setValue("content", content);
    const result = await submitForm({...data, content});
    if (result) {
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col ssm:w-full md:w-[70%] ssm:px-9 md:px-12 py-8 rounded-lg prose lg:prose-xl md:prose-xl"
    >
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
