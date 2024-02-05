export const getRefFromEmail = (email: string) => {
  if (email) {
    const mailName = email.split("@")[1];
    return `https://${mailName}`;
  }
  return "";
};
