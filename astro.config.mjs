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
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";
import vercel from "@astrojs/vercel/static";
import preact from "@astrojs/preact";
import blog from "astro-blog";
import tunnel from "astro-tunnel";
import htmx from 'astro-htmx';
import matthiesenxyzgists from "@matthiesenxyz/astro-gists";
import webmanifest from "astro-webmanifest";
import playformFormat from "@playform/format";
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://anarchitecture.foundation',
  integrations: [partytown(), tailwind(), astroImageTools, icon(), sitemap(), robotsTxt(), mdx(), astroI18next(), solid(), qwikdev(), svelte(), preact({
    compat: true
  }), blog(), tunnel(), matthiesenxyzgists(), htmx(), webmanifest(), playformFormat(), playformCompress(), playformInline(), sentry(), spotlightjs()],
  output: "static",
  adapter: vercel({
    imageService: true,
    devImageService: 'squoosh',
    webAnalytics: {
      enabled: true
    }
  })
});