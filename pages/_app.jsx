import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Div, GlobalStyles } from "../styles/Elements.jsx";
import Script from "next/script";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Navbar/>
      <Div style={{marginTop: "55px"}}>
        <Component {...pageProps} />
      </Div>
    </>
  );
}

export default MyApp;
