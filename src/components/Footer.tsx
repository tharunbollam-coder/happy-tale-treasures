import { Link } from "react-router-dom";
import { Book, Heart, Mail, Shield, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 font-kid text-2xl mb-4">
              <Book className="w-8 h-8 text-primary" />
              <span className="bg-gradient-rainbow bg-clip-text text-transparent">
                KidsStories
              </span>
            </Link>
            <p className="font-comic text-muted-foreground text-sm">
              Educational stories that inspire, teach, and entertain young minds with valuable life lessons.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-kid text-lg text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="font-comic text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/stories" className="font-comic text-muted-foreground hover:text-primary transition-colors">
                  All Stories
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-comic text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-comic text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-kid text-lg text-foreground mb-4">Story Categories</h3>
            <ul className="space-y-2">
              <li className="font-comic text-muted-foreground">Classic Fables</li>
              <li className="font-comic text-muted-foreground">Moral Lessons</li>
              <li className="font-comic text-muted-foreground">Friendship Tales</li>
              <li className="font-comic text-muted-foreground">Learning Adventures</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-kid text-lg text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="font-comic text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="font-comic text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-comic text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-comic text-muted-foreground text-sm">
              © 2024 KidsStories. All rights reserved.
            </p>
            <div className="flex items-center gap-2 font-comic text-muted-foreground text-sm">
              Made with <Heart className="w-4 h-4 text-red-500" /> for children's education
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;