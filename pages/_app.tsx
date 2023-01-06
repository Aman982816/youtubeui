import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import { AppContext } from "../context/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    //providing redux store to the app
    <Provider store={store}>
      {/*providing context api to the app */}
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </Provider>
  );
}
