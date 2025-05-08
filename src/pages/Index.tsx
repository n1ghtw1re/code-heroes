
import { Link } from 'react-router-dom';
import { PageTransition } from '@/components/layout/PageTransition';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { TypingText } from '@/components/ui/TypingText';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { pioneers } from '@/data/pioneers';
import { useRef } from 'react';

const Index = () => {
  const featuredRef = useRef<HTMLDivElement>(null);

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Choose 3 random pioneers to feature
  const featuredPioneers = [...pioneers]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90"></div>
            {/* Matrix-like characters for background effect */}
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="matrix-character"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${15 + Math.random() * 20}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
              </div>
            ))}
          </div>
          
          <div className="container relative z-10 max-w-4xl text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-hacker-green">
              <TypingText text="< Code Heroes Unite />" className="inline-block" />
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Celebrating the pioneers who made technology a force for good
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/timeline">
                <Button 
                  size="lg" 
                  className="bg-hacker-green hover:bg-hacker-green/80 text-background px-8"
                >
                  Explore Timeline
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-hacker-green text-hacker-green hover:bg-hacker-green/10" 
                onClick={scrollToFeatured}
              >
                Meet the Heroes
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full text-hacker-green" 
              onClick={scrollToFeatured}
            >
              <ArrowDown size={24} />
            </Button>
          </div>
        </section>
        
        {/* Featured Code Heroes */}
        <section ref={featuredRef} className="py-20 bg-secondary">
          <div className="container px-6">
            <h2 className="text-3xl font-bold mb-2 text-center text-hacker-green">Featured Code Heroes</h2>
            <p className="text-center mb-12 text-muted-foreground">
              Pioneers who changed technology for the better
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPioneers.map((pioneer) => (
                <Link to={`/pioneer/${pioneer.id}`} key={pioneer.id}>
                  <div className="feature-card h-full">
                    <div className="flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-2 text-hacker-green">{pioneer.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {pioneer.birthYear} - {pioneer.deathYear || 'Present'}
                      </p>
                      <p className="mb-4 flex-grow">{pioneer.shortBio}</p>
                      <div className="text-sm text-hacker-cyan hover:underline mt-auto">
                        Learn more →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/timeline">
                <Button className="bg-hacker-green hover:bg-hacker-green/80 text-background">
                  View All Pioneers
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Why This Matters Section */}
        <section className="py-20 bg-background">
          <div className="container px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-hacker-pink">
              Technology for Good
            </h2>
            
            <div className="bg-card p-6 rounded-lg mb-8 border border-border">
              <p className="italic text-muted-foreground mb-4">
                "The best way to predict the future is to invent it."
              </p>
              <p className="text-right text-sm">
                — Alan Kay, Computer Scientist
              </p>
            </div>
            
            <p className="text-lg mb-6">
              Technology has the power to transform our world, but its impact depends on the values of those who create it. 
              The pioneers featured on this site chose to use their talents to advance human knowledge, 
              share information freely, and create tools that empower people.
            </p>
            
            <p className="text-lg">
              Their stories remind us that we don't have to be driven by profit or power to make meaningful 
              contributions. Instead, curiosity, collaboration, and a commitment to the common good 
              can lead to innovations that benefit humanity for generations to come.
            </p>
          </div>
        </section>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
