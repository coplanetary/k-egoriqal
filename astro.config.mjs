import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://anarchitecture.foundation',
  integrations: [partytown(), tailwind(), astroImageTools, icon(), sitemap(), robotsTxt()]
});