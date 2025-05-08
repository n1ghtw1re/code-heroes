
import { Link } from 'react-router-dom';
import { PageTransition } from '@/components/layout/PageTransition';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Book, BookOpen, Library, Link as LinkIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const resourceCategories = [
  {
    title: "Books & Publications",
    icon: Book,
    resources: [
      {
        title: "The Art of Computer Programming",
        author: "Donald Knuth",
        description: "Fundamental algorithms and programming techniques that form the foundation of computer science.",
        link: "https://www-cs-faculty.stanford.edu/~knuth/taocp.html",
        tags: ["Algorithms", "Programming", "Computer Science"]
      },
      {
        title: "Gödel, Escher, Bach",
        author: "Douglas Hofstadter",
        description: "An exploration of common themes in the lives and works of mathematician Kurt Gödel, artist M.C. Escher, and composer Johann Sebastian Bach.",
        link: "https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach",
        tags: ["Cognitive Science", "Mathematics", "Music"]
      },
      {
        title: "Code: The Hidden Language of Computer Hardware and Software",
        author: "Charles Petzold",
        description: "A fascinating exploration of how personal computers work at the most fundamental level.",
        link: "https://www.charlespetzold.com/code/",
        tags: ["Computer Hardware", "Computer History"]
      }
    ]
  },
  {
    title: "Open Source Projects",
    icon: BookOpen,
    resources: [
      {
        title: "Linux Kernel",
        author: "Linus Torvalds & contributors",
        description: "The core of the Linux operating system, one of the most influential open source projects in history.",
        link: "https://github.com/torvalds/linux",
        tags: ["Operating Systems", "C", "Kernel Development"]
      },
      {
        title: "Python",
        author: "Guido van Rossum & contributors",
        description: "A programming language that lets you work quickly and integrate systems more effectively.",
        link: "https://github.com/python/cpython",
        tags: ["Programming Languages", "Education"]
      },
      {
        title: "The TeX Project",
        author: "Donald Knuth & contributors",
        description: "A typesetting system designed for high-quality digital typography.",
        link: "https://www.tug.org/",
        tags: ["Typography", "Typesetting", "Digital Publishing"]
      }
    ]
  },
  {
    title: "Educational Resources",
    icon: Library,
    resources: [
      {
        title: "Computer History Museum",
        author: "Computer History Museum",
        description: "Dedicated to preserving and presenting the stories and artifacts of the information age.",
        link: "https://computerhistory.org/",
        tags: ["Computer History", "Museums", "Education"]
      },
      {
        title: "Ada Lovelace Day",
        author: "Finding Ada",
        description: "International celebration of the achievements of women in science, technology, engineering and math.",
        link: "https://findingada.com/",
        tags: ["Women in STEM", "Education", "Diversity"]
      },
      {
        title: "Internet History Podcast",
        author: "Brian McCullough",
        description: "Oral history of the internet era, featuring interviews with founders and innovators.",
        link: "http://www.internethistorypodcast.com/",
        tags: ["Internet History", "Podcast", "Oral History"]
      }
    ]
  }
];

const Resources = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-hacker-green mb-4">
                Resources & Learning Hub
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Dive deeper into computing history and the technologies that shaped our digital world.
              </p>
              
              {resourceCategories.map((category, index) => (
                <div key={category.title} className="mb-12">
                  <div className="flex items-center gap-2 mb-6">
                    <category.icon className="h-6 w-6 text-hacker-green" />
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.resources.map((resource) => (
                      <Card key={resource.title} className="hover-scale">
                        <CardHeader>
                          <CardTitle className="text-hacker-cyan">{resource.title}</CardTitle>
                          <CardDescription>By {resource.author}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">{resource.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {resource.tags.map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <a 
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-hacker-green hover:underline"
                          >
                            <LinkIcon className="h-4 w-4 mr-1" />
                            Learn more
                          </a>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  {index < resourceCategories.length - 1 && (
                    <Separator className="my-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Resources;
