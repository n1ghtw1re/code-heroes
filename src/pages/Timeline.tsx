
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { pioneers } from '@/data/pioneers'; // Updated import
import { TypingText } from '@/components/ui/TypingText';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Timeline = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPioneers, setFilteredPioneers] = useState(pioneers);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAllTags, setShowAllTags] = useState(false);
  
  // Get all unique tags across all pioneers
  const allTags = [...new Set(pioneers.flatMap(pioneer => pioneer.tags))].sort();
  
  // Display only a few tags initially
  const visibleTags = showAllTags ? allTags : allTags.slice(0, 5);
  
  // Sort pioneers by birth year
  const sortedPioneers = [...pioneers].sort((a, b) => 
    parseInt(a.birthYear) - parseInt(b.birthYear)
  );
  
  useEffect(() => {
    let results = sortedPioneers;
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(
        pioneer => 
          pioneer.name.toLowerCase().includes(term) || 
          pioneer.shortBio.toLowerCase().includes(term) ||
          pioneer.contributions.some(c => c.toLowerCase().includes(term))
      );
    }
    
    // Filter by selected tag
    if (selectedTag) {
      results = results.filter(
        pioneer => pioneer.tags.includes(selectedTag)
      );
    }
    
    setFilteredPioneers(results);
  }, [searchTerm, selectedTag]);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-hacker-green">
                <TypingText text="< Tech Pioneers Timeline />" className="inline-block" />
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore the pioneers who shaped computing history
              </p>
              
              {/* Search and filter */}
              <div className="mb-8 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search pioneers..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={selectedTag === null ? "default" : "outline"}
                    className={`cursor-pointer ${
                      selectedTag === null ? "bg-hacker-green text-background" : ""
                    }`}
                    onClick={() => setSelectedTag(null)}
                  >
                    All
                  </Badge>
                  
                  {/* First few tags always visible */}
                  {visibleTags.map(tag => (
                    <Badge
                      key={tag}
                      variant={selectedTag === tag ? "default" : "outline"}
                      className={`cursor-pointer ${
                        selectedTag === tag ? "bg-hacker-green text-background" : ""
                      }`}
                      onClick={() => setSelectedTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                  
                  {/* Show/Hide tags toggle button */}
                  {allTags.length > 5 && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                      onClick={() => setShowAllTags(!showAllTags)}
                    >
                      {showAllTags ? (
                        <>
                          Show Less <ChevronUp className="h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Show All Tags ({allTags.length - 5} more) <ChevronDown className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Timeline display */}
              <div className="timeline-container">
                {filteredPioneers.length > 0 ? (
                  filteredPioneers.map(pioneer => (
                    <div key={pioneer.id} className="timeline-item">
                      <div className="timeline-card">
                        <div className="timeline-date">
                          {pioneer.birthYear} - {pioneer.deathYear || 'Present'}
                        </div>
                        <div className="timeline-content">
                          <h2 className="text-xl font-bold mb-1">{pioneer.name}</h2>
                          <p className="mb-3 text-muted-foreground">{pioneer.shortBio}</p>
                          
                          {/* Collapsible tags section */}
                          <Collapsible className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {pioneer.tags[0] || "General"}
                              </Badge>
                              {pioneer.tags.length > 1 && (
                                <CollapsibleTrigger className="flex items-center text-xs text-muted-foreground hover:text-foreground">
                                  +{pioneer.tags.length - 1} more <ChevronDown className="h-3 w-3 ml-1" />
                                </CollapsibleTrigger>
                              )}
                            </div>
                            
                            <CollapsibleContent>
                              <div className="flex flex-wrap gap-2 pl-2 border-l-2 border-muted">
                                {pioneer.tags.slice(1).map(tag => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                          
                          <Link to={`/pioneer/${pioneer.id}`}>
                            <Button 
                              size="sm" 
                              className="bg-hacker-green hover:bg-hacker-green/80 text-background"
                            >
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-lg text-muted-foreground">No pioneers match your search criteria.</p>
                    <Button 
                      className="mt-4" 
                      variant="outline"
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedTag(null);
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
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

export default Timeline;
