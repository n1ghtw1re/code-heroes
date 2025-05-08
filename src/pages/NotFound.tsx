
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { PageTransition } from '@/components/layout/PageTransition';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-hacker-green">404</h1>
            <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
            <Link to="/">
              <Button className="bg-hacker-green hover:bg-hacker-green/80 text-background">
                Return to Home
              </Button>
            </Link>
          </div>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default NotFound;
