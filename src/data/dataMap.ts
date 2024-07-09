import JsonData from "./data.json";

const idMap: { [key: string]: number } = {};

JsonData.Brastlewark.forEach((element) => {
  idMap[element.name] = element.id;
});

export const getIdByName = (name: string) => idMap[name];
