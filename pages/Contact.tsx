
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-5xl font-serif font-bold text-blue-950 mb-6">Let’s Start Your Property Journey</h1>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Whether you’re investing, buying your next home, or just have a general enquiry, our expert team is here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-700">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Call Us</h4>
                  <p className="text-slate-500">+44 (0) 20 7946 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Email Us</h4>
                  <p className="text-slate-500">enquiry@lewissimpsonrealestate.co.uk</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-blue-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">UK Office</h4>
                  <p className="text-slate-500">One Mayfair Square, London, W1J 8HQ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-blue-900/10 border border-slate-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-blue-950 mb-2">Message Received!</h3>
                <p className="text-slate-600">A member of our team will contact you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-blue-700 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name</label>
                    <input required type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                    <input required type="text" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input required type="email" className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Enquiry Type</label>
                  <select className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Property Investment</option>
                    <option>Buying a Home</option>
                    <option>Selling a Property</option>
                    <option>Lettings & Management</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Tell us about your goals..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 active:scale-95">
                  Book Free Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale opacity-50" 
          alt="Map View"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
            <div className="bg-blue-900 p-2 rounded-lg text-white">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our HQ</p>
              <p className="text-blue-950 font-serif font-bold">One Mayfair, London</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
