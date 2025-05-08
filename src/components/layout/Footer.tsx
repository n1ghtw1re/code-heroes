
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-8 border-t border-border mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <Link to="/" className="font-mono text-xl font-bold text-hacker-green">
              &lt;CodeHeroes<span className="text-hacker-pink">/</span>&gt;
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Celebrating the pioneers who made tech a force for good.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Code Heroes Unite
            </p>
            <p className="text-xs mt-1 text-muted-foreground">
              Created to inspire the next generation of ethical tech pioneers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
