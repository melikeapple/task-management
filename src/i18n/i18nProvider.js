import React from "react";
import { createIntl, createIntlCache, RawIntlProvider } from "react-intl";
import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/tr";
import enMessages from "./messages/en.json";
import trMessages from "./messages/tr.json";

const allMessages = {
  en: enMessages,
  tr: trMessages,
};
export default function I18nProvider({ children }) {
  const messages = allMessages["tr"];
  const cache = createIntlCache();
  const intl = createIntl(
    {
      locale: "tr",
      messages: messages,
    },
    cache
  );
  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
}
