import React from 'react';
import { Users, BookOpen, Globe, Camera } from 'lucide-react';

const opportunities = [
  {
    icon: BookOpen,
    title: 'Training Assistant',
    description: 'Support our instructors in conducting drone training sessions and workshops.',
    commitment: '8-10 hours/week',
    requirements: ['Basic drone knowledge', 'Teaching experience (preferred)', 'Good communication skills']
  },
  {
    icon: Camera,
    title: 'Content Creator',
    description: 'Help create educational content, document success stories, and manage social media.',
    commitment: '5-8 hours/week',
    requirements: ['Content creation skills', 'Social media experience', 'Photography/videography']
  },
  {
    icon: Globe,
    title: 'Outreach Coordinator',
    description: 'Coordinate with communities and organize awareness campaigns.',
    commitment: '10-12 hours/week',
    requirements: ['Project management skills', 'Community experience', 'Local language proficiency']
  },
  {
    icon: Users,
    title: 'Mentorship Program',
    description: 'Guide and support students throughout their learning journey.',
    commitment: '4-6 hours/week',
    requirements: ['Industry experience', 'Mentoring skills', 'Regular availability']
  }
];

export function VolunteerOpportunities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Volunteer Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make a difference by contributing your skills and time to our mission
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <div key={opportunity.title} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-800" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{opportunity.title}</h3>
                    <p className="text-gray-600 mb-4">{opportunity.description}</p>
                    <div className="mb-4">
                      <span className="text-sm font-medium text-green-600">
                        Time Commitment: {opportunity.commitment}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Requirements:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        {opportunity.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition">
            Apply to Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}