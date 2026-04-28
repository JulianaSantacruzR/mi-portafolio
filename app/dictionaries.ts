const dictionaries: any = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // Si el locale no existe en nuestro objeto, usamos 'es' por defecto
  const fn = dictionaries[locale] || dictionaries['es'];
  return fn();
};