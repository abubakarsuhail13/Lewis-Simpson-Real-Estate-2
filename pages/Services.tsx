import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-40 pb-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-amber-600 font-bold text-[11px] uppercase tracking-[0.5em] mb-4">Strategic Advisory</div>
            <h1 className="text-6xl md:text-[90px] font-serif font-bold text-slate-900 mb-10 tracking-tighter leading-none">Institutional<br/><span className="text-amber-600 italic">Solutions</span></h1>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">Sophisticated property consultancy for private clients and global sovereign wealth funds.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-12 rounded-[40px] border border-slate-100 hover:border-amber-600/20 transition-all duration-500 shadow-sm hover:shadow-2xl group"
            >
              <div className="mb-10 w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-amber-600 transition-all shadow-sm">
                {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-7 h-7 text-amber-600 group-hover:text-white transition-colors' })}
              </div>
              <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6 group-hover:text-amber-600 transition-colors">{service.title}</h3>
              <p className="text-slate-500 mb-10 leading-relaxed text-sm font-medium">{service.description}</p>
              <ul className="space-y-4 mb-10">
                {["Institutional Grade Due Diligence", "Full Life-Cycle Reporting", "Alpha-Focused Selection"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <Check className="w-4 h-4 text-amber-600" /> {item}
                  </li>
                ))}
              </ul>
              <button className="text-slate-900 font-bold uppercase text-[10px] tracking-[0.4em] flex items-center gap-2 hover:text-amber-600 transition-all group-btn">
                Discover More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Steps - Light Interactive */}
      <section className="bg-slate-50 py-40 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">The Growth Framework</h2>
            <p className="text-slate-400 text-lg uppercase tracking-[0.4em] font-bold text-[11px]">Seamless Execution from Acquisition to Disposal</p>
          </div>
          <div className="grid md:grid-cols-3 gap-20">
            {[
              { num: '01', title: 'Asset Briefing', desc: 'Detailed analysis of your fiscal objectives and capital growth requirements.' },
              { num: '02', title: 'Tactical Mapping', desc: 'Leveraging our network to secure pre-launch assets in high-performance hubs.' },
              { num: '03', title: 'Activation', desc: 'Institutional management activates to ensure maximum yield and retained occupancy.' },
            ].map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-3xl bg-white flex items-center justify-center text-4xl font-serif font-bold mb-10 border border-slate-100 text-slate-900 shadow-sm group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 hover:scale-110">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">{step.desc}</p>
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-12 left-full w-24 h-px bg-slate-200 -translate-x-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;