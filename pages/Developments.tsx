import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROPERTIES } from '../constants';
import { MapPin, ArrowRight, Building2, Filter, ChevronRight } from 'lucide-react';

const Developments: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProperties = filter === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.type === filter);

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-40 pb-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="text-amber-600 font-bold text-[11px] uppercase tracking-[0.5em] mb-4">Investment Grade</div>
            <h1 className="text-6xl md:text-[90px] font-serif font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]">Exclusive<br/><span className="text-amber-600 italic">Portfolio</span></h1>
            <p className="text-slate-500 text-xl max-w-2xl font-medium leading-relaxed">Strategic access to the UK's most anticipated property developments across high-growth hubs.</p>
          </motion.div>

          <div className="flex flex-wrap gap-4 mb-16">
            {['All', 'Buy-to-Let', 'Buy-to-Live'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-10 py-4 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-all border ${
                  filter === f 
                    ? 'bg-slate-900 border-slate-900 text-white shadow-xl' 
                    : 'bg-white border-slate-200 text-slate-400 hover:border-amber-600 hover:text-amber-600 shadow-sm'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProperties.map((prop, idx) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group bg-white rounded-[40px] overflow-hidden border border-slate-100 hover:border-amber-600/30 transition-all duration-700 shadow-sm hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={prop.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={prop.title} />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-[9px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.2em] border border-white/50 shadow-lg">
                      {prop.type}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
                    <MapPin className="w-3.5 h-3.5" /> {prop.location}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-8 tracking-tight leading-tight group-hover:text-amber-600 transition-colors">{prop.title}</h3>
                  <div className="grid grid-cols-2 gap-4 py-6 border-t border-slate-50">
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Portfolio Entry</p>
                      <p className="text-slate-900 font-bold text-xl">{prop.price}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Target Yield</p>
                      <p className="text-amber-600 font-bold text-xl">{prop.yield.split(' ')[2]}</p>
                    </div>
                  </div>
                  <button className="w-full mt-6 py-5 rounded-2xl bg-slate-900 text-white font-bold uppercase text-[10px] tracking-[0.4em] hover:bg-amber-600 transition-all flex items-center justify-center gap-2 shadow-lg">
                    Request Prospectus <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Section - Clean Minimalist */}
      <section className="py-40 bg-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">Off-Market <br/><span className="text-amber-600 italic">Priority List</span></h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">Many of our most lucrative institutional-grade developments are sold privately before reaching the public market. Join our briefing list for first-look advantage.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Email Address" className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-8 py-5 text-slate-900 focus:border-amber-600 focus:bg-white outline-none transition-all shadow-inner" />
              <button className="bg-amber-600 text-white px-12 py-5 rounded-2xl font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-slate-900 transition-all shadow-xl shadow-amber-600/20">Subscribe</button>
            </div>
            <p className="mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest ml-1">🔒 SECURE DATA • PRIVATE NETWORK</p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -10 }} className="bg-slate-50 p-10 border border-slate-100 rounded-[32px] shadow-sm">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-600 mb-6 border border-slate-100">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-slate-900 font-bold mb-3 text-lg">Build-to-Rent</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Curated blocks designed for high retention and steady cash flow.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="bg-slate-50 p-10 border border-slate-100 rounded-[32px] shadow-sm">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber-600 mb-6 border border-slate-100">
                <Filter className="w-6 h-6" />
              </div>
              <h4 className="text-slate-900 font-bold mb-3 text-lg">Regeneration</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Early entry into UK government-backed growth zones.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developments;