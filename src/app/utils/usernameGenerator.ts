const usernameGenerator = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "_");
};

export default usernameGenerator;
