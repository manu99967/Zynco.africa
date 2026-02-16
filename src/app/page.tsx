import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { TrustedBy } from '../components/TrustedBy';
import { Services } from '../components/Services';
import { WhyZynco } from '../components/WhyZynco';
import { Values } from '../components/Values';
import { WhoWeServe } from '../components/WhoWeServe';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main role="main">
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <WhyZynco />
        <Values />
        <WhoWeServe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
