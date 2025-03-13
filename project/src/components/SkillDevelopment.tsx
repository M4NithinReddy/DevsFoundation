import React from 'react';
import { BookOpen, Code, Camera, Shield } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: 'Technical Training',
    description: 'Comprehensive courses in drone assembly, maintenance, and repair.',
    duration: '12 weeks'
  },
  {
    icon: Code,
    title: 'Software Development',
    description: 'Learn to program autonomous flight paths and data analysis.',
    duration: '16 weeks'
  },
  {
    icon: Camera,
    title: 'Aerial Photography',
    description: 'Master drone photography and videography techniques.',
    duration: '8 weeks'
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    description: 'Understanding regulations and safety protocols.',
    duration: '4 weeks'
  }
];

export function SkillDevelopment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Skill Development Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive hands-on training programs designed to create skilled professionals in the drone technology sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div key={program.title} className="bg-gray-50 p-8 rounded-xl">
                <Icon className="w-12 h-12 text-blue-800 mb-4" />
                <h3 className="text-xl font-bold text-blue-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <p className="text-sm font-medium text-green-600">Duration: {program.duration}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our skill development programs and become part of the growing drone technology industry. 
            All programs are free for qualified candidates.
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}