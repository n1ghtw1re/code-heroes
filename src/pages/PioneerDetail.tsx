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
import { motion } from 'framer-motion';

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
              
              {/* Image and Biography */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <motion.div 
                  className="md:col-span-1 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="rounded-lg overflow-hidden bg-hacker-green/10 border border-hacker-green/30 aspect-square flex items-center justify-center">
                    <img
                      src={getPioneerImage(pioneer.id)}
                      alt={pioneer.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg"; 
                      }}
                    />
                  </div>
                </motion.div>
                <div className="md:col-span-2">
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-xl font-bold mb-4">Biography</h2>
                      <p className="text-lg">{pioneer.longBio}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
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

// Helper function to get pioneer image from Wikipedia or use a fallback
function getPioneerImage(pioneerId: string): string {
  const imageMap: Record<string, string> = {
    'grace-hopper': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/800px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg',
    'alan-turing': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/800px-Alan_Turing_Aged_16.jpg',
    'radia-perlman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/RadiaPerlman_crop.jpg/800px-RadiaPerlman_crop.jpg',
    'tim-berners-lee': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg/800px-Sir_Tim_Berners-Lee_%28cropped%29.jpg',
    'katherine-johnson': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/800px-Katherine_Johnson_1983.jpg',
    'vint-cerf': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Vint_cerf_google.jpg/800px-Vint_cerf_google.jpg',
    'barbara-liskov': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Barbara_Liskov_MIT_computer_scientist_2010.jpg/800px-Barbara_Liskov_MIT_computer_scientist_2010.jpg',
    'mary-jackson': 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Mary_Jackson_%28engineer%29.jpg/800px-Mary_Jackson_%28engineer%29.jpg',
    'dennis-ritchie': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dennis_Ritchie_2011.jpg/800px-Dennis_Ritchie_2011.jpg',
    'linus-torvalds': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/800px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg',
    'ada-lovelace': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/800px-Ada_Lovelace_portrait.jpg',
    'john-von-neumann': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/JohnvonNeumann-LosAlamos.gif/800px-JohnvonNeumann-LosAlamos.gif',
    'margaret-hamilton': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Margaret_Hamilton_-_restoration.jpg/800px-Margaret_Hamilton_-_restoration.jpg',
    'donald-knuth': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/KnuthAtOpenContentAlliance.jpg/800px-KnuthAtOpenContentAlliance.jpg',
    'sophie-wilson': 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Sophie_Wilson_at_the_Acorn_World_show.jpg',
    'frances-allen': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Frances_Allen_2005.jpg/800px-Frances_Allen_2005.jpg',
    'shirley-ann-jackson': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Shirley_Ann_Jackson_official_portrait.jpg/800px-Shirley_Ann_Jackson_official_portrait.jpg',
    'guido-van-rossum': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Guido-portrait-2014-drc.jpg/800px-Guido-portrait-2014-drc.jpg',
    'edsger-dijkstra': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Edsger_Wybe_Dijkstra.jpg/800px-Edsger_Wybe_Dijkstra.jpg',
    'jean-bartik': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Jean_Bartik.jpg/800px-Jean_Bartik.jpg',
    'ken-thompson': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ken_Thompson_%28sitting%29_and_Dennis_Ritchie_at_PDP-11_%282876612463%29.jpg/800px-Ken_Thompson_%28sitting%29_and_Dennis_Ritchie_at_PDP-11_%282876612463%29.jpg',
    'richard-stallman': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Richard_Stallman_-_F%C3%AAte_de_l%27Humanit%C3%A9_2014_-_010.jpg/800px-Richard_Stallman_-_F%C3%AAte_de_l%27Humanit%C3%A9_2014_-_010.jpg',
    
    'brian-kernighan': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Brian_Kernighan_in_2012_at_Bell_Labs_2.jpg/800px-Brian_Kernighan_in_2012_at_Bell_Labs_2.jpg',
    'larry-wall': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Larry_Wall_YAPC_2007.jpg/800px-Larry_Wall_YAPC_2007.jpg',
    'john-backus': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/John_Backus_2.jpg/800px-John_Backus_2.jpg',
    'leslie-lamport': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Leslie_Lamport_%28cropped%29.jpg/800px-Leslie_Lamport_%28cropped%29.jpg',
    'fernando-corbato': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Fernando_J_Corbato.jpg/800px-Fernando_J_Corbato.jpg',
    'ted-nelson': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ted_Nelson_cropped.jpg/800px-Ted_Nelson_cropped.jpg',
    'alan-kay': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Alan_Kay_%283097597186%29.jpg/800px-Alan_Kay_%283097597186%29.jpg'
  };
  
  return imageMap[pioneerId] || '/placeholder.svg';
}

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
