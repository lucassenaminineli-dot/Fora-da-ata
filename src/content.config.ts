import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(['Política', 'Direito', 'Futebol', 'Atualidades', 'Opinião']),
    pubDate: z.coerce.date(),
    author: z.string().default('Lucas Sena'),
    // usado só pra colorir a capa do card quando não há imagem: petrol | dark | pale
    coverStyle: z.enum(['petrol', 'dark', 'pale']).default('petrol'),
    // capa opcional: caminho de uma imagem dentro da pasta public (ex: "/capas/meu-artigo.png")
    cover: z.string().optional(),
  }),
});

export const collections = { blog };
