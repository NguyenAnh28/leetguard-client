import { Twitter, Github, Linkedin } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "#docs" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-warm-gray-800 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/leetguard-logo.svg"
                  alt="LeetGuard Logo"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <span className="text-white font-semibold text-xl">
                LeetGuard
              </span>
            </div>
            <p className="text-warm-gray-300 max-w-md">
              Your coding buddy that rewards you with breaks only when you've
              earned them. Stay focused, solve problems, unlock your potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-warm-gray-300 hover:text-white transition-smooth btn-hover-underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-warm-gray-800 rounded-lg flex items-center justify-center text-warm-gray-300 hover:text-leet-yellow hover:bg-warm-gray-700 transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warm-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-warm-gray-400 text-sm">
            © 2024 LeetGuard. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-warm-gray-400 hover:text-white text-sm transition-smooth"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-warm-gray-400 hover:text-white text-sm transition-smooth"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
