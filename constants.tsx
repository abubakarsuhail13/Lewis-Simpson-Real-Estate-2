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
    title: 'Property Investment',
    description: 'Access high-potential UK properties offering strong rental income and future growth.',
    icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Buying & Selling',
    description: 'Expert support for buying and selling residential properties with confidence.',
    icon: <Home className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'New Build Developments',
    description: 'Exclusive access to premium and off-market developments across the UK.',
    icon: <Building2 className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Lettings & Management',
    description: 'End-to-end management services for hassle-free ownership and steady income.',
    icon: <Key className="w-8 h-8 text-amber-500" />,
  },
  {
    title: 'Consultation & Strategy',
    description: 'Personalised advice tailored to your budget, timeline, and investment goals.',
    icon: <Briefcase className="w-8 h-8 text-amber-500" />,
  },
];

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Victoria Residences',
    location: 'Manchester City Centre',
    price: 'From £245,000',
    yield: 'Up to 7% Rental Yield',
    type: 'Buy-to-Let',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'London Dockside Luxury',
    location: 'Canary Wharf, London',
    price: 'From £550,000',
    yield: '4.5% Rental Yield',
    type: 'Buy-to-Live',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Birmingham Hub Heights',
    location: 'Digbeth, Birmingham',
    price: 'From £195,000',
    yield: '7.5% Projected Yield',
    type: 'Buy-to-Let',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800',
  },
];

export const LOCATIONS = [
  'London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool', 'Bradford', 'Sheffield', 'York'
];