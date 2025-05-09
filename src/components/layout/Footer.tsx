
import { Link } from 'react-router-dom';
import { Github, Link as LinkIcon, Twitter, Mastodon } from 'lucide-react';

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
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="text-center md:text-right">
              <p className="text-sm font-semibold text-foreground">
                N1ghtw1re Studios
              </p>
              <div className="flex justify-center md:justify-end gap-3 mt-2">
                <a 
                  href="https://n1ghtw1re.neocities.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="text-muted-foreground hover:text-hacker-green transition-colors"
                >
                  <LinkIcon size={18} />
                </a>
                <a 
                  href="https://github.com/n1ghtw1re" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-hacker-green transition-colors"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://bsky.app/profile/n1ghtw1re.neocities.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Bluesky"
                  className="text-muted-foreground hover:text-hacker-green transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="https://defcon.social/@n1ghtw1re" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Mastodon"
                  className="text-muted-foreground hover:text-hacker-green transition-colors"
                >
                  <Mastodon size={18} />
                </a>
              </div>
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
      </div>
    </footer>
  );
};
