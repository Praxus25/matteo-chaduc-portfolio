import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VeilleTechnologique } from './components/VeilleTechnologique';
import { BtsSio } from './components/BtsSio';
import { Alternance } from './components/Alternance';
import { Certifications } from './components/Certifications';
import { Epreuves } from './components/Epreuves';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <VeilleTechnologique />
        <BtsSio />
        <Alternance />
        <Certifications />
        <Epreuves />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
