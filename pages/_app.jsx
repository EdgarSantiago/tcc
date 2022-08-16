import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Div, GlobalStyles } from "../styles/Elements.jsx";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyles />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}
      >
            <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
