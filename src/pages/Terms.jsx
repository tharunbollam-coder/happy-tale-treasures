import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { FileText, CheckCircle, AlertCircle, Scale } from "lucide-react";
import { generateWebsiteSchema } from "../utils/seo";

const Terms = () => {
  const websiteSchema = generateWebsiteSchema();

  return (
    <div className="min-h-screen py-8 px-4">
      <SEO 
        title="Terms of Service - KidsStories"
        description="Read the terms of service for KidsStories. Learn about our usage guidelines, user responsibilities, and legal terms for using our educational children's stories platform."
        keywords="terms of service, usage guidelines, legal terms, children's content rules, educational platform terms"
        schemaData={websiteSchema}
      />
      
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs />
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-primary" />
            <h1 className="font-kid text-4xl md:text-5xl bg-gradient-rainbow bg-clip-text text-transparent">
              Terms of Service
            </h1>
          </div>
          <p className="font-comic text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple rules for a safe and fun learning experience! 📜
          </p>
          <p className="font-comic text-sm text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-primary" />
              <h2 className="font-kid text-2xl text-foreground">Acceptance of Terms</h2>
            </div>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>
                By using KidsStories, you agree to these terms of service. If you don't agree with any 
                of these terms, please don't use our website.
              </p>
              <p>
                <strong>For Parents:</strong> If your child is under 18, you must supervise their use 
                of our website and agree to these terms on their behalf.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-8 h-8 text-secondary" />
              <h2 className="font-kid text-2xl text-foreground">Permitted Use</h2>
            </div>
            <div className="font-comic text-muted-foreground space-y-4">
              <p><strong>You may:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Read and enjoy our stories for personal, educational use</li>
                <li>Use our learning activities and games</li>
                <li>Share links to our stories with others</li>
                <li>Print stories for personal or classroom use</li>
                <li>Provide feedback and suggestions</li>
              </ul>
              <p><strong>Educational Use:</strong> Teachers and educators are welcome to use our content 
              in their classrooms for educational purposes.</p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-destructive" />
              <h2 className="font-kid text-2xl text-foreground">Prohibited Activities</h2>
            </div>
            <div className="font-comic text-muted-foreground space-y-4">
              <p><strong>You may NOT:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copy, redistribute, or sell our stories without permission</li>
                <li>Use our content for commercial purposes without authorization</li>
                <li>Attempt to hack, disrupt, or damage our website</li>
                <li>Upload harmful software or viruses</li>
                <li>Use our content in ways that could harm children</li>
                <li>Remove or modify copyright notices</li>
                <li>Create derivative works without permission</li>
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <h2 className="font-kid text-2xl text-foreground mb-4">Content Ownership</h2>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>
                <strong>Our Content:</strong> All stories, illustrations, games, and other content on 
                KidsStories are owned by us or our licensors and are protected by copyright laws.
              </p>
              <p>
                <strong>Your Content:</strong> If you submit feedback, suggestions, or other content 
                to us, you grant us permission to use it to improve our service.
              </p>
              <p>
                <strong>Fair Use:</strong> We respect fair use principles and encourage educational 
                use of our content in accordance with copyright law.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <h2 className="font-kid text-2xl text-foreground mb-4">User Conduct</h2>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>When using our website, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Be respectful and kind in any communications</li>
                <li>Not share inappropriate content</li>
                <li>Follow all applicable laws and regulations</li>
                <li>Respect other users and their privacy</li>
                <li>Use the website only for its intended educational purpose</li>
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <h2 className="font-kid text-2xl text-foreground mb-4">Privacy and Safety</h2>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>
                <strong>Children's Safety:</strong> We are committed to providing a safe environment 
                for children. Our content is carefully reviewed to ensure it's appropriate for young audiences.
              </p>
              <p>
                <strong>Privacy:</strong> Please review our Privacy Policy to understand how we collect, 
                use, and protect your information.
              </p>
              <p>
                <strong>Reporting:</strong> If you encounter any inappropriate content or behavior, 
                please contact us immediately.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <h2 className="font-kid text-2xl text-foreground mb-4">Disclaimers</h2>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>
                <strong>Educational Purpose:</strong> Our stories are designed for educational and 
                entertainment purposes. They are not a substitute for professional educational guidance.
              </p>
              <p>
                <strong>Availability:</strong> We strive to keep our website available 24/7, but we 
                cannot guarantee uninterrupted access.
              </p>
              <p>
                <strong>Content Updates:</strong> We may update, modify, or remove content at any time 
                to improve our service or ensure appropriateness.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <h2 className="font-kid text-2xl text-foreground mb-4">Limitation of Liability</h2>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>
                KidsStories is provided "as is" for educational purposes. We are not liable for any 
                damages resulting from the use of our website or content, except as required by law.
              </p>
              <p>
                <strong>Parental Responsibility:</strong> Parents and guardians are responsible for 
                supervising their children's use of our website and ensuring it's appropriate for their child.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <h2 className="font-kid text-2xl text-foreground mb-4">Changes to Terms</h2>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>
                We may update these terms from time to time. When we make significant changes, we'll 
                post the updated terms on this page with a new date.
              </p>
              <p>
                <strong>Continued Use:</strong> By continuing to use our website after changes are posted, 
                you agree to the updated terms.
              </p>
            </div>
          </div>

          <div className="bg-gradient-soft p-8 rounded-3xl border border-border">
            <h2 className="font-kid text-2xl text-foreground mb-4 text-center">Contact Us</h2>
            <div className="font-comic text-muted-foreground text-center space-y-4">
              <p>
                If you have questions about these terms or need clarification about permitted uses 
                of our content, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@kidsstories.com</p>
                <p><strong>Mail:</strong> KidsStories Legal Team, 123 Story Lane, Reading City, RC 12345</p>
              </div>
              <p className="text-sm">
                We're here to help and want to ensure everyone has a safe, enjoyable learning experience!
              </p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-3xl shadow-lg border border-border text-center">
            <p className="font-comic text-muted-foreground text-sm">
              These terms of service are governed by the laws of the United States. Any disputes will 
              be resolved in accordance with applicable law.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;