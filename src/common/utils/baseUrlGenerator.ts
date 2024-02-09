export const baseUrlGenerator = () => {
  return import.meta.env.NODE_ENV === "development"
    ? "http://localhost:7542/2.0/"
    : import.meta.env.VITE_APP_BASE_URL;
};
