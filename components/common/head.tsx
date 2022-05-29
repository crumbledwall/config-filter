import Head from 'next/head'

const siteName = process.env.SITE_NAME
const siteLink = process.env.SITE_LINK

const PageHead = () => {
  return (
    <Head>
      <meta httpEquiv="x-dns-prefetch-control " content="on" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge, chrome=1" />
      <meta name="referrer" content="no-referrer" />
      <meta
        name="viewport"
        content="width=device-width,
        initial-scale=1.0,
        maximum-scale=1.0,
        user-scalable=0"
      />
      <meta name="description" content={siteName} />
      <meta property="og:title" content={siteName} />
      <meta property="og:type" content="Website" />
      <meta property="og:url" content={siteLink} />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:description" content={siteName} />
      <meta name="twitter:card" content="summary" />
      <link rel="canonical" href={siteLink} />
      <title>{siteName}</title>
    </Head>
  )
}

export default PageHead
