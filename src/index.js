// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeProvider } from "styled-components";
import { createRoot } from "react-dom/client";
import { IntlProvider } from "react-intl";
import translations from "./i18n/locales";
import theme from "@app/styles/theme/index";
import App from "./App";
const root = createRoot(document.getElementById("root"));

//fecth locale
const queryParams = new URLSearchParams(window.location.search);
const locale = queryParams.get("locale") || "en";
const messages = translations[locale];
const AppWrapper = (
  <IntlProvider
    key={locale}
    messages={messages}
    locale={locale}
    defaultLocale="en"
  >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </IntlProvider>
);
root.render(AppWrapper);
