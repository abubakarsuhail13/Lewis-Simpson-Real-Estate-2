
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Lock, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import SmartAssistant from './SmartAssistant';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPortal, setShowPortal] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-600">
      {/* Top Bar - Clean Light */}
      <div className="bg-slate-50 text-[10px] sm:text-[11px] py-2 px-6 flex justify-between items-center border-b border-slate-100">
        <div className="flex items-center gap-6 text-slate-400 font-medium tracking-wide">
          <span className="flex items-center gap-2 hover:text-amber-600 transition-colors cursor-pointer"><Phone className="w-3 h-3 text-amber-600" /> +44 (0) 20 7946 0888</span>
          <span className="hidden sm:flex items-center gap-2 hover:text-amber-600 transition-colors cursor-pointer"><Mail className="w-3 h-3 text-amber-600" /> hq@lewissimpson.com</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setShowPortal(true)}
            className="flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors uppercase tracking-[0.2em] font-bold text-[10px]"
          >
            <Lock className="w-3 h-3" /> Investor Portal
          </button>
        </div>
      </div>

      {/* Navigation - Glass Light */}
      <header className="sticky top-0 z-40 glass-nav">
        <nav className="max-w-7xl mx-auto px-6 h-20 sm:h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-amber-600 text-white p-2 sm:p-2.5 rounded-lg flex items-center justify-center shadow-lg group-hover:bg-slate-900 transition-all duration-300">
              <Building2 className="w-6 h-6 sm:w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-slate-900 leading-none">LEWIS SIMPSON</span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.4em] font-black text-amber-600 uppercase mt-1">Real Estate</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative group ${
                  location.pathname === item.href 
                    ? 'text-slate-900' 
                    : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-amber-600 transition-all duration-300 ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-amber-600 transition-all shadow-md hover:shadow-xl active:scale-95 ml-4"
            >
              Consultation
            </Link>
          </div>

          <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-7 h-7" />
          </button>
        </nav>
      </header>

      {/* Portal Modal - Modern Light */}
      <AnimatePresence>
        {showPortal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
              onClick={() => setShowPortal(false)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-md p-10 sm:p-12 border border-slate-100 rounded-3xl shadow-2xl"
            >
              <button onClick={() => setShowPortal(false)} className="absolute top-6 right-6 text-slate-300 hover:text-slate-900 transition-colors">
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2 tracking-tight">Investor Login</h3>
              <p className="text-slate-500 mb-8 text-sm">Secure access to your private property portfolio.</p>
              <form className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 ml-1">Client ID</label>
                  <input type="text" placeholder="LS-99203" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-amber-600 focus:bg-white transition-all text-slate-900" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2 ml-1">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-amber-600 focus:bg-white transition-all text-slate-900" />
                </div>
                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition-all shadow-lg">Authorize Session</button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Nav Overlay - Clean Light */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-md" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white p-12 flex flex-col gap-8 shadow-2xl"
            >
              <div className="flex justify-between items-center border-b border-slate-100 pb-8">
                <div className="flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-amber-600" />
                  <span className="font-serif font-bold text-slate-900 text-xl">L.S. Real Estate</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-900">
                  <X className="w-7 h-7" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-3xl font-serif font-bold tracking-tight transition-colors ${
                      location.pathname === item.href ? 'text-amber-600' : 'text-slate-900 hover:text-amber-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-auto bg-amber-600 text-white p-5 rounded-2xl text-center font-bold uppercase text-sm tracking-widest shadow-xl"
              >
                Start Consultation
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {children}
        {/* Integrating the AI Smart Assistant */}
        <SmartAssistant />
      </main>

      {/* Footer - Sophisticated Light */}
      <footer className="bg-slate-50 text-slate-500 py-24 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="w-9 h-9 text-amber-600" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold text-slate-900 leading-none">LEWIS SIMPSON</span>
                <span className="text-[10px] tracking-[0.3em] font-black text-amber-600 uppercase mt-1">Real Estate</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-8 font-medium text-slate-500">
              Institutional-grade property consultancy specialized in high-performance UK assets for global private clients.
            </p>
            <div className="flex gap-5">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                <div key={idx} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all cursor-pointer shadow-sm group">
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 text-[11px] font-black uppercase tracking-[0.3em] mb-10 border-b border-amber-600/20 pb-2 inline-block">Asset Classes</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              <li><Link to="/developments" className="hover:text-amber-600 transition-colors flex items-center gap-2 group">Residential Investment <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/developments" className="hover:text-amber-600 transition-colors flex items-center gap-2 group">New-Build Premium <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/developments" className="hover:text-amber-600 transition-colors flex items-center gap-2 group">Build-to-Rent (BTR) <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/developments" className="hover:text-amber-600 transition-colors flex items-center gap-2 group">Strategic Land <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 text-[11px] font-black uppercase tracking-[0.3em] mb-10 border-b border-amber-600/20 pb-2 inline-block">Resources</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-amber-600 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 text-[11px] font-black uppercase tracking-[0.3em] mb-10 border-b border-amber-600/20 pb-2 inline-block">Contact</h4>
            <ul className="space-y-6 text-sm font-medium leading-relaxed">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-slate-500">One Mayfair Square,<br />London, W1J 8HQ</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-slate-500">+44 (0) 20 7946 0888</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-slate-500">hq@lewissimpson.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-200 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">
          <p>© 2026 Lewis Simpson Real Estate. Excellence in Acquisition.</p>
          <div className="flex gap-8">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Cookie Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
