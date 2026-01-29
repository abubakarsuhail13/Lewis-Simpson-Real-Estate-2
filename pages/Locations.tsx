import React from 'react';
import { MapPin, TrendingUp, Building, ArrowRight, ChevronRight } from 'lucide-react';
import { LOCATIONS } from '../constants';
import { motion } from 'framer-motion';

const Locations: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-32 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-[100px] font-serif font-bold text-slate-900 mb-10 tracking-tighter leading-none">Growth <br/><span className="text-amber-600 italic">Hubs</span></h1>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto">Selected for rental demand, yield strength, and massive regeneration potential.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {LOCATIONS.map((city, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group bg-white p-10 rounded-[32px] border border-slate-100 flex flex-col sm:flex-row gap-10 items-center hover:border-amber-600/20 transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="w-full sm:w-56 h-48 rounded-2xl bg-slate-100 overflow-hidden shrink-0 border border-slate-100">
                <img src={`https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600`} className="w-full h-full object-cover filter brightness-[1.05] contrast-[1.1] transition-all duration-700 group-hover:scale-110" alt={city} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{city}</h3>
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-[9px] uppercase tracking-widest bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100 shadow-sm">
                    <TrendingUp className="w-3 h-3" /> Tier 1 Hub
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase font-bold tracking-widest bg-slate-50 px-3 py-1 rounded-full"><MapPin className="w-3 h-3 text-amber-600" /> High Demand</div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 uppercase font-bold tracking-widest bg-slate-50 px-3 py-1 rounded-full"><Building className="w-3 h-3 text-amber-600" /> Regeneration</div>
                </div>
                <button className="text-slate-900 font-bold uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 hover:text-amber-600 transition-all group-btn">
                  Market Insights <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-amber-600 px-6 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl font-serif font-bold mb-8 tracking-tight">Asset Acquisition</h2>
          <p className="text-white/90 font-medium mb-12 text-lg leading-relaxed">We provide specific market intelligence for emerging towns and strategic boroughs across the UK. Contact our team for institutional mapping.</p>
          <button className="bg-slate-900 text-white px-16 py-6 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl">
            Enquire About Hubs
          </button>
        </div>
      </section>
    </div>
  );
};

export default Locations;