import React from 'react';
import { Bone as Drone, Calendar, MapPin, GraduationCap } from 'lucide-react';

const courses = [
  {
    title: 'Basic Drone Operations',
    duration: '4 weeks',
    level: 'Beginner',
    description: 'Introduction to drone technology, safety protocols, and basic flight operations.',
    schedule: 'Weekday batches: Mon-Wed | Weekend batch: Saturday',
    locations: ['Delhi NCR', 'Mumbai', 'Bangalore']
  },
  {
    title: 'Advanced Drone Piloting',
    duration: '8 weeks',
    level: 'Intermediate',
    description: 'Advanced flight maneuvers, emergency procedures, and specialized applications.',
    schedule: 'Weekday batches: Thu-Sat | Weekend batch: Sunday',
    locations: ['Delhi NCR', 'Hyderabad']
  },
  {
    title: 'Drone Photography & Mapping',
    duration: '6 weeks',
    level: 'Intermediate',
    description: 'Aerial photography techniques, photogrammetry, and mapping applications.',
    schedule: 'Weekend batch only: Saturday-Sunday',
    locations: ['Mumbai', 'Bangalore', 'Chennai']
  }
];

export function DroneTraining() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
            <Drone className="w-8 h-8 text-blue-800" />
          </div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Drone Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to empower underprivileged students with drone technology skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <div key={course.title} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-blue-800 mb-2">{course.title}</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{course.duration}</span>
                <GraduationCap className="w-4 h-4 ml-4 mr-2" />
                <span>{course.level}</span>
              </div>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Calendar className="w-4 h-4 mr-2 mt-1 text-green-600" />
                  <p className="text-sm text-gray-600">{course.schedule}</p>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 text-green-600" />
                  <p className="text-sm text-gray-600">{course.locations.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition">
            Apply for Training
          </button>
        </div>
      </div>
    </section>
  );
}