import { appWithTranslation } from 'next-i18next'
import type { AppProps } from "next/app";
import { config } from "../../next-i18next.config"

const App = ({ Component, pageProps }:AppProps) => (
  <Component {...pageProps} />
)

export default appWithTranslation(App,config)