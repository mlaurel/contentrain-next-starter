import { AppProps } from "next/app";
import "../styles/index.css";
import { MenuProvider } from "../components/global/header/nav-menu-content";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  );
}

