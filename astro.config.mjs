import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import solid from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://anarchitecture.foundation',
  integrations: [partytown(), tailwind(), astroImageTools, icon(), sitemap(), robotsTxt(), mdx(), astroI18next(), solid(), qwikdev()]
});