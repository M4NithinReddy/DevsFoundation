import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GetInvolvedHero } from '../components/GetInvolvedHero';
import { VolunteerOpportunities } from '../components/VolunteerOpportunities';
import { CorporatePartnerships } from '../components/CorporatePartnerships';
import { DonateSection } from '../components/DonateSection';
import { Newsletter } from '../components/Newsletter';

export function GetInvolvedPage() {
  const location = useLocation();
  const state = location.state as { scrollTo?: string };

  useEffect(() => {
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [state?.scrollTo]);

  return (
    <div>
      <GetInvolvedHero />
      <VolunteerOpportunities />
      <CorporatePartnerships />
      <DonateSection />
      <Newsletter />
    </div>
  );
}