export const parseDate = (str) => {
  let d = new Date();
  return `${d.getDate()}-${
    d.getMonth() + 1
  }-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};