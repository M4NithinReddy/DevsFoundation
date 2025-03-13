import React from 'react';
import { ProgramsHero } from '../components/ProgramsHero';
import { DroneTraining } from '../components/DroneTraining';
import { RuralOutreach } from '../components/RuralOutreach';
import { SkillDevelopment } from '../components/SkillDevelopment';
import { Newsletter } from '../components/Newsletter';

export function ProgramsPage() {
  return (
    <div>
      <ProgramsHero />
      <DroneTraining />
      <RuralOutreach />
      <SkillDevelopment />
      <Newsletter />
    </div>
  );
}