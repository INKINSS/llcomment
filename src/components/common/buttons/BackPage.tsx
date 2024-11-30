export const BackPage = () => {
  return (
    //button to go back to the previous page
    <div className="flex justify-center mb-10">
      <button
        className="inline-block md:text-[1.2rem] font-bold text-center prose md:prose-xl"
        onClick={() => window.history.back()}
      >
        regresar
      </button>
    </div>
  );
};
