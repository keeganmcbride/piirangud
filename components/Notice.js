import styles from "./Notice.module.css";

export const Notice = ({ content, cta, url }) => (
  <div className={styles.notice}>
    <InfoIcon className={styles.icon} />

    <p className={styles.content}>{content}</p>

    <a href={url} className={styles.cta} target="_blank">
      {cta}
    </a>
  </div>
);

const InfoIcon = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 29.301c7.346 0 13.301-5.955 13.301-13.301S23.346 2.699 16 2.699 2.699 8.654 2.699 16 8.654 29.301 16 29.301zM16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z"
      fill="#FF9F1C"
    />
    <path
      d="M17.961 6.94H14.03l.353 12.529h3.234l.344-12.53zM16 25.06c1.13 0 2.112-.935 2.12-2.097-.008-1.144-.99-2.079-2.12-2.079-1.166 0-2.13.935-2.12 2.08-.01 1.161.954 2.096 2.12 2.096z"
      fill="#FF9F1C"
    />
  </svg>
);
