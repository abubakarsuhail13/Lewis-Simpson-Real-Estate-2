import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <section className="pt-40 pb-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-amber-600 font-bold uppercase tracking-[0.5em] text-[11px] mb-6 block">Confidential Enquiry</span>
              <h1 className="text-6xl md:text-[90px] font-serif font-bold text-slate-900 mb-10 tracking-tighter leading-[0.9]">Secure Your <br/><span className="text-amber-600 italic">Next Asset.</span></h1>
              <p className="text-slate-500 text-xl mb-16 leading-relaxed font-medium max-w-xl">
                Partner with Lewis Simpson for strategic access to the UK's most anticipated property opportunities.
              </p>
              
              <div className="space-y-10">
                {[
                  { i: <Phone />, t: 'Private Line', v: '+44 (0) 20 7946 0888' },
                  { i: <Mail />, t: 'Strategic Desk', v: 'hq@lewissimpson.com' },
                  { i: <MapPin />, t: 'Global Headquarters', v: 'One Mayfair Square, London, W1J 8HQ' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm">
                      {React.cloneElement(item.i as React.ReactElement<any>, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <h4 className="font-bold text-[10px] text-slate-400 uppercase tracking-[0.4em] mb-1">{item.t}</h4>
                      <p className="text-slate-900 font-bold text-lg group-hover:text-amber-600 transition-colors">{item.v}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-10 sm:p-16 rounded-[40px] border border-slate-100 shadow-2xl relative"
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-50 rounded-full -z-10 blur-2xl" />
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 border border-green-100 shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-slate-900 mb-4">Request Received</h3>
                  <p className="text-slate-500 font-medium text-lg mb-10">A senior advisor will contact you within 4 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-amber-600 font-bold uppercase text-[11px] tracking-[0.3em] hover:text-slate-900 transition-all border-b border-amber-600/30 pb-1"
                  >
                    Send another briefing
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                      <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-600 focus:bg-white transition-all text-slate-900 font-medium" placeholder="Alexander West" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-600 focus:bg-white transition-all text-slate-900 font-medium" placeholder="west@private-office.com" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Investment Goal</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-600 focus:bg-white transition-all text-slate-900 font-medium appearance-none cursor-pointer">
                      <option>New-Build Acquisition</option>
                      <option>Portfolio Expansion</option>
                      <option>Yield-Focused Selection</option>
                      <option>Commercial Transition</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Portfolio Summary</label>
                    <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-600 focus:bg-white transition-all text-slate-900 font-medium resize-none" placeholder="Primary investment goals and capital allocation..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-white font-bold py-5 rounded-2xl uppercase tracking-[0.4em] text-xs hover:bg-amber-600 transition-all shadow-xl hover:-translate-y-1">
                    Initiate Briefing
                  </button>
                  <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest">Global Service Level Agreement: 4-Hour Response Time</p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modern Map Section */}
      <section className="h-[500px] w-full bg-slate-100 relative overflow-hidden grayscale contrast-[1.1] brightness-[1.05]">
        <img 
          src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60" 
          alt="London Bridge View"
        />
        <div className="absolute inset-0 flex items-center justify-center grayscale-0">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-slate-200 px-10 py-8 rounded-[32px] shadow-2xl flex items-center gap-6"
          >
            <div className="bg-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-amber-600 uppercase tracking-[0.4em] mb-1">Global Office</p>
              <p className="text-slate-900 font-serif font-bold text-3xl tracking-tight leading-none">Mayfair, London</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;