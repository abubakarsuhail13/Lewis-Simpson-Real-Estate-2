
import React from 'react';
import { ShieldCheck, Users, Lightbulb, Handshake } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-24 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Who We Are</h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Lewis Simpson Real Estate is a UK-focused property consultancy supporting investors and homebuyers at every stage of their property journey.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img src="https://images.unsplash.com/photo-1573496130141-2097af01ce8e?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-2xl" alt="Lewis Simpson" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-serif font-bold text-blue-950 mb-6">Over Two Decades of Property Insight</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              With over 20 years of industry experience, we have seen the market evolve. We provide more than just property listings; we provide expert insight, honest guidance, and carefully selected opportunities that align with your long-term goals.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our philosophy is simple: we believe property investment should be secure, stress-free, and profitable. We focus on transparency and long-term relationships over short-term wins.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="w-6 h-6 text-blue-600" />, label: 'Transparency' },
                { icon: <Users className="w-6 h-6 text-blue-600" />, label: 'Relationships' },
                { icon: <Lightbulb className="w-6 h-6 text-blue-600" />, label: 'Market Knowledge' },
                { icon: <Handshake className="w-6 h-6 text-blue-600" />, label: 'Proven Results' },
              ].map((val, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  {val.icon}
                  <span className="font-bold text-blue-950 text-sm">{val.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-blue-950 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Built on ethics and performance, our values drive every decision we make for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Excellence', desc: 'We settle for nothing less than the best properties and results for our clients.' },
              { title: 'Integrity', desc: 'Honest, ethical guidance is at the heart of our consultancy services.' },
              { title: 'Innovation', desc: 'Leveraging data and technology to find the next UK growth hubs before the market.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
                <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
