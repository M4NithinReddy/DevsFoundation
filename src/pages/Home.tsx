import React from 'react';
import { Hero } from '../components/Hero';
import { Mission } from '../components/Mission';
import { FeaturedPrograms } from '../components/FeaturedPrograms';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';

export function HomePage() {
  return (
    <div>
      <Hero />
      <Mission />
      <FeaturedPrograms />
      <Testimonials />
      <Newsletter />
    </div>
  );
}