import fs from "fs/promises";
import path from "path";
import yaml from "yaml";
import sanitize from "sanitize-html";

export async function getContentForLanguage(language) {
  const contents = await readDataFileContents();
  const parsedContents = yaml.parse(contents);
  const translatedRegulations = parsedContents.regulations.map((regulation) =>
    prepareRegulation(regulation, language)
  );
  return {
    regulations: translatedRegulations,
    metadata: parsedContents.metadata,
  };
}

function prepareRegulation(regulation, language) {
  return {
    category: regulation.category,
    content: sanitize(regulation.content[language]),
    title: regulation.title[language],
    icon: regulation.icon,
  };
}

function readDataFileContents() {
  return fs.readFile(path.join("data", "regulation.yaml"), "UTF-8");
}
