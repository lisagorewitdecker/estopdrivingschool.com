import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowUp,
  faCar,
  faCheckSquare,
  faChild,
  faCoffee,
  faUniversalAccess,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import type { AppProps } from "next/app";
import "../styles/globals.css";

library.add(
  faCoffee,
  faCheckSquare,
  faUser,
  faChild,
  faUniversalAccess,
  faCar,
  faArrowUp
);
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'GTM-HY6B7RQQ9N'
}
TagManager.initialize(tagManagerArgs);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
