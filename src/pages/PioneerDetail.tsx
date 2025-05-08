
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import { pioneers } from '@/data/pioneers';

const PioneerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const pioneer = pioneers.find(p => p.id === id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!pioneer) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Pioneer Not Found</h1>
            <p className="mb-6 text-muted-foreground">
              Sorry, the pioneer you're looking for doesn't exist.
            </p>
            <Link to="/timeline">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Timeline
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <Link to="/timeline" className="inline-block mb-6">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Timeline
                </Button>
              </Link>
              
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-hacker-green mb-2">
                  {pioneer.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-4">
                  {pioneer.birthYear} - {pioneer.deathYear || 'Present'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pioneer.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Biography */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4">Biography</h2>
                  <p className="text-lg">{pioneer.longBio}</p>
                </CardContent>
              </Card>
              
              {/* Quote */}
              <Card className="mb-8 bg-hacker-green/10 border-hacker-green">
                <CardContent className="pt-6">
                  <p className="text-xl italic text-foreground mb-2">"{pioneer.quote}"</p>
                  <p className="text-right text-muted-foreground">— {pioneer.name}</p>
                </CardContent>
              </Card>
              
              {/* Contributions */}
              <h2 className="text-2xl font-bold mb-4 text-hacker-cyan">Key Contributions</h2>
              <ul className="space-y-3 mb-8">
                {pioneer.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-hacker-green mr-2">•</span>
                    <span>{contribution}</span>
                  </li>
                ))}
              </ul>
              
              <Separator className="my-8" />
              
              {/* External Resources */}
              <h2 className="text-2xl font-bold mb-4">Learn More</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {pioneer.links.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="feature-card text-center"
                  >
                    <h3 className="text-lg font-medium mb-2">{link.label}</h3>
                    <p className="text-sm text-muted-foreground">Visit Resource</p>
                  </a>
                ))}
              </div>
              
              {/* Navigation between pioneers */}
              <div className="mt-12 flex justify-between">
                {getPreviousPioneer(pioneer.id) && (
                  <Link to={`/pioneer/${getPreviousPioneer(pioneer.id)!.id}`}>
                    <Button variant="outline">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      {getPreviousPioneer(pioneer.id)!.name}
                    </Button>
                  </Link>
                )}
                {getNextPioneer(pioneer.id) && (
                  <Link to={`/pioneer/${getNextPioneer(pioneer.id)!.id}`} className="ml-auto">
                    <Button variant="outline">
                      {getNextPioneer(pioneer.id)!.name}
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

// Helper functions to get next and previous pioneers
function getPreviousPioneer(currentId: string) {
  const currentIndex = pioneers.findIndex(p => p.id === currentId);
  if (currentIndex > 0) {
    return pioneers[currentIndex - 1];
  }
  return null;
}

function getNextPioneer(currentId: string) {
  const currentIndex = pioneers.findIndex(p => p.id === currentId);
  if (currentIndex < pioneers.length - 1) {
    return pioneers[currentIndex + 1];
  }
  return null;
}

export default PioneerDetail;
