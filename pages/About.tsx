import React from 'react';
import { ShieldCheck, Users, Lightbulb, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-32 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-[100px] font-serif font-bold text-slate-900 mb-10 tracking-tighter leading-none">Twenty <br/><span className="text-amber-600 italic">Years</span></h1>
            <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Lewis Simpson Real Estate is an institutional-grade consultancy serving high-performance property portfolios across the United Kingdom.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute inset-0 border border-amber-600/20 rounded-[40px] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-700" />
            <img src="https://images.unsplash.com/photo-1573496130141-2097af01ce8e?q=80&w=2070&auto=format&fit=crop" className="relative rounded-[40px] shadow-2xl filter contrast-[1.05] brightness-[1.02]" alt="Consultancy" />
          </div>
          <div>
            <h2 className="text-5xl font-serif font-bold text-slate-900 mb-10 tracking-tight leading-tight">Legacy of <br/><span className="text-amber-600 italic">Excellence</span></h2>
            <p className="text-slate-500 mb-10 text-lg leading-relaxed font-medium">
              We provide more than property search; we deliver market intelligence. With over two decades of experience, we navigate UK housing cycles with absolute precision, identifying growth hubs before they hit the mainstream.
            </p>
            <p className="text-slate-500 mb-16 leading-relaxed font-medium">
              Our philosophy is rooted in institutional standards. We believe every acquisition should be backed by rigorous data and ethical transparency.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: <ShieldCheck />, label: 'Ethics' },
                { icon: <Users />, label: 'Direct Support' },
                { icon: <Lightbulb />, label: 'Yield Insight' },
                { icon: <Award />, label: 'Capital Growth' },
              ].map((val, idx) => (
                <div key={idx} className="flex items-center gap-5 p-6 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-amber-600/40 transition-all shadow-sm">
                  <div className="text-amber-600 group-hover:scale-110 transition-transform">
                    {React.cloneElement(val.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                  </div>
                  <span className="font-bold text-slate-900 text-[10px] uppercase tracking-[0.2em]">{val.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-32 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Core Values</h2>
            <p className="text-amber-600 font-bold uppercase text-[10px] tracking-[0.4em]">The pillars of our consultancy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Excellence', desc: 'Institutional standards applied to every individual client portfolio.' },
              { title: 'Integrity', desc: 'Absolute transparency in data reporting and asset performance.' },
              { title: 'Alpha', desc: 'Leveraging proprietary market intelligence to find early-stage growth.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[32px] border border-slate-100 hover:border-amber-600/30 transition-all group shadow-sm hover:shadow-xl">
                <h3 className="text-3xl font-serif font-bold text-amber-600 mb-6 tracking-tight group-hover:text-slate-900 transition-colors">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;