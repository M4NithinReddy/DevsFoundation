import React from 'react';
import { EventsHero } from '../components/EventsHero';
import { EventsList } from '../components/EventsList';
import { Newsletter } from '../components/Newsletter';

export function EventsPage() {
  return (
    <div>
      <EventsHero />
      <EventsList />
      <Newsletter />
    </div>
  );
}