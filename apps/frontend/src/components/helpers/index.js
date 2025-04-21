export const formatDate = (isoDateString) => {
  if (!isoDateString) return "";
  const date = new Date(isoDateString);
  return date.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

export const changeFormatDate = (isoDateString) => {
  if (!isoDateString) return "";
  const date = new Date(isoDateString);
  return date.toLocaleDateString("ru-RU");
};
