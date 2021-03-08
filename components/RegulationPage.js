import Link from "next/link";
import Head from "next/head";
import { useIntl, FormattedMessage } from "react-intl";
import styles from "./Page.module.css";
import { Regulations } from "./Regulations";
import { Notice } from "./Notice";

export const RegulationPage = ({ regulations, metadata, notice }) => {
  const { locale } = useIntl();
  return (
    <>
      <Meta />
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
        <footer>
          <small>
            <FormattedMessage
              id="iconCredits"
              values={{
                eucalyp: (
                  <a href="https://www.flaticon.com/authors/eucalyp">Eucalyp</a>
                ),
                flaticon: <a href="https://www.flaticon.com/">Flaticon</a>,
              }}
            />
          </small>
        </footer>
      </div>
    </>
  );
};

const Header = ({ locale, metadata }) => {
  const intl = useIntl();
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
              time: intl.formatDate(metadata.lastUpdated, {
                year: "numeric",
                month: "numeric",
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
