import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Supabase Auth Docs',
  tagline: 'Clear API documentation for Supabase Auth',
  favicon: 'img/favicon.ico',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'], // Enable Mermaid diagrams

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://supabase-auth-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Supabase Auth Docs',
      logo: {
        alt: 'Supabase Logo',
        src: 'img/logo.svg',
      },
      items: [
  {
    to: '/docs/getting-started',
    position: 'left',
    label: 'Docs',
  },
  {
    href: 'https://github.com/Abhinay-Singh-1411/Supabase-Auth-Docs',
    label: 'GitHub',
    position: 'right',
  },
],
    },
    footer: {
  style: 'dark',
  links: [
    {
      title: 'Docs',
      items: [
        {
          label: 'Getting Started',
          to: '/docs/getting-started',
        },
        {
          label: 'How Supabase Auth Works',
          to: '/docs/concepts/how-supabase-auth-works',
        },
        {
          label: 'signUp() Reference',
          to: '/docs/api-reference/sign-up',
        },
      ],
    },
    {
      title: 'Resources',
      items: [
        {
          label: 'Supabase Docs',
          href: 'https://supabase.com/docs/guides/auth',
        },
        {
          label: 'Google Style Guide',
          href: 'https://developers.google.com/style',
        },
      ],
    },
    {
      title: 'Connect',
      items: [
        {
          label: 'GitHub',
          href: 'https://github.com/Abhinay-Singh-1411/Supabase-Auth-Docs',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/abhinay-singh-8a2213269',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} Abhinay Singh. Built with Docusaurus.`,
},
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
