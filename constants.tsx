import React from 'react';
import { NavItem, Service, Property } from './types';
import { 
  Building2, 
  TrendingUp, 
  Home, 
  Key, 
  Briefcase, 
  MapPin
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Developments', href: '/developments' },
  { label: 'Services', href: '/services' },
  { label: 'Locations', href: '/locations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Institutional Investment',
    description: 'Bespoke acquisition strategies for family offices and institutional funds targeting high-alpha UK assets.',
    icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Asset Disposals',
    description: 'Seamless exit strategies leveraging our global network to maximize liquidity and capital gains.',
    icon: <Home className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Off-Market Portfolio',
    description: 'Exclusive access to Tier 1 and Tier 2 UK developments before they reach the secondary market.',
    icon: <Building2 className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Property Management',
    description: 'High-touch asset management ensuring optimized occupancy and institutional-grade reporting.',
    icon: <Key className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Strategic Consultancy',
    description: 'Data-driven advisory on regeneration zones, planning gain, and yield compression trends.',
    icon: <Briefcase className="w-8 h-8 text-amber-500" />,
  },
];

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Elizabeth Quarter',
    location: 'Spinningfields, Manchester',
    price: 'From £315,000',
    yield: 'Up to 6.8% Rental Yield',
    type: 'Buy-to-Let',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Belvedere Heights',
    location: 'Nine Elms, London',
    price: 'From £845,000',
    yield: '4.2% Net Yield',
    type: 'Buy-to-Live',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Innovation Point',
    location: 'Jewellery Quarter, Birmingham',
    price: 'From £220,000',
    yield: '7.2% Projected Yield',
    type: 'Buy-to-Let',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800',
  },
];

export const LOCATIONS = [
  'London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Bradford', 'Sheffield', 'York'
];