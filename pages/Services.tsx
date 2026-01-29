
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-black">
      <section className="bg-zinc-950 py-32 px-6 border-b border-amber-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tighter">Strategic<br/><span className="text-amber-500">Solutions</span></h1>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">High-performance property advisory for domestic homebuyers and global institutional investors.</p>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-zinc-950 p-12 rounded-2xl border border-amber-500/10 hover:border-amber-500/40 transition-all group">
              <div className="mb-10 w-16 h-16 bg-amber-600/10 rounded flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-600 transition-all">
                {/* Fixed TS error: Cast element to any to allow className prop in cloneElement */}
                {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-8 h-8 text-amber-500 group-hover:text-black' })}
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-6">{service.title}</h3>
              <p className="text-slate-500 mb-10 leading-relaxed text-sm">{service.description}</p>
              <ul className="space-y-4 mb-10">
                {["Institutional Grade Advice", "Full Market Mapping", "Risk Mitigation Strategy"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <Check className="w-4 h-4 text-amber-500" /> {item}
                  </li>
                ))}
              </ul>
              <button className="text-amber-500 font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-2 hover:text-white transition-all">
                Discovery Session <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-32 px-6 border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif font-bold text-white mb-6">The Success Framework</h2>
            <p className="text-slate-500 text-lg uppercase tracking-[0.2em] font-black text-[10px]">Your journey to high-yield asset ownership</p>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { num: '01', title: 'Intelligence Gathering', desc: 'Deep dive into your financial objectives and risk tolerance.' },
              { num: '02', title: 'Strategic Mapping', desc: 'Identifying off-market assets that align with your growth trajectory.' },
              { num: '03', title: 'Execution & Management', desc: 'Secure the asset and activate our end-to-end management suite.' },
            ].map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded bg-black flex items-center justify-center text-4xl font-serif font-bold mb-10 border border-amber-500/20 text-amber-500 shadow-[0_0_30px_rgba(217,119,6,0.1)] group-hover:bg-amber-600 group-hover:text-black transition-all">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs uppercase tracking-wider font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
