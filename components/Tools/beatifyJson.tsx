const JsonBeautify = (json: string) => {
  const obj = JSON.parse(json);
  return JSON.stringify(obj, null, 2);
};
