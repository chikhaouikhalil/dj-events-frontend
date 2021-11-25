import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <Header />
        <div className={styles.container}> {children}</div>
        <Footer />
      </Head>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the best parties",
  description: "Find the latest DJ and other music events.",
  keywords: "music, dj, edm, events",
};
