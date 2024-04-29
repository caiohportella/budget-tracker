export const Currencies = [
  {
    value: "BRL",
    label: "R$ Real",
    locale: "pt-BR",
  },
  {
    value: "USD",
    label: "$ Dollar",
    locale: "en-US",
  },
  {
    value: "EUR",
    label: "€ Euro",
    locale: "fr-FR",
  },
  {
    value: "GBP",
    label: "£ Pound",
    locale: "en-GB",
  },
  {
    value: "JPY",
    label: "¥ Yen",
    locale: "ja-JP",
  },
];

export type Currency = (typeof Currencies)[0];
