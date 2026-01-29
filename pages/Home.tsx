import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Building2, MapPin, Users } from 'lucide-react';
import { PROPERTIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt="London Architecture"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-10 text-[10px] font-black tracking-[0.3em] text-amber-500 uppercase bg-amber-500/10 border border-amber-500/30 rounded-full">
              Established 20+ Years
            </div>
            <h1 className="text-6xl md:text-[100px] font-serif font-bold leading-[0.85] mb-10 tracking-tighter text-white">
              Smart Property.<br />
              <span className="text-amber-500">Strong Returns.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 mb-14 leading-relaxed font-medium max-w-xl">
              Lewis Simpson helps investors discover high-performance UK assets designed for long-term growth and yields.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact" className="bg-amber-600 text-black px-12 py-6 rounded text-xs font-black uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-amber-500 transition-all shadow-[0_4px_30px_rgba(217,119,6,0.3)]">
                Invest Today <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="px-12 py-6 border border-amber-500/50 text-amber-500 rounded text-xs font-black uppercase tracking-[0.25em] flex items-center justify-center hover:bg-amber-500/10 transition-all">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-black border-y border-amber-500/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: 'Properties Sold', val: '1,900+', icon: <Building2 className="w-6 h-6 text-amber-500" /> },
            { label: 'Market Tenure', val: '20+ Yrs', icon: <TrendingUp className="w-6 h-6 text-amber-500" /> },
            { label: 'Projects Delivered', val: '100+', icon: <MapPin className="w-6 h-6 text-amber-500" /> },
            { label: 'Retention Rate', val: '99%', icon: <Users className="w-6 h-6 text-amber-500" /> },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-5xl font-serif font-bold text-white mb-2 tracking-tighter">{stat.val}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-serif font-bold text-white mb-10 leading-tight">Mastering the UK <br/><span className="text-amber-500 underline decoration-amber-500/20 underline-offset-8">Property Landscape</span></h2>
            <div className="space-y-12">
              {[
                { t: "Strict Asset Selection", d: "We only market properties that pass our rigorous risk-return analysis." },
                { t: "Institutional Grade Advice", d: "Ethical, data-driven consultancy tailored to high-performance portfolios." },
                { t: "Off-Market Advantage", d: "Direct access to UK's most anticipated developments before public release." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-10 h-10 rounded bg-amber-600/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-600 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 group-hover:text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xl mb-2">{item.t}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 border border-amber-500/20 rounded-2xl rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1000" 
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl filter contrast-[1.1] grayscale-[0.2]" 
              alt="Elite Property" 
            />
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-5xl font-serif font-bold text-white mb-6">Strategic Assets</h2>
              <p className="text-slate-500 text-lg">Hand-picked opportunities across UK core cities.</p>
            </div>
            <Link to="/contact" className="text-amber-500 font-black uppercase text-[11px] tracking-[0.25em] flex items-center gap-3 border-b-2 border-amber-500 pb-1 hover:text-white hover:border-white transition-all">
              Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {PROPERTIES.map((prop) => (
              <div key={prop.id} className="group bg-zinc-950 rounded-2xl overflow-hidden border border-amber-500/10 hover:border-amber-500/40 transition-all duration-500">
                <div className="h-72 overflow-hidden relative">
                  <img src={prop.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100" alt={prop.title} />
                  <div className="absolute top-6 left-6">
                    <span className="bg-amber-600 text-black text-[9px] font-black px-4 py-1 rounded uppercase tracking-[0.2em] shadow-xl">
                      {prop.type}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-amber-500/60 text-[10px] font-black uppercase tracking-widest mb-3">
                    <MapPin className="w-3 h-3" /> {prop.location}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-6 tracking-tight">{prop.title}</h3>
                  <div className="flex justify-between items-center py-6 border-t border-amber-500/10">
                    <div>
                      <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">Entry Price</p>
                      <p className="text-white font-bold text-lg">{prop.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">Projected Yield</p>
                      <p className="text-amber-500 font-bold text-lg">{prop.yield.split(' ')[2]}</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 py-4 rounded bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-amber-500 transition-all">
                    Asset Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;