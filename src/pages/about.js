import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import additionalStyles from "../styles/About.module.css";
import { appName } from "../constants/global";

const styles = {
  container: `container mx-auto`,
  title: `text-3xl font-bold underline`,
};

const About = (props) => {
  return (
    <div>
      <Head>
        <title>About .:. {appName}</title>
        <meta name="description" content={props.appDescription} />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title + " " + additionalStyles.title}>About</h1>
        <p>About Page</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;

export async function getStaticProps() {
  const { MAIN_SERVICE } = process.env;
  return {
    props: {
      appDescription: "About Page Sample Next SSR",
      mainService: MAIN_SERVICE,
    },
  };
}
