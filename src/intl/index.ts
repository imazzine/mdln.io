import { createIntl, createIntlCache } from "@formatjs/intl";
import formatMessages from "../helpers/intl/formatMessages";
import CLI_ERR from "./messages/CLI_ERR";
import CLI from "./messages/CLI";

const messages = formatMessages({
  ...CLI,
  ...CLI_ERR,
});

const cache = createIntlCache();
const intl = createIntl(
  {
    locale: "en-US",
    onError: () => {
      return;
    },
  },
  cache,
);
export { intl, messages };
