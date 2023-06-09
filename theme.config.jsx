import { useConfig } from "nextra-theme-docs"
import { useRouter } from "next/router"

const logo = (
  <span>
    React Aria Learning
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
)

const config = {
  project: {
    link: "https://github.com/newman-afk/React-Aria-Learning",
  },
  docsRepositoryBase:
    "https://github.com/newman-afk/React-Aria-Learning/tree/main",
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Rust",
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === "/" || !title
        ? "https://nextra.site/og.jpeg"
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta name='msapplication-TileColor' content='#fff' />
        <meta name='theme-color' content='#fff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta
          name='description'
          content='Make beautiful websites with Next.js & MDX.'
        />
        <meta
          name='og:description'
          content='Make beautiful websites with Next.js & MDX.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={socialCard} />
        <meta name='twitter:site:domain' content='nextra.site' />
        <meta name='twitter:url' content='https://nextra.site' />
        <meta
          name='og:title'
          content={title ? title + " – Nextra" : "Nextra"}
        />
        <meta name='og:image' content={socialCard} />
        <meta name='apple-mobile-web-app-title' content='Nextra' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
        <link rel='icon' href='/favicon.png' type='image/png' />
        <link
          rel='icon'
          href='/favicon-dark.svg'
          type='image/svg+xml'
          media='(prefers-color-scheme: dark)'
        />
        <link
          rel='icon'
          href='/favicon-dark.png'
          type='image/png'
          media='(prefers-color-scheme: dark)'
        />
      </>
    )
  },
  // banner: {
  //   key: '2.0-release',
  //   text: (
  //     <a href="https://nextra.site" target="_blank" rel="noreferrer">
  //       🎉 Nextra 2.0 is released. Read more →
  //     </a>
  //   )
  // },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className='nx-cursor-default'>{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className='flex w-full flex-col items-center sm:items-start'>
        <span>Powered by Rust</span>

        <p className='mt-6 text-xs'>
          © {new Date().getFullYear()} The Nextra Project.
        </p>
      </div>
    ),
  },
  search: {
    placeholder: "Search documentation...",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
  ],
  darkMode: true,
}

export default config
