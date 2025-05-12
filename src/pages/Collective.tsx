import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Network } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TypingText } from '@/components/ui/TypingText';

interface CollectiveSite {
  name: string;
  url: string;
  description: string;
}

const collectiveSites: CollectiveSite[] = [
  {
    name: "Circuit Breach",
    url: "https://circuit-breach.neocities.org/",
    description: "Cyberpunk media analysis beyond the neon glow. We dissect the genre's core themes, challenge tech-bro interpretations, and explore the wires connecting fiction to our reality through philosophy, sociology, and science."
  },
  {
    name: "Crazy Eddie's",
    url: "https://crazy-eddies.netlify.app/",
    description: "Eddie's philosophy is simple: high-end tech shouldn't be locked behind corporate walls. Everyone deserves the chance to jack in with quality gear—especially if that gear might occasionally cause problems for the corps."
  },
  {
    name: "Github",
    url: "https://github.com/n1ghtw1re",
    description: "Repository for our projects. We provide privacy-first development, decentralized tools, and web design that respects user freedom. We build open, ethical, and human-centered technology."
  },
  {
    name: "Gumroad",
    url: "https://n1ghtw1re.gumroad.com/",
    description: "Show support for this and all our other projects by checking out our Gumroad shop."
  },
  {
    name: "Interlinked Records",
    url: "https://interlinked-records.lovable.app/",
    description: "Based in Siem Reap, Cambodia, INTERLINKED RECORDS is an independent label founded in the digital underground, operating at the intersection of dub techno, industrial soundscapes, and gothic synth experiments."
  },
  {
    name: "Into Ideaspace",
    url: "https://into-ideaspace.lovable.app/",
    description: "Into Ideaspace is both a manifesto and a map—an urgent call to reclaim the vast terrain of human thought from the hands of those who seek to fence it off and sell it back to us. In an age when corporations patent dreams and algorithms rewrite reality, this book dares to ask: What if imagination were a human right?"
  },
  {
    name: "N1ghtw1re Collective",
    url: "https://n1ghtw1re.neocities.org",
    description: "N1ghtw1re is an anonymous collective dedicated to empowering individuals to reclaim their privacy, autonomy, and freedom in an age dominated by surveillance, algorithms, and corporate control. N1ghtw1re is more than a website—it's a living hypersigil, a digital beacon for those ready to challenge the status quo and embrace the tools of liberation."
  },
  {
    name: "N1ghtw1re Studios",
    url: "https://n1ghtw1re-studios.lovable.app/",
    description: "N1ghtw1re is a digital studio specializing in creative, privacy-focused, websites, applications, and media projects with a retro design and aesthetic. Our goal is to reclaim the internet from algorithms and return the net to the individual."
  },
  {
    name: "Synapse Express",
    url: "https://synapse-express.netlify.app/",
    description: "Encrypted mnemonic package delivery across networks and physical planes. Your neurons, our highway."
  },
  {
    name: "Taco Bell San Angeles",
    url: "https://taco-bell-sanangeles.netlify.app/",
    description: "Now all restaurants are Taco Bell."
  },
  {
    name: "Tech Noir",
    url: "https://tech-noir.netlify.app/",
    description: "The ultimate Hollywood nightclub. We guarantee you'll be saying \"I'll be back\" after your first visit."
  },
  {
    name: "TheDonStone",
    url: "https://thedonstone.lovable.app/",
    description: "The Don Stone is a Siem Reap-based electronic music producer and DJ known for underground warehouse techno, experimental bass, and dark ambient soundscapes."
  },
  {
    name: "Vinyl Violence",
    url: "https://vinyl-violence.netlify.app/",
    description: "Deep dives into classic albums, thoughts on emerging scenes, explorations of the culture surrounding the music, and maybe the occasional rant."
  }
];

const Collective = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeSite, setActiveSite] = useState<CollectiveSite | null>(null);
  
  // Add static matrix background characters
  const [matrixChars, setMatrixChars] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const elements: JSX.Element[] = [];
    
    for (let i = 0; i < 50; i++) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      const x = Math.random() * 100; // random position
      const y = Math.random() * 100;
      const size = Math.random() * 0.5 + 0.8; // random size
      const opacity = Math.random() * 0.3 + 0.1; // random opacity
      const animationDuration = Math.random() * 15 + 10; // random duration
      
      elements.push(
        <div
          key={i}
          className="matrix-character absolute"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            opacity,
            fontSize: `${size}rem`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          {randomChar}
        </div>
      );
    }
    
    setMatrixChars(elements);
  }, []);
  
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, collectiveSites.length));
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100
      } 
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden z-0">
          {matrixChars}
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        </div>
        
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16 relative z-10">
          <div className="container px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-hacker-green flex items-center gap-2">
                  <Network className="h-8 w-8" />
                  <TypingText text="The N1ghtw1re Collective" className="inline-block" />
                </h1>
                
                <div className="prose prose-invert max-w-none mb-8 glass-card p-6">
                  <p className="leading-relaxed mb-4">
                    This site is just the beginning.
                  </p>
                  <p className="leading-relaxed mb-4">
                    What you're looking at is part of a larger, interconnected network. N1ghtw1re spans many corners of the digital world — from independent music streams and privacy-focused blogs to open-source tools and underground communities. Every link you click is a pathway into a new idea, a new tool, or a new perspective.
                  </p>
                  <p className="leading-relaxed mb-4">
                    The sites listed below are pieces of a broader project. Think of them as individual nodes in a decentralized network — each one sharing knowledge, raising questions, or offering resources. Some might help you take practical steps toward digital freedom. Others might challenge your assumptions about how the internet, power, and information work.
                  </p>
                  <p className="leading-relaxed mb-4">
                    This isn't a traditional website with a clear structure. It's an evolving ecosystem. You'll find everything from encrypted broadcasts and DIY culture to philosophical essays and digital art — all part of a growing archive created by and for those seeking truth and autonomy online.
                  </p>
                  <p className="leading-relaxed">
                    Explore with curiosity. Use what you find. And remember: you don't need permission to reclaim your digital space.
                  </p>
                </div>
              </div>
              
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6 text-hacker-cyan border-b border-hacker-green/30 pb-2">
                  Network Nodes
                </h2>
                
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {collectiveSites.slice(0, visibleCount).map((site, index) => (
                    <motion.div key={index} variants={item}>
                      <Card 
                        className="feature-card h-full cursor-pointer hover:scale-[1.02] transition-all duration-300"
                        onClick={() => setActiveSite(site)}
                      >
                        <CardContent className="p-6">
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="text-lg font-bold text-hacker-green">{site.name}</h3>
                            <a 
                              href={site.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="text-hacker-cyan hover:text-hacker-green transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-3">{site.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
                
                {visibleCount < collectiveSites.length && (
                  <div className="text-center mt-8">
                    <Button 
                      onClick={loadMore} 
                      className="bg-hacker-green text-background hover:bg-hacker-green/80"
                    >
                      Load More Nodes
                    </Button>
                  </div>
                )}
              </div>
              
              {activeSite && (
                <motion.div
                  className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.div 
                    className="bg-card border border-hacker-green/30 rounded-lg max-w-2xl w-full p-6 relative"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <button 
                      className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
                      onClick={() => setActiveSite(null)}
                    >
                      ✕
                    </button>
                    <h3 className="text-xl font-bold text-hacker-green mb-2">{activeSite.name}</h3>
                    <p className="mb-6 text-muted-foreground">{activeSite.description}</p>
                    <a 
                      href={activeSite.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-hacker-green/20 hover:bg-hacker-green/30 text-hacker-green py-2 px-4 rounded-md transition-colors"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Collective;
