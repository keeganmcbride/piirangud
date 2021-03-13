import Link from "next/link";
import Head from "next/head";
import { useIntl, FormattedMessage } from "react-intl";
import { parse } from "date-fns";
import styles from "./Page.module.css";
import { Regulations } from "./Regulations";
import { Notice } from "./Notice";
import { Footer } from "./Footer";

export const RegulationPage = ({ regulations, metadata, notice }) => {
  const { locale } = useIntl();
  return (
    <>
      <Meta />
      <PlausibleAnalytics />
      <div className={styles.container}>
        <Header locale={locale} metadata={metadata} />
        <main className={styles.main}>
          {notice && <Notice {...notice} />}
          <Regulations regulations={regulations} />
          <h2>
            <FormattedMessage id="sources" />
          </h2>
          <Sources sources={metadata.sources} />
        </main>
        <Footer />
      </div>
    </>
  );
};

const PlausibleAnalytics = () => (
  <Head>
    <script
      async
      defer
      data-domain="piirangud.ee"
      src="https://plausible.io/js/plausible.js"
    />
  </Head>
);

const Header = ({ locale, metadata }) => {
  const intl = useIntl();
  const parsedDate = parse(metadata.lastUpdated, "u-MM-dd mm:HH", new Date());
  return (
    <header className={styles.header}>
      <div>
        <h1>
          <FormattedMessage id="title" />
        </h1>
        <p>
          <FormattedMessage
            id="time"
            values={{
              time: intl.formatDate(parsedDate, {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              }),
            }}
          />
        </p>
      </div>
      <LanguageLinks currentLocale={locale} />
    </header>
  );
};

const LanguageLinks = ({ currentLocale }) => {
  return (
    <nav>
      <ul>
        {[
          { title: "Eesti keeles", locale: "et" },
          { title: "По-русски", locale: "ru" },
          { title: "In English", locale: "en" },
        ]
          .filter((link) => link.locale !== currentLocale)
          .map((link) => (
            <li key={link.locale}>
              <Link locale={link.locale} href="/">
                {link.title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

const Sources = ({ sources }) => {
  return (
    <ul className={styles.sources}>
      {sources.map((source) => (
        <li key={source.url}>
          <a href={source.url}>{source.label}</a>
        </li>
      ))}
    </ul>
  );
};

const Meta = () => {
  const { formatMessage } = useIntl();
  return (
    <Head>
      <title>{formatMessage({ id: "title" })}</title>
      <meta
        name="description"
        content={formatMessage({ id: "metaDescription" })}
      />
      <link rel="alternate" href="https://piirangud.ee/" hreflang="et" />
      <link rel="alternate" href="https://piirangud.ee/en" hreflang="en" />
      <link rel="alternate" href="https://piirangud.ee/ru" hreflang="ru" />
    </Head>
  );
};
