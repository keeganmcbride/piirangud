import { FormattedMessage } from "react-intl";
import styles from "./Footer.module.css";

export const Footer = () => (
  <footer>
    <small className={styles.credit}>
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
    <small className={styles.credit}>
      <FormattedMessage
        id="analyticsCredits"
        values={{
          plausible: <a href="https://plausible.io">Plausible</a>,
        }}
      />
    </small>
    <small className={styles.credit}>
      <FormattedMessage
        id="openSource"
        values={{
          github: (
            <a href="https://github.com/keeganmcbride/piirangud">GitHub</a>
          ),
        }}
      />
    </small>
  </footer>
);
