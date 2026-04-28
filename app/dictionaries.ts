const dictionaries: any = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // Si locale no es 'es' ni 'en', que use 'es' por defecto para no dar error
  const selectedLocale = dictionaries[locale] ? locale : 'es';
  return dictionaries[selectedLocale]();
};