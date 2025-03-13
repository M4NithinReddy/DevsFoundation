import React from 'react';
import { Building2, HandHeart, GraduationCap, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: HandHeart,
    title: 'Social Impact',
    description: 'Make a meaningful difference in underprivileged communities through technology education.'
  },
  {
    icon: Trophy,
    title: 'Brand Recognition',
    description: 'Be recognized as a leader in corporate social responsibility and community development.'
  },
  {
    icon: Building2,
    title: 'Employee Engagement',
    description: 'Provide volunteering and mentorship opportunities for your employees.'
  },
  {
    icon: GraduationCap,
    title: 'Talent Pipeline',
    description: 'Connect with skilled graduates for potential recruitment opportunities.'
  }
];

export function CorporatePartnerships() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Corporate Partnerships</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us to create lasting social impact while achieving your CSR goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="bg-white p-8 rounded-xl shadow-lg">
                <Icon className="w-12 h-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold text-blue-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Partnership Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="text-xl font-bold text-blue-800 mb-4">Technology Partner</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Donate drone equipment</li>
                <li>• Provide technical expertise</li>
                <li>• Support curriculum development</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="text-xl font-bold text-blue-800 mb-4">Training Partner</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Sponsor training programs</li>
                <li>• Provide industry mentors</li>
                <li>• Host workshops and events</li>
              </ul>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="text-xl font-bold text-blue-800 mb-4">Impact Partner</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Fund scholarship programs</li>
                <li>• Support community initiatives</li>
                <li>• Enable research projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}