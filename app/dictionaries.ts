// app/dictionaries.ts
const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // Si por alguna razón el idioma no existe, usamos español por defecto
  const loader = dictionaries[locale] || dictionaries['es'];
  return loader();
};