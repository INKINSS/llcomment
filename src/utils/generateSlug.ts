export const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };