import {useEffect, useLayoutEffect, useState} from 'react'

import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import AppLoader from '@/components/AppLoader';

import {navLinks} from '@/components/NavLinks'

function App() {
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
      (function () {
        try {
          const stored = localStorage.getItem('portfolio-theme') || 'dark';
          let resolved = stored;
          if (stored === 'system') {
            resolved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          const root = document.documentElement;
          root.classList.toggle('dark', resolved === 'dark');
          root.classList.toggle('light', resolved === 'light');
        } catch{
          document.documentElement.classList.add('dark');
        }
      })();
  }, [])

  useEffect(() => {
    // Wait until the browser has finished loading
    if (document.readyState === 'complete') {
      setLoading(false);
      return;
    }

    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (loading) {
    return <AppLoader />;
  }

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

