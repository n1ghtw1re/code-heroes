
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PageTransition } from '@/components/layout/PageTransition';
import { Separator } from '@/components/ui/separator';

const Privacy = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-hacker-green">Privacy Policy</h1>
              
              <div className="prose prose-invert max-w-none">
                <p className="mb-4">
                  Last updated: May 12, 2025
                </p>
                
                <p className="mb-4">
                  This Privacy Policy describes Our policies and procedures on the collection,
                  use and disclosure of Your information when You use the Service and tells
                  You about Your privacy rights and how the law protects You.
                </p>

                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">Interpretation and Definitions</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <h3 className="text-lg font-semibold mb-3">Interpretation</h3>
                <p className="mb-4">
                  Words with initial capitalization have meanings defined under the following conditions.
                  The following definitions shall have the same meaning regardless of whether they appear in
                  singular or in plural.
                </p>
                
                <h3 className="text-lg font-semibold mb-3">Definitions</h3>
                <p className="mb-2">For the purposes of this Privacy Policy:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>
                    <strong>Website</strong> refers to Code Heroes Unite, accessible from codeheroes.com
                  </li>
                  <li>
                    <strong>You</strong> refers to the individual accessing or using the Website, or other
                    legal entity on behalf of which such individual is accessing or using the Website.
                  </li>
                </ul>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">Collecting and Using Your Data</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <h3 className="text-lg font-semibold mb-3">Types of Data Collected</h3>
                
                <h4 className="text-md font-semibold mb-2">Personal Data</h4>
                <p className="mb-4">
                  We do not collect personally identifiable information from users of our website. 
                  The Code Heroes Unite website is designed to be a static informational site that does not 
                  request, store, or process personal data.
                </p>
                
                <h4 className="text-md font-semibold mb-2">Usage Data</h4>
                <p className="mb-4">
                  Usage Data is collected automatically when using the Website. 
                  This may include information such as Your browser type, browser version, 
                  the pages of our Website that You visit, the time and date of Your visit, 
                  and anonymous analytical data.
                </p>
                
                <h3 className="text-lg font-semibold mb-3">Tracking Technologies and Cookies</h3>
                <p className="mb-4">
                  We do not use cookies or similar tracking technologies to track activity on Our Website.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">Links to Other Websites</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <p className="mb-4">
                  Our Website contains links to other websites that are not operated by Us. 
                  If You click on a third-party link, You will be directed to that third party's site. 
                  We strongly advise You to review the Privacy Policy of every site You visit.
                </p>
                <p className="mb-4">
                  We have no control over and assume no responsibility for the content, 
                  privacy policies or practices of any third-party sites or services.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">Changes to this Privacy Policy</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <p className="mb-4">
                  We may update Our Privacy Policy from time to time. We will notify You of any changes by
                  posting the new Privacy Policy on this page.
                </p>
                <p className="mb-6">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to
                  this Privacy Policy are effective when they are posted on this page.
                </p>
                
                <h2 className="text-xl font-semibold mt-8 mb-4 text-hacker-cyan">Contact Us</h2>
                <Separator className="bg-hacker-green/30 mb-4" />
                
                <p>
                  If you have any questions about this Privacy Policy, You can contact us at:
                </p>
                <p className="text-hacker-green mt-2">
                  n1ghtw1re@proton.me
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

export default Privacy;
