
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { Separator } from '@/components/ui/separator';

const Terms = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-hacker-green">Terms of Service</h1>
              
              <div className="prose prose-invert max-w-none">
                <p className="mb-4">
                  Last updated: May 12, 2025
                </p>
                
                <p className="mb-8">
                  Please read these Terms of Service carefully before using the Code Heroes Unite website.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">1. Agreement to Terms</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <p className="mb-4">
                  By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">2. Use License</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <p className="mb-4">
                  Permission is granted to temporarily view the materials on Code Heroes Unite's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
                
                <p className="mb-4">
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by Code Heroes Unite at any time.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">3. Disclaimer</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <p className="mb-4">
                  The materials on Code Heroes Unite's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">4. Limitations</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <p className="mb-4">
                  In no event shall Code Heroes Unite or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if Code Heroes Unite or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">5. Links to Other Websites</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <p className="mb-4">
                  Our website contains links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their respective privacy policies.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">6. Modifications</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <p className="mb-4">
                  We may revise these Terms of Service at any time without prior notice. By using this website, you are agreeing to be bound by the current version of these Terms of Service.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">7. Governing Law</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <p className="mb-4">
                  These Terms of Service are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts located within the applicable jurisdiction.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">Contact Us</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="text-hacker-green mt-2">
                  contact@codeheroes-unite.example.com
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Terms;
