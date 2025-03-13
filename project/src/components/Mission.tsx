import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Mission() {
  return (
    <section className="section-padding bg-secondary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Mission</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            To bridge the technology gap in underserved communities through innovative drone education and training programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Free Training Programs",
              description: "Comprehensive drone pilot training and certification for underprivileged students"
            },
            {
              title: "Rural Outreach",
              description: "Bringing drone technology awareness and training to remote communities"
            },
            {
              title: "Skill Development",
              description: "Building technical expertise and career opportunities in the drone industry"
            }
          ].map((item) => (
            <div key={item.title} className="bg-secondary-light p-6 sm:p-8 rounded-xl border border-primary/20 card-hover">
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                {item.description}
              </p>
              <Link 
                to="/programs" 
                className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
              >
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}