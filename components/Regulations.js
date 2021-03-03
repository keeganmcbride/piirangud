import { icons } from "./Icons";

export const Regulations = ({ regulations }) => (
  <>
    {regulations.map((regulation, index) => {
      const IconComponent = icons[regulation.icon];
      return (
        <section key={index}>
          <h2>
            <IconComponent />
            {regulation.title}
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
