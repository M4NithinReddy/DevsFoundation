import React from 'react';

const leaders = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Executive Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    bio: 'Former drone research scientist with 15 years of experience in technology education and community development.'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Programs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'Certified drone instructor with extensive experience in curriculum development and rural outreach programs.'
  },
  {
    name: 'Priya Sharma',
    role: 'Community Relations Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    bio: 'Specialist in NGO partnerships and community engagement with a focus on sustainable development.'
  },
  {
    name: 'David Kim',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Drone technology expert with a background in aerospace engineering and education technology.'
  }
];

export function Leadership() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Our Leadership Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div key={leader.name} className="bg-gray-50 rounded-xl overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 relative">
                <img 
                  src={leader.image}
                  alt={leader.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-1">{leader.name}</h3>
                <p className="text-green-600 font-medium mb-3">{leader.role}</p>
                <p className="text-gray-600 text-sm">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}