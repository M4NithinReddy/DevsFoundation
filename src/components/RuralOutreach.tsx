import React from 'react';
import { Sprout, Building2, Radio, Users } from 'lucide-react';

const benefits = [
  {
    icon: Sprout,
    title: 'Agriculture',
    description: 'Precision farming, crop health monitoring, and irrigation planning through drone technology.'
  },
  {
    icon: Building2,
    title: 'Infrastructure',
    description: 'Asset inspection, construction monitoring, and land surveying using drone solutions.'
  },
  {
    icon: Radio,
    title: 'Connectivity',
    description: 'Emergency communications and internet connectivity in remote areas via drone networks.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Skills development and job creation in the growing drone technology sector.'
  }
];

export function RuralOutreach() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Rural Community Outreach</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Our rural outreach program brings drone technology awareness and training directly to remote communities, empowering them with tools for agricultural advancement and infrastructure development.
              </p>
              <p>
                Through partnerships with local organizations and government bodies, we conduct regular awareness campaigns, demonstrations, and hands-on training sessions tailored to community needs.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
              alt="Drone demonstration in rural area"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-blue-800 mb-12 text-center">Benefits of Drone Technology</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="bg-white p-6 rounded-xl shadow-lg">
                <Icon className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-xl font-bold text-blue-800 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}