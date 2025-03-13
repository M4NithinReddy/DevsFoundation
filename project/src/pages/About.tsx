import React from 'react';
import { AboutHero } from '../components/AboutHero';
import { Story } from '../components/Story';
import { VisionMission } from '../components/VisionMission';
import { Leadership } from '../components/Leadership';
import { Partners } from '../components/Partners';
import { Newsletter } from '../components/Newsletter';

export function AboutPage() {
  return (
    <div>
      <AboutHero />
      <Story />
      <VisionMission />
      <Leadership />
      <Partners />
      <Newsletter />
    </div>
  );
}