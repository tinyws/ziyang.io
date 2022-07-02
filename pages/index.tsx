import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Ziyang Zeng</title>
        <meta
          name="description"
          content="Generalist, full-stack developer, visual artist and audio engineer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto text-blue-600">Hello</div>
    </div>
  );
};

export default Home;
