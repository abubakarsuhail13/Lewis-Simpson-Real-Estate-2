
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Building2, MapPin, Users } from 'lucide-react';
import { PROPERTIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="London Skyline"
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="max-w-2xl text-white">
            <span className="inline-block bg-blue-600/30 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Elite UK Property Consultancy
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6">
              Smart Property.<br />
              <span className="text-blue-400">Strong Returns.</span><br />
              Confident Decisions.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed font-light">
              Lewis Simpson Real Estate helps buyers and investors discover high-quality UK property opportunities designed for long-term value and reliable returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/developments" className="bg-white text-blue-950 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all hover:translate-y-[-2px]">
                View Properties <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-500 transition-all hover:translate-y-[-2px] border border-blue-400/30">
                Book a Free Consultation
              </Link>
            </div>
            <div className="mt-12 flex gap-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">20+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Years Exp</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">1.9k+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Sold</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">99%</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-blue-950 mb-6">Unrivaled Expertise in UK Property Investment</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you're building a portfolio or buying your first home, our transparent approach ensures you navigate the UK market with clarity and confidence.
              </p>
              <div className="space-y-6">
                {[
                  "20+ years of handpicked property experience",
                  "Access to exclusive, off-market UK developments",
                  "Strong focus on rental yields & capital growth",
                  "Ethical, transparent, and client-first advice"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-2xl rotate-2" />
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop" 
                className="relative rounded-2xl shadow-2xl" 
                alt="Modern Architecture" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-blue-950 py-20 px-6 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Properties Sold', val: '1,900+', icon: <Building2 className="w-6 h-6 text-blue-400" /> },
            { label: 'Years Experience', val: '20+', icon: <TrendingUp className="w-6 h-6 text-blue-400" /> },
            { label: 'Projects Delivered', val: '100+', icon: <MapPin className="w-6 h-6 text-blue-400" /> },
            { label: 'Satisfaction', val: '99%', icon: <Users className="w-6 h-6 text-blue-400" /> },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="mb-4">{stat.icon}</div>
              <span className="text-3xl md:text-4xl font-serif font-bold mb-1">{stat.val}</span>
              <span className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-blue-950 mb-4">Featured Opportunities</h2>
              <p className="text-slate-600">Explore buy-to-live and buy-to-let properties across the UK's most in-demand cities, from London to Manchester.</p>
            </div>
            <Link to="/developments" className="text-blue-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Explore All Developments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROPERTIES.map((prop) => (
              <div key={prop.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:translate-y-[-4px]">
                <div className="h-64 overflow-hidden relative">
                  <img src={prop.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={prop.title} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-blue-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {prop.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-slate-400 text-xs mb-2">
                    <MapPin className="w-3 h-3" /> {prop.location}
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-2">{prop.title}</h3>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-slate-500 text-sm">Price</p>
                      <p className="text-blue-700 font-bold">{prop.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-500 text-sm">Returns</p>
                      <p className="text-green-600 font-bold text-sm">{prop.yield}</p>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-3 rounded-xl bg-slate-100 text-blue-950 font-bold group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-blue-950 mb-6">Start Your Property Journey Today</h2>
          <p className="text-slate-600 mb-10 text-lg">Whether you are looking for high-yield investment properties or your dream home, we are here to provide the insights and support you need.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto bg-blue-900 text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-all">
              Book a Free Consultation
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-10 py-4 rounded-2xl border-2 border-blue-900 text-blue-900 font-bold hover:bg-slate-50 transition-all">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
