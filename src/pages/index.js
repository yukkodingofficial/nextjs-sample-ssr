import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import additionalStyles from "../styles/Home.module.css";
import { appName } from "../constants/global";

const styles = {
  container: `container mx-auto`,
  title: `text-3xl font-bold underline`,
};

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Home .:. {appName}</title>
        <meta name="description" content={props.appDescription} />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title + " " + additionalStyles.title}>HOME</h1>
        <p>Hello world!</p>
        <p>Main Service : {props.mainService}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const { MAIN_SERVICE } = process.env;
  return {
    props: {
      appDescription: "Home Page Sample Next SSR",
      mainService: MAIN_SERVICE,
    },
  };
}
