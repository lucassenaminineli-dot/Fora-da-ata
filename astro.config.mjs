// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Depois do deploy, troque pela URL real (ex: https://fora-da-ata.vercel.app)
  // Usada para gerar o RSS e links absolutos corretamente.
  site: 'https://fora-da-ata.vercel.app',
});
