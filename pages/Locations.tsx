import React from 'react';
import { MapPin, TrendingUp, Building, ArrowRight } from 'lucide-react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <div className="bg-black">
      <section className="bg-zinc-950 py-32 px-6 border-b border-amber-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-[100px] font-serif font-bold text-white mb-10 tracking-tighter">Growth <br/><span className="text-amber-500">Hubs</span></h1>
          <p className="text-slate-500 text-xl font-medium">Selected for rental demand, yield strength, and massive regeneration potential.</p>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {LOCATIONS.map((city, idx) => (
            <div key={idx} className="group bg-zinc-950 p-10 rounded-2xl border border-amber-500/10 flex flex-col sm:flex-row gap-10 items-center hover:border-amber-500/40 transition-all">
              <div className="w-full sm:w-56 h-40 rounded bg-black overflow-hidden shrink-0 border border-amber-500/10">
                <img src={`https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600`} className="w-full h-full object-cover filter grayscale contrast-125 opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" alt={city} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-serif font-bold text-white">{city}</h3>
                  <div className="flex items-center gap-2 text-amber-500 font-black text-[10px] uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
                    <TrendingUp className="w-3 h-3" /> Tier 1 Hub
                  </div>
                </div>
                <div className="flex gap-6 mb-8">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase font-black tracking-widest"><MapPin className="w-3 h-3 text-amber-600" /> High Demand</div>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase font-black tracking-widest"><Building className="w-3 h-3 text-amber-600" /> Regeneration</div>
                </div>
                <button className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-3 hover:text-white transition-all">
                  Market Insights <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-amber-600 px-6 text-black text-center shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-8">Asset Acquisition</h2>
          <p className="text-black font-medium mb-12 text-lg">We provide specific market intelligence for emerging towns and strategic boroughs across the UK. Contact our team for institutional mapping.</p>
          <button className="bg-black text-white px-12 py-6 rounded text-xs font-black uppercase tracking-[0.3em] hover:bg-zinc-900 transition-all shadow-2xl">
            Enquire About Hubs
          </button>
        </div>
      </section>
    </div>
  );
};

export default Locations;