import "../styles/globals.css";
import { useRouter } from "next/router";
import Navbar from "../Components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const hideNavbar = ["/"];
  const showNavbar = hideNavbar.includes(router.pathname) ? false : true;
  return (
    <>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
