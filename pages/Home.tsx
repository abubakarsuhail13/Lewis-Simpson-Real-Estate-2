
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Building2, MapPin, Users, Globe, ChevronRight } from 'lucide-react';
import { PROPERTIES } from '../constants';

const Home: React.FC = () => {
  // Explicitly typing variants to fix string type inference error for transition easing properties
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Explicitly typing variants to fix string type inference error for transition easing properties
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Hero Section - Light Aesthetic */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-slate-50">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]" 
            alt="Modern Architecture"
          />
          <div className="absolute inset-0 hero-gradient-light" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-[11px] font-bold tracking-[0.4em] text-amber-700 uppercase bg-amber-50 rounded-full border border-amber-100 shadow-sm"
            >
              <Globe className="w-3.5 h-3.5" /> Premier UK Property Advisory
            </motion.div>
            <h1 className="text-6xl md:text-[100px] font-serif font-bold leading-[0.9] mb-10 tracking-tighter text-slate-900">
              Future-Proof Assets.<br />
              <span className="text-amber-600 italic font-medium">Bespoke Returns.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-14 leading-relaxed font-medium max-w-2xl">
              We empower global investors to secure high-yield UK residential portfolios through institutional-grade market intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/developments" className="group bg-slate-900 text-white px-12 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-amber-600 transition-all shadow-xl hover:-translate-y-1">
                View Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="px-12 py-5 border border-slate-200 text-slate-900 bg-white/50 backdrop-blur-sm rounded-full text-[11px] font-bold uppercase tracking-[0.3em] flex items-center justify-center hover:border-amber-600 hover:text-amber-600 transition-all shadow-sm">
                Our Strategy
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-12 right-12 hidden md:flex items-center gap-6">
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Trusted By</span>
            <span className="text-sm font-serif font-bold text-slate-900">1,200+ Private Clients</span>
          </div>
          <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-amber-600">
            <Users className="w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Stats - Soft Neutral */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {[
              { label: 'Asset Disposals', val: '2,400+', icon: <Building2 className="w-6 h-6" /> },
              { label: 'Years Experience', val: '22+', icon: <TrendingUp className="w-6 h-6" /> },
              { label: 'Strategic Cities', val: '14', icon: <MapPin className="w-6 h-6" /> },
              { label: 'Managed Assets', val: '£1.4B+', icon: <Globe className="w-6 h-6" /> },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all duration-500 shadow-sm hover:shadow-xl">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-600 border border-slate-50">
                  {stat.icon}
                </div>
                <div className="text-5xl font-serif font-bold text-slate-900 mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strategic Advantage - Clean Contrast */}
      <section className="py-40 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-100/30 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-amber-600 font-bold text-[11px] uppercase tracking-[0.5em] mb-6">The Success Advantage</div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-12 leading-tight tracking-tight">Data-Driven <br/><span className="text-amber-600 italic">Portfolio Intelligence</span></h2>
            <div className="space-y-12">
              {[
                { t: "Rigorous Asset Scoring", d: "We employ a proprietary 50-point risk-return matrix for every acquisition, ensuring long-term capital stability." },
                { t: "Exclusive Access", d: "Benefit from our pre-launch institutional networks, securing Tier 1 stock before it reaches the retail market." },
                { t: "Lifecycle Management", d: "We manage the entire lifecycle from acquisition and high-yield lettings to tax-efficient disposal." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-amber-600 group-hover:border-amber-600 transition-all duration-500 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2 tracking-tight">{item.t}</h4>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5]"
          >
            <div className="absolute inset-0 bg-amber-50 rounded-[40px] translate-x-4 translate-y-4 -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
              className="relative w-full h-full object-cover rounded-[40px] shadow-2xl border-4 border-white" 
              alt="Luxury Interior" 
            />
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -left-8 bg-white p-10 rounded-3xl shadow-2xl border border-slate-50 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 font-bold">8%</div>
                <div className="h-px flex-1 bg-slate-100" />
              </div>
              <p className="text-slate-900 font-serif font-bold text-2xl mb-1">9.2% Growth</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Avg. 5yr Capital Appreciation</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Selected Assets - Bright Grid */}
      <section className="py-40 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">Selected Assets</h2>
              <p className="text-slate-500 text-xl font-medium max-w-xl leading-relaxed">Curated institutional opportunities in the UK's high-demand regeneration zones.</p>
            </motion.div>
            <Link to="/developments" className="group bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all flex items-center gap-3 shadow-sm hover:shadow-xl active:scale-95">
              Full Portfolio <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {PROPERTIES.map((prop, idx) => (
              <motion.div 
                key={prop.id}
                variants={itemVariants}
                className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-amber-600/30 transition-all duration-700 shadow-sm hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="h-80 overflow-hidden relative">
                  <img src={prop.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={prop.title} />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-[9px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg border border-white/20">
                      {prop.type}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                    <MapPin className="w-3.5 h-3.5" /> {prop.location}
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900 mb-8 tracking-tight group-hover:text-amber-600 transition-colors leading-tight">{prop.title}</h3>
                  <div className="flex justify-between items-center py-6 border-t border-slate-50">
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Entry Value</p>
                      <p className="text-slate-900 font-bold text-xl">{prop.price}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Net Yield</p>
                      <p className="text-amber-600 font-bold text-xl">{prop.yield.split(' ')[2]}</p>
                    </div>
                  </div>
                  <Link to="/contact" className="block w-full text-center mt-6 py-5 rounded-2xl bg-slate-50 text-slate-900 font-bold uppercase text-[10px] tracking-[0.4em] hover:bg-slate-900 hover:text-white transition-all shadow-inner">
                    Request Info Pack
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dynamic CTA - Warm Gold Accent */}
      <section className="py-40 bg-white px-6">
        <div className="max-w-6xl mx-auto rounded-[60px] bg-slate-900 overflow-hidden relative p-16 sm:p-24 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 blur-[100px] -z-0" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 tracking-tighter leading-none">
              Build Your <br/><span className="text-amber-600 italic">Legacy.</span>
            </h2>
            <p className="text-slate-400 font-medium mb-14 text-xl max-w-2xl mx-auto leading-relaxed">
              Connect with our senior partners today for a complimentary high-performance property strategy session.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="bg-amber-600 text-white px-16 py-6 rounded-full text-sm font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl shadow-amber-600/20 active:scale-95">
                Start Strategy Session
              </Link>
              <div className="flex items-center gap-3 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Partners Available Now
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
