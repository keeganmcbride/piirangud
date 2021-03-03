import { IntlProvider } from "react-intl";
import { translations } from "../translations";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { locale } = pageProps;
  return (
    <IntlProvider
      locale={pageProps.locale}
      defaultLocale="ee"
      messages={translations[locale]}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
