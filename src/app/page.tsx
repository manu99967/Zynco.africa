import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CTAStrip } from '../components/CTAStrip';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { ActionCTA } from '../components/ActionCTA';
import { WhyZynco } from '../components/WhyZynco';
import { Values } from '../components/Values';
import { WhoWeServe } from '../components/WhoWeServe';
import { TrustedBy } from '../components/TrustedBy';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main role="main">
        <Hero />
        <About />
        <CTAStrip />
        <Services />
        <ActionCTA />
        <WhyZynco />
        <Values />
        <WhoWeServe />
        <TrustedBy />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
