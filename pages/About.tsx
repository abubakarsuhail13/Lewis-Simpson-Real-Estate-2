
import React from 'react';
import { ShieldCheck, Users, Lightbulb, Handshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-black">
      <section className="bg-zinc-950 py-32 px-6 border-b border-amber-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-[100px] font-serif font-bold text-white mb-10 tracking-tighter">Twenty <br/><span className="text-amber-500">Years</span></h1>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
            Lewis Simpson Real Estate is an institutional-grade consultancy serving high-performance property portfolios across the United Kingdom.
          </p>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute inset-0 border border-amber-500/20 rounded translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-700" />
            <img src="https://images.unsplash.com/photo-1573496130141-2097af01ce8e?q=80&w=2070&auto=format&fit=crop" className="relative rounded shadow-2xl filter grayscale brightness-90 contrast-125" alt="Consultancy" />
          </div>
          <div>
            <h2 className="text-5xl font-serif font-bold text-white mb-10 tracking-tight">Legacy of <br/><span className="text-amber-500">Excellence</span></h2>
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
                { icon: <Handshake />, label: 'Capital Growth' },
              ].map((val, idx) => (
                <div key={idx} className="flex items-center gap-5 p-6 bg-zinc-950 border border-amber-500/10 rounded group hover:border-amber-500/40 transition-all">
                  <div className="text-amber-500 group-hover:scale-110 transition-transform">
                    {/* Fixed TS error: Cast element to any to allow className prop in cloneElement */}
                    {React.cloneElement(val.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                  </div>
                  <span className="font-black text-white text-[10px] uppercase tracking-[0.2em]">{val.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-32 px-6 border-t border-amber-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif font-bold text-white mb-6">Core Values</h2>
            <p className="text-amber-500 font-black uppercase text-[10px] tracking-[0.4em]">The pillars of our consultancy</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Excellence', desc: 'Institutional standards applied to every individual client portfolio.' },
              { title: 'Integrity', desc: 'Absolute transparency in data reporting and asset performance.' },
              { title: 'Alpha', desc: 'Leveraging proprietary market intelligence to find early-stage growth.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-black p-12 rounded border border-amber-500/10 hover:border-amber-500 transition-all group">
                <h3 className="text-3xl font-serif font-bold text-amber-500 mb-6 tracking-tight group-hover:text-white transition-colors">{value.title}</h3>
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
