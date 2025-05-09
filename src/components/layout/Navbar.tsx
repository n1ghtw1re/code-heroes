
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled
          ? 'bg-background/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="font-mono text-xl font-bold text-hacker-green hover:animate-glow"
        >
          &lt;CodeHeroes<span className="text-hacker-pink">/</span>&gt;
        </Link>

        <nav>
          <ul className="flex gap-6 font-mono">
            <li>
              <Link
                to="/"
                className="text-foreground hover:text-hacker-green transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/timeline"
                className="text-foreground hover:text-hacker-green transition-colors"
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                to="/open-source"
                className="text-foreground hover:text-hacker-green transition-colors"
              >
                Open Source
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="text-foreground hover:text-hacker-green transition-colors"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-foreground hover:text-hacker-green transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
