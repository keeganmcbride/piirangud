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
        </main>
        <footer className={styles.footer}>Piirangud.ee</footer>
      </div>
    </>
  );
};

const Header = ({ locale, metadata }) => {
  return (
    <header className={styles.header}>
      <div>
        <h1>
          <FormattedMessage id="title" />
        </h1>
        <p>
          <FormattedMessage
            id="time"
            values={{ time: Date.parse(metadata.lastUpdated) }}
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
