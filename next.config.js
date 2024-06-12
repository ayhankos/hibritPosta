/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  i18n: {
    locales: ["en-US", "fr", "nl-NL", "nl-BE"],
    defaultLocale: "en-US",

    domains: [
      {
        domain: "localhost",
        defaultLocale: "en-US",
      },
      {
        domain: "localhost",
        defaultLocale: "fr",
      },
      {
        domain: "localhost",
        defaultLocale: "nl-NL",
        locales: ["nl-BE"],
      },
    ],
  },
};

module.exports = nextConfig;
