import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Fora da Ata',
    description: 'Fatos. Contexto. Opinião. — Mais que notícias, outras perspectivas.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.excerpt,
        pubDate: post.data.pubDate,
        author: post.data.author,
        categories: [post.data.category],
        link: `/blog/${post.id}/`,
      })),
  });
}
