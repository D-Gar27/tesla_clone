import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useState } from 'react';
import Footer from '../components/Footer';
import Model from '../components/Model';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
  const [showFooter, setShowFooter] = useState<boolean>(false);
  const mainRef: any = useRef();
  const checkBottom = () => {
    if (typeof window === undefined) return;
    if (mainRef.current.scrollTop + 1000 >= mainRef.current.scrollHeight) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };
  const scrollRef: any = useRef();
  function handleScroll() {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
      <Head>
        <title>Electric Cars, Solar & Clean Energy</title>
        <link
          rel="shortcut icon"
          href="/image/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Navbar />
      <main className="main" ref={mainRef} onScroll={checkBottom}>
        <Model model="Model 3" img_url="model-3" handleScroll={handleScroll} />
        <div ref={scrollRef}>
          <Model model="Model Y" img_url="model-y" />
        </div>
        <Model model="Model S" img_url="model-s" />
        <Model model="Model X" img_url="model-x" />
        <Model
          model="Solar Panels"
          img_url="solar-panel"
          text="Lowest Cost Solar Panels in America"
        />
        <Model
          model="Solar Roof"
          img_url="solar-roof"
          text="Produce Clean Energy From Your Roof"
        />
        <Model model="Accessories" img_url="accessories" />
      </main>
      {showFooter && <Footer />}
    </>
  );
};

export default Home;
