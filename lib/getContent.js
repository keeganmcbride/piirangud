import fs from "fs/promises";
import path from "path";
import yaml from "yaml";
import sanitize from "sanitize-html";

export async function getContentForLanguage(language) {
  const config = await readConfig();
  const restrictions = await readRestrictions(config.currentRestrictions);
  const translatedRestrictions = restrictions.regulations.map((regulation) =>
    prepareRegulation(regulation, language)
  );
  return {
    regulations: translatedRestrictions,
    metadata: prepareMetadata(restrictions.metadata, language),
    notice: prepareNotice(restrictions.notice, language),
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

function prepareMetadata(metadata, language) {
  return {
    lastUpdated: metadata.lastUpdated,
    sources: metadata.sources[language],
  };
}

function prepareNotice(notice, language) {
  if (!notice) {
    return null;
  }
  return {
    content: notice.content[language],
    cta: notice.cta[language],
    url: notice.url[language],
  };
}

async function readRestrictions(currentRestrictions) {
  const file = await fs.readFile(
    path.join("data", `${currentRestrictions}.yaml`),
    "UTF-8"
  );
  return yaml.parse(file);
}

async function readConfig() {
  const file = await fs.readFile(path.join("data", `config.yaml`), "UTF-8");
  return yaml.parse(file);
}
