export const CATEGORIES = [
  { name: 'Política', slug: 'politica' },
  { name: 'Direito', slug: 'direito' },
  { name: 'Futebol', slug: 'futebol' },
  { name: 'Atualidades', slug: 'atualidades' },
  { name: 'Opinião', slug: 'opiniao' },
] as const;

export function slugForCategory(name: string): string {
  const found = CATEGORIES.find((c) => c.name === name);
  return found ? found.slug : name.toLowerCase();
}

export function categoryForSlug(slug: string): string {
  const found = CATEGORIES.find((c) => c.slug === slug);
  return found ? found.name : slug;
}
