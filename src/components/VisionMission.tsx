import React from 'react';
import { Target, Compass, Award } from 'lucide-react';

export function VisionMission() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Target className="w-12 h-12 text-blue-800 mb-6" />
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To create a world where technology education is accessible to all, empowering communities to leverage drone technology for social and economic advancement.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Compass className="w-12 h-12 text-blue-800 mb-6" />
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide free, high-quality drone technology education and training to underprivileged students and rural communities, creating pathways to sustainable careers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Award className="w-12 h-12 text-blue-800 mb-6" />
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Accessibility for All</li>
              <li>• Excellence in Education</li>
              <li>• Community Impact</li>
              <li>• Sustainable Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}