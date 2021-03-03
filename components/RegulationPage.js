import Link from "next/link";
import Head from "next/head";
import styles from "./Page.module.css";
import { Regulations } from "./Regulations";

export const RegulationPage = ({ regulations, metadata, locale }) => {
  return (
    <>
      <Head>
        <title>Piirangud</title>
      </Head>
      <div className={styles.container}>
        <LanguageLinks currentLocale={locale} />
        <main className={styles.main}>
          <Regulations regulations={regulations} />
        </main>
        <footer className={styles.footer}>Piirangud.ee</footer>
      </div>
    </>
  );
};

const LanguageLinks = ({ currentLocale }) => {
  return [
    { title: "Eesti keeles", locale: "ee" },
    { title: "По-русски", locale: "ru" },
    { title: "In English", locale: "en" },
  ]
    .filter((link) => link.locale !== currentLocale)
    .map((link) => (
      <Link key={link.locale} locale={link.locale} href="/">
        {link.title}
      </Link>
    ));
};
