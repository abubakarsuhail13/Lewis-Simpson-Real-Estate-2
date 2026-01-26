
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-blue-950 text-white text-[10px] sm:text-xs py-2 px-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +44 (0) 20 7946 0000</span>
          <span className="hidden sm:flex items-center gap-1"><Mail className="w-3 h-3" /> enquiry@lewissimpsonrealestate.co.uk</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hover:text-blue-200 transition-colors text-slate-400">Investor Portal</Link>
          <span className="text-slate-700">|</span>
          <Link to="/contact" className="hover:text-blue-200 transition-colors text-slate-400">Staff Login</Link>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-900 text-white p-2 rounded-lg group-hover:bg-blue-800 transition-colors">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold tracking-tight text-blue-950 leading-none">LEWIS SIMPSON</span>
              <span className="text-[10px] tracking-[0.2em] font-medium text-slate-500 uppercase mt-1">Real Estate</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href 
                    ? 'text-blue-700' 
                    : 'text-slate-600 hover:text-blue-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all hover:shadow-lg active:scale-95"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl p-8 flex flex-col gap-6 animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-4">
              <span className="font-serif font-bold text-blue-950">Navigation</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-medium ${
                  location.pathname === item.href ? 'text-blue-700' : 'text-slate-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-blue-900 text-white px-6 py-4 rounded-xl text-center font-bold"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}

      <main className="flex-1">{children}</main>

      <footer className="bg-slate-950 text-slate-300 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-8 h-8 text-white" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-white leading-none">LEWIS SIMPSON</span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-slate-400 uppercase mt-1">Real Estate</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Your trusted partner in high-quality UK property opportunities. Helping buyers and investors make confident, profitable decisions since 2004.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Property Investment</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">New Build Developments</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Lettings & Management</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Strategic Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+44 (0) 20 7946 0000</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>enquiry@lewissimpsonrealestate.co.uk</span>
              </li>
              <li className="flex gap-3 leading-relaxed">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>One Mayfair Square, London,<br />W1J 8HQ, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <div className="flex flex-col gap-2">
            <p>© 2026 Lewis Simpson Real Estate. All Rights Reserved.</p>
            <p className="text-slate-600">Powered by <span className="text-slate-400 font-medium">Nexaforge Technologies</span></p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
