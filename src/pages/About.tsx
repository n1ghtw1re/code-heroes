
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { TypingText } from '@/components/ui/TypingText';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-16">
          <div className="container px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-hacker-green">
                <TypingText text="< About This Project />" className="inline-block" />
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The story behind Code Heroes Unite
              </p>
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-hacker-cyan">Our Mission</h2>
                <p className="mb-4">
                  Code Heroes Unite was created to highlight the stories of technology pioneers who used their talents to make the world better—not just to accumulate wealth or power.
                </p>
                <p className="mb-4">
                  In today's tech landscape, where profit-driven motivations often dominate, we want to remind everyone that many of the most important innovations in computing history came from people driven by curiosity, the desire to solve problems, and the vision of technology as a force for good.
                </p>
                <p>
                  These pioneers—many of whom were marginalized or overlooked in their time—created the foundations of modern computing with limited resources and against significant odds. Their stories inspire us to think differently about what success in technology looks like.
                </p>
              </section>
              
              <Separator className="my-8" />
              
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-hacker-cyan">A Different Vision of Tech</h2>
                <p className="mb-4">
                  You don't have to be a "tech bro," oligarch, crypto enthusiast, or corporate titan to change the world through technology. In fact, many of the most transformative innovations came from:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Academics working on theoretical problems</li>
                  <li>Government employees and researchers</li>
                  <li>People who shared their work freely with the world</li>
                  <li>Those who prioritized solving problems over profits</li>
                  <li>Individuals who faced discrimination yet persevered</li>
                </ul>
                <p>
                  These pioneers show us that the most valuable contributions to technology often come from those motivated by purposes beyond financial gain.
                </p>
              </section>
              
              <Separator className="my-8" />
              
              <section>
                <h2 className="text-2xl font-bold mb-4 text-hacker-cyan">Looking Forward</h2>
                <p className="mb-4">
                  As we face complex challenges in the 21st century—from climate change to privacy concerns to algorithmic bias—we need to remember the values that drove these pioneers: openness, collaboration, curiosity, and a commitment to using technology for human benefit.
                </p>
                <p>
                  We hope these stories inspire the next generation of technologists to build on this legacy and create tools and systems that serve humanity's greatest needs, not just the interests of the powerful and wealthy.
                </p>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
