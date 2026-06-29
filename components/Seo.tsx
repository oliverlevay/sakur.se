import Head from 'next/head';

const SITE_URL = 'https://www.sakur.se';
const DEFAULT_IMAGE = '/images/sakur-slogan.png';

type Props = {
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/oliver". Used for canonical + og:url. */
  path: string;
  /** OG/Twitter image path (1202x630). Defaults to the Sakur banner. */
  image?: string;
  type?: 'website' | 'profile';
  /** Optional schema.org structured data. */
  jsonLd?: Record<string, unknown>;
};

// Centralises all per-page SEO meta so every route ships a description,
// canonical URL, Open Graph + Twitter cards, and optional structured data.
const Seo = ({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
}: Props) => {
  const url = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${image}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Sakur" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1202" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
};

export default Seo;
