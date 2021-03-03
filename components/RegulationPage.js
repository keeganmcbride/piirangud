import Link from "next/link";
import Head from "next/head";
import { useIntl, FormattedMessage } from "react-intl";
import styles from "./Page.module.css";
import { Regulations } from "./Regulations";

export const RegulationPage = ({ regulations, metadata }) => {
  const { formatMessage, locale } = useIntl();
  return (
    <>
      <Head>
        <title>{formatMessage({ id: "title" })}</title>
      </Head>
      <div className={styles.container}>
        <Header locale={locale} metadata={metadata} />
        <main className={styles.main}>
          <Regulations regulations={regulations} />
          <h2>
            <FormattedMessage id="sources" />
          </h2>
          {metadata.sources.map((source) => (
            <a key={source} href={source}>
              {source}
            </a>
          ))}
        </main>
        <footer>
          <FormattedMessage
            id="iconCredits"
            values={{
              eucalyp: (
                <a href="https://www.flaticon.com/authors/eucalyp">Eucalyp</a>
              ),
              flaticon: <a href="https://www.flaticon.com/">Flaticon</a>,
            }}
          />
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
          { title: "Eesti keeles", locale: "ee" },
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
