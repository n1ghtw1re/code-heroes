
import { PageTransition } from '@/components/layout/PageTransition';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Github, Code, GitBranch } from 'lucide-react';

const OpenSourceProjects = [
  {
    name: "Linux Kernel",
    description: "The heart of the Linux operating system, started by Linus Torvalds in 1991. It powers everything from Android phones to supercomputers.",
    link: "https://github.com/torvalds/linux",
    stars: "146k+",
    year: 1991,
    icon: <Code className="h-5 w-5 text-hacker-green" />,
    tags: ["Operating System", "C", "Systems Programming"]
  },
  {
    name: "Mozilla Firefox",
    description: "A free and open-source web browser developed by the Mozilla Foundation, focused on privacy and open web standards.",
    link: "https://github.com/mozilla/gecko-dev",
    stars: "11k+",
    year: 2002,
    icon: <Code className="h-5 w-5 text-hacker-green" />,
    tags: ["Web Browser", "C++", "JavaScript"]
  },
  {
    name: "Apache HTTP Server",
    description: "The world's most widely used web server software, started in 1995 and instrumental in the growth of the World Wide Web.",
    link: "https://github.com/apache/httpd",
    stars: "8k+",
    year: 1995,
    icon: <Code className="h-5 w-5 text-hacker-green" />,
    tags: ["Web Server", "C", "Infrastructure"]
  },
  {
    name: "Kubernetes",
    description: "Container orchestration system originally designed by Google, now maintained by the Cloud Native Computing Foundation.",
    link: "https://github.com/kubernetes/kubernetes",
    stars: "101k+",
    year: 2014,
    icon: <Code className="h-5 w-5 text-hacker-green" />,
    tags: ["Container Orchestration", "Go", "DevOps"]
  },
  {
    name: "TensorFlow",
    description: "An end-to-end open source platform for machine learning created by the Google Brain team.",
    link: "https://github.com/tensorflow/tensorflow",
    stars: "176k+",
    year: 2015,
    icon: <Code className="h-5 w-5 text-hacker-green" />,
    tags: ["Machine Learning", "Python", "C++"]
  },
  {
    name: "PostgreSQL",
    description: "A powerful, open source object-relational database system with over 30 years of active development.",
    link: "https://github.com/postgres/postgres",
    stars: "12k+",
    year: 1996,
    icon: <Code className="h-5 w-5 text-hacker-green" />,
    tags: ["Database", "C", "SQL"]
  }
];

const SpotlightOnOpenSource = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-hacker-green mb-4">
                Spotlight on Open Source
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The collaborative revolution that transformed computing forever
              </p>
              
              {/* History Section */}
              <section className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <GitBranch className="h-6 w-6 text-hacker-green" />
                  <h2 className="text-2xl font-bold">History of Open Source</h2>
                </div>
                
                <Card className="mb-8">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <p>
                        The open source movement began in the early 1980s when Richard Stallman, a programmer at MIT, 
                        became frustrated with the increasing proprietary nature of software. In 1983, he announced 
                        the GNU Project, aiming to create a free Unix-like operating system, and later formed the 
                        Free Software Foundation in 1985.
                      </p>
                      
                      <p>
                        The term "open source" itself was coined in 1998 when Netscape released the source code for its browser. 
                        This led to the creation of the Open Source Initiative (OSI) by Eric Raymond and Bruce Perens, 
                        who wanted to rebrand free software to emphasize its practical benefits rather than just its ethical aspects.
                      </p>
                      
                      <p>
                        Linux, started by Linus Torvalds in 1991, became one of the most successful open source projects, 
                        demonstrating the power of distributed collaboration. By the early 2000s, major companies including 
                        IBM, Oracle, and later Google and Microsoft began embracing open source, recognizing its technical 
                        and business advantages.
                      </p>
                      
                      <p>
                        Today, open source powers much of the modern internet and computing infrastructure, from web servers 
                        (Apache, Nginx) to programming languages (Python, Rust) to content management systems (WordPress) 
                        and databases (MySQL, PostgreSQL).
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
              
              {/* Benefits Section */}
              <section className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <Github className="h-6 w-6 text-hacker-green" />
                  <h2 className="text-2xl font-bold">Why Open Source Works</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover-scale">
                    <CardHeader>
                      <CardTitle className="text-hacker-cyan">Transparency &amp; Trust</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        With code publicly visible, users can verify security, identify bugs, and understand exactly how software works.
                        This transparency creates trust that proprietary software often lacks.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale">
                    <CardHeader>
                      <CardTitle className="text-hacker-cyan">Innovation Through Collaboration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        By allowing anyone to contribute, open source taps into global talent pools and diverse perspectives.
                        Ideas evolve faster when more minds contribute to solving problems.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale">
                    <CardHeader>
                      <CardTitle className="text-hacker-cyan">Lower Costs &amp; Freedom</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Free to use, modify, and distribute, open source eliminates licensing fees and vendor lock-in.
                        Organizations can customize software to their specific needs without restrictions.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="hover-scale">
                    <CardHeader>
                      <CardTitle className="text-hacker-cyan">Longevity &amp; Sustainability</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Open source projects often outlive their creators or any single supporting company.
                        With a community maintaining the code, software can evolve and remain relevant for decades.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>
              
              {/* Projects Section */}
              <section className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <Code className="h-6 w-6 text-hacker-green" />
                  <h2 className="text-2xl font-bold">Notable Open Source Projects</h2>
                </div>
                
                <div className="space-y-6">
                  {OpenSourceProjects.map((project) => (
                    <Card key={project.name} className="hover-scale">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle className="text-hacker-cyan flex items-center gap-2">
                            {project.icon}
                            {project.name}
                          </CardTitle>
                          <span className="text-sm text-muted-foreground">Since {project.year}</span>
                        </div>
                        <CardDescription>⭐ {project.stars} GitHub stars</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-hacker-green hover:underline"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          View on GitHub
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default SpotlightOnOpenSource;
