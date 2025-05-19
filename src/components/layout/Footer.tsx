
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="font-mono text-lg font-bold text-hacker-green hover:animate-glow">
              &lt;CodeHeroes<span className="text-hacker-pink">/</span>&gt;
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Celebrating pioneers who changed technology for good
            </p>
            <a 
              href="mailto:n1ghtw1re@proton.me" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-hacker-green transition-colors mt-2"
            >
              <Mail size={16} />
              n1ghtw1re@proton.me
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-hacker-green transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-hacker-green transition-colors">
              Terms of Service
            </Link>
            <Link to="/about" className="hover:text-hacker-green transition-colors">
              About
            </Link>
            <a 
              href="https://github.com/n1ghtw1re"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hacker-green transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-border text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Code Heroes Unite. All rights reserved.</p>
          <p className="mt-2">
            Designed by{' '}
            <a 
              href="https://n1ghtw1re-studios.lovable.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-hacker-green hover:underline"
            >
              N1ghtw1re Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
