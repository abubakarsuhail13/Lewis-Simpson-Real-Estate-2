
// Fix: Import React to resolve 'Cannot find namespace React' for React.ReactNode
import React from 'react';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  yield: string;
  type: 'Buy-to-Let' | 'Buy-to-Live';
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}
