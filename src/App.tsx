import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';

import {navLinks} from '@/components/NavLinks'

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-ink-100 overflow-x-hidden">
      <Navbar />
      <main>
        {
          navLinks.filter(x => x.show).map(({component: Component, href}) => (
            <Component key={href} />
          ))
        }
      </main>
      <Footer />
    </div>
  );
}

export default App;
