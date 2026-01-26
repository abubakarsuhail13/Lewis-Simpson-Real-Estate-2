
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-blue-950 py-24 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Tailored property solutions designed for both individual buyers and global institutional investors.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-slate-200 hover:border-blue-300 transition-all group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-blue-950 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {["Expert advice", "Market data", "End-to-end support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                    <Check className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
              <button className="text-blue-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-900 py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">How It Works</h2>
            <p className="text-slate-400">Your property journey in 3 simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-blue-800/30 -translate-y-1/2" />
            {[
              { num: '01', title: 'Understand Your Goals', desc: 'We learn your needs, budget, and expectations through a discovery session.' },
              { num: '02', title: 'Find the Right Property', desc: 'We match you with the best opportunity from our exclusive UK portfolio.' },
              { num: '03', title: 'Ongoing Support', desc: 'From purchase to management, we stay with you long-term to ensure success.' },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 bg-slate-900 flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold mb-6 border-4 border-slate-900">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
