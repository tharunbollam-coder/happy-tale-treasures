import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, Eye, Lock, Users } from "lucide-react";
import { generateWebsiteSchema } from "@/utils/seo";

const Privacy = () => {
  const websiteSchema = generateWebsiteSchema();

  return (
    <div className="min-h-screen py-8 px-4">
      <SEO 
        title="Privacy Policy - KidsStories"
        description="Learn how KidsStories protects your privacy and your children's data. Our privacy policy explains how we collect, use, and protect your information."
        keywords="privacy policy, children's privacy, data protection, COPPA compliance, kids safety online"
        schemaData={websiteSchema}
      />
      
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs />
        
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-primary" />
            <h1 className="font-kid text-4xl md:text-5xl bg-gradient-rainbow bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="font-comic text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy and your children's safety are our top priorities! 🛡️
          </p>
          <p className="font-comic text-sm text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-primary" />
              <h2 className="font-kid text-2xl text-foreground">Information We Collect</h2>
            </div>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>
                <strong>Personal Information:</strong> We only collect information that you voluntarily provide, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and email address (if you contact us)</li>
                <li>Feedback and suggestions you share</li>
                <li>Usage data to improve our stories and activities</li>
              </ul>
              <p>
                <strong>Children's Information:</strong> We do NOT collect personal information from children under 13 
                without parental consent, in compliance with COPPA (Children's Online Privacy Protection Act).
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-secondary" />
              <h2 className="font-kid text-2xl text-foreground">How We Use Information</h2>
            </div>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and improve our educational stories and activities</li>
                <li>Respond to your questions and feedback</li>
                <li>Ensure our content remains safe and appropriate for children</li>
                <li>Analyze usage patterns to create better learning experiences</li>
              </ul>
              <p>
                <strong>We NEVER:</strong> Sell, rent, or share your personal information with third parties for 
                marketing purposes.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-accent" />
              <h2 className="font-kid text-2xl text-foreground">Children's Privacy</h2>
            </div>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>
                <strong>COPPA Compliance:</strong> We are committed to protecting children's privacy online. 
                Our service is designed to be safe for children of all ages.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not knowingly collect personal information from children under 13</li>
                <li>If we discover we have collected such information, we will delete it immediately</li>
                <li>Parents can contact us to review, update, or delete their child's information</li>
                <li>No user accounts are required to enjoy our stories</li>
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <h2 className="font-kid text-2xl text-foreground mb-4">Data Security</h2>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>
                We implement appropriate security measures to protect your information against unauthorized 
                access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Secure HTTPS encryption for all data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
              </ul>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <h2 className="font-kid text-2xl text-foreground mb-4">Cookies and Tracking</h2>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>
                We use minimal cookies and tracking technologies to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how our website is used to improve functionality</li>
                <li>Ensure our content loads properly</li>
              </ul>
              <p>
                You can disable cookies in your browser settings, though some features may not work properly.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <h2 className="font-kid text-2xl text-foreground mb-4">Your Rights</h2>
            <div className="font-comic text-muted-foreground space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal information we have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Withdraw consent for data processing</li>
                <li>Contact us with any privacy concerns</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-soft p-8 rounded-3xl border border-border">
            <h2 className="font-kid text-2xl text-foreground mb-4 text-center">Contact Us About Privacy</h2>
            <div className="font-comic text-muted-foreground text-center space-y-4">
              <p>
                If you have any questions about this privacy policy or how we handle your information, 
                please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@kidsstories.com</p>
                <p><strong>Mail:</strong> KidsStories Privacy Team, 123 Story Lane, Reading City, RC 12345</p>
              </div>
              <p className="text-sm">
                We will respond to your inquiry within 30 days.
              </p>
            </div>
          </div>

          <div className="bg-card p-6 rounded-3xl shadow-lg border border-border text-center">
            <p className="font-comic text-muted-foreground text-sm">
              This privacy policy may be updated periodically. We will notify you of any significant 
              changes by posting the new policy on this page with an updated date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;