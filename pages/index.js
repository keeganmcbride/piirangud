import { getContentForLanguage } from "../lib/getContent";
import { RegulationPage } from "../components/RegulationPage";

export default RegulationPage;

export async function getStaticProps({ locale }) {
  const content = await getContentForLanguage(locale);
  return {
    props: {
      ...content,
      locale,
    },
  };
}

// completely turn off client-side js
export const config = {
  unstable_runtimeJS: false,
};
