import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
        <Head>
            <title>Pizzaria</title>
            <meta name="description" content="A melhor pizzaria" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
            {children}
        <Footer />
    </>
  );
};

export default Layout;