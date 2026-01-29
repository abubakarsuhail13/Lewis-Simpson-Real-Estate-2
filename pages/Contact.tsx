
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black">
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Inquire Today</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-10 tracking-tighter leading-[0.85]">Secure Your<br/><span className="text-amber-500">Next Asset.</span></h1>
            <p className="text-slate-500 text-xl mb-16 leading-relaxed font-medium">
              Join elite investors who trust Lewis Simpson for strategic UK property intelligence.
            </p>
            
            <div className="space-y-12">
              {[
                { i: <Phone />, t: 'Priority Line', v: '+44 (0) 20 7946 0000' },
                { i: <Mail />, t: 'Strategic Support', v: 'enquiry@lewissimpson.co.uk' },
                { i: <MapPin />, t: 'Headquarters', v: 'One Mayfair Square, London, W1J 8HQ' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-zinc-950 rounded border border-amber-500/20 flex items-center justify-center text-amber-500 group-hover:bg-amber-600 group-hover:text-black transition-all shadow-[0_0_20px_rgba(217,119,6,0.1)]">
                    {/* Fixed TS error: Cast element to any to allow className prop in cloneElement */}
                    {React.cloneElement(item.i as React.ReactElement<any>, { className: 'w-7 h-7' })}
                  </div>
                  <div>
                    <h4 className="font-black text-[10px] text-amber-600/60 uppercase tracking-[0.3em] mb-1">{item.t}</h4>
                    <p className="text-white font-bold text-xl">{item.v}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-950 p-16 rounded-2xl border border-amber-500/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
            {submitted ? (
              <div className="text-center py-24">
                <div className="w-24 h-24 bg-amber-500 text-black rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(217,119,6,0.3)]">
                  <span className="flex items-center justify-center">
                    <Send className="w-10 h-10" />
                  </span>
                </div>
                <h3 className="text-4xl font-serif font-bold text-white mb-4">Request Logged</h3>
                <p className="text-slate-500 font-medium text-lg uppercase tracking-widest">A specialist will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-12 text-amber-500 font-black uppercase text-[10px] tracking-[0.3em] hover:text-white transition-all"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] ml-2">Name</label>
                    <input required type="text" className="w-full bg-black border border-amber-500/20 rounded px-6 py-5 focus:outline-none focus:border-amber-500 transition-all text-white font-bold" placeholder="Full Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] ml-2">Email</label>
                    <input required type="email" className="w-full bg-black border border-amber-500/20 rounded px-6 py-5 focus:outline-none focus:border-amber-500 transition-all text-white font-bold" placeholder="investor@domain.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] ml-2">Objective</label>
                  <select className="w-full bg-black border border-amber-500/20 rounded px-6 py-5 focus:outline-none focus:border-amber-500 transition-all text-white font-bold appearance-none cursor-pointer">
                    <option>Strategic Investment</option>
                    <option>Residential Acquisition</option>
                    <option>Portfolio Management</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] ml-2">Briefing</label>
                  <textarea rows={5} className="w-full bg-black border border-amber-500/20 rounded px-6 py-5 focus:outline-none focus:border-amber-500 transition-all text-white font-bold resize-none" placeholder="Primary investment goals..."></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-600 text-black font-black py-6 rounded uppercase tracking-[0.4em] text-xs hover:bg-amber-500 transition-all shadow-[0_10px_40px_rgba(217,119,6,0.2)]">
                  Initiate Strategy Session
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-black relative overflow-hidden grayscale contrast-150 brightness-50">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
          className="w-full h-full object-cover" 
          alt="Mayfair Map"
        />
        <div className="absolute inset-0 flex items-center justify-center grayscale-0">
          <div className="bg-zinc-950 border border-amber-500/30 px-10 py-6 rounded shadow-2xl flex items-center gap-6">
            <div className="bg-amber-600 p-3 rounded text-black">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-amber-600 uppercase tracking-[0.3em] mb-1">Global HQ</p>
              <p className="text-white font-serif font-bold text-2xl tracking-tighter">One Mayfair, London</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
