const dictionaries = {
  en: () => import('@/data/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/data/dictionaries/es.json').then((module) => module.default)
};

export const getI18nDictionary = async (locale) => {
  return await dictionaries[locale]();
};
