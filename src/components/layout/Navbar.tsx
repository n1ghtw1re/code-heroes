
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from '@/components/ui/drawer';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Timeline', path: '/timeline' },
    { text: 'Open Source', path: '/open-source' },
    { text: 'Collective', path: '/collective' },
    { text: 'Resources', path: '/resources' },
    { text: 'About', path: '/about' }
  ];

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

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 font-mono">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-foreground hover:text-hacker-green transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <Drawer open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <DrawerTrigger asChild className="md:hidden">
            <button className="text-foreground hover:text-hacker-green transition-colors p-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </button>
          </DrawerTrigger>
          <DrawerContent className="bg-background/95 backdrop-blur-lg">
            <div className="py-6">
              <nav className="px-6">
                <ul className="flex flex-col gap-4 font-mono">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="text-foreground hover:text-hacker-green transition-colors block py-2 text-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};
