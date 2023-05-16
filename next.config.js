const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: true,
  },
})

module.exports = withNextra({
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "en",
  },
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
