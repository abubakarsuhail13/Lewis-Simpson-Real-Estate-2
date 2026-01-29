import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-black text-slate-300">
      {/* Top Bar */}
      <div className="bg-black text-[10px] sm:text-xs py-2 px-6 flex justify-between items-center border-b border-amber-500/20">
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-amber-500" /> +44 (0) 20 7946 0000</span>
          <span className="hidden sm:flex items-center gap-1"><Mail className="w-3 h-3 text-amber-500" /> enquiry@lewissimpson.co.uk</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hover:text-amber-500 transition-colors text-slate-500 uppercase tracking-widest font-bold">Portal</Link>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-amber-500/10">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-amber-600 text-black p-2 rounded flex items-center justify-center shadow-[0_0_15px_rgba(217,119,6,0.3)]">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight text-white leading-none">LEWIS SIMPSON</span>
              <span className="text-[10px] tracking-[0.3em] font-black text-amber-500 uppercase mt-1">Real Estate</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all ${
                  location.pathname === item.href 
                    ? 'text-amber-500 border-b border-amber-500 pb-1' 
                    : 'text-slate-400 hover:text-amber-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-amber-600 text-black px-7 py-3 rounded text-[11px] font-black uppercase tracking-[0.15em] hover:bg-amber-500 transition-all shadow-[0_4px_20px_rgba(217,119,6,0.2)]"
            >
              Consultation
            </Link>
          </div>

          <button className="lg:hidden p-2 text-amber-500" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-zinc-950 p-8 flex flex-col gap-6 border-l border-amber-500/20">
            <div className="flex justify-between items-center mb-4 border-b border-amber-500/20 pb-4">
              <span className="font-serif font-bold text-amber-500">Navigation</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-xl font-bold uppercase tracking-wider ${
                  location.pathname === item.href ? 'text-amber-500' : 'text-slate-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <main className="flex-1">{children}</main>

      <footer className="bg-black text-slate-500 py-16 px-6 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Building2 className="w-8 h-8 text-amber-500" />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-white leading-none">LEWIS SIMPSON</span>
                <span className="text-[10px] tracking-[0.2em] font-black text-amber-600 uppercase mt-1">Real Estate</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed mb-6 font-medium">
              A premium UK property consultancy with over 20 years of experience in high-performance assets.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                <Icon key={idx} className="w-5 h-5 cursor-pointer hover:text-amber-500 transition-colors" />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-amber-500 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Specialism</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              <li><span className="hover:text-amber-500 transition-colors">Property Investment</span></li>
              <li><span className="hover:text-amber-500 transition-colors">New Build Strategy</span></li>
              <li><span className="hover:text-amber-500 transition-colors">Yield Optimization</span></li>
              <li><span className="hover:text-amber-500 transition-colors">Asset Management</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">Contact</h4>
            <ul className="space-y-4 text-[11px] font-medium leading-relaxed">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+44 (0) 20 7946 0000</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>enquiry@lewissimpson.co.uk</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>One Mayfair Square, London,<br />W1J 8HQ</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-amber-500/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase font-black tracking-[0.3em] text-slate-600">
          <p>© 2026 Lewis Simpson Real Estate. Institutional Grade Portfolio Support.</p>
          <div className="flex gap-6">
            <span className="hover:text-amber-500 cursor-pointer">Privacy</span>
            <span className="hover:text-amber-500 cursor-pointer">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;