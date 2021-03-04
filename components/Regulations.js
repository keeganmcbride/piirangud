import { icons } from "./Icons";
import styles from "./Regulations.module.css";

export const Regulations = ({ regulations }) => (
  <>
    {regulations.map((regulation, index) => {
      const IconComponent = icons[regulation.icon];
      return (
        <section
          key={index}
          id={regulation.category}
          className={styles.section}
        >
          <h2>
            <IconComponent />
            <a href={`#${regulation.category}`}>{regulation.title}</a>
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: regulation.content,
            }}
          />
        </section>
      );
    })}
  </>
);
