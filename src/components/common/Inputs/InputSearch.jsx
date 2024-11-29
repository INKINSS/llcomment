import { Input } from "@nextui-org/react";

const InputSearch = ({onChange}) => {
  return (
    <Input
      className="ssm:w-[22rem] sm:w-[25rem] px-5 py-2 text-center"
      variant="flat"
      style={{ textAlign: "center" }}
      radius="full"
      type="text"
      size="lg"
      placeholder="¿Qué estás buscando?"
      onChange={onChange}
    />
  );
};

export default InputSearch;
