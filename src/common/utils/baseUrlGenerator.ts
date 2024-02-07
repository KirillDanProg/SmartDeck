export const baseUrlGenerator = () => {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:7542/2.0/"
    : process.env.REACT_APP_BASE_URL;
};
