import "../styles/globals.css";
import "../Components/Navbar/navbar.scss";
import "../Components/Drawer/drawer.scss";
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
