
import React from 'react';
import { MapPin, TrendingUp, Users, Building } from 'lucide-react';
import { LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 px-6 border-b">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-950 mb-6">Strategic UK Locations</h1>
          <p className="text-slate-600 text-lg">We focus on high-growth cities selected for rental demand, yield strength, and massive regeneration potential.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {LOCATIONS.map((city, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-2xl border border-slate-200 flex flex-col sm:flex-row gap-6 items-center hover:shadow-lg transition-all">
              <div className="w-full sm:w-48 h-32 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                <img src={`https://picsum.photos/seed/${city}/400/300`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={city} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-serif font-bold text-blue-950">{city}</h3>
                  <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                    <TrendingUp className="w-4 h-4" /> High Growth
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs text-slate-500 uppercase tracking-widest font-bold">
                  <div className="flex items-center gap-2"><Users className="w-3 h-3" /> Strong Demand</div>
                  <div className="flex items-center gap-2"><Building className="w-3 h-3" /> Regeneration</div>
                </div>
                <button className="mt-6 text-blue-700 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  View {city} Opportunities <MapPin className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-blue-900 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-6">Missing a Specific Location?</h2>
          <p className="text-blue-100 mb-8">We have partners across the entire UK. Contact us if you are looking for properties in a specific borough or emerging town not listed here.</p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">
            Enquire About Other Areas
          </button>
        </div>
      </section>
    </div>
  );
};

export default Locations;
