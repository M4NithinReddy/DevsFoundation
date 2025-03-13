import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, ChevronRight, Users, Laptop, Calendar, MapPin, Clock, Award } from 'lucide-react';

const programs = [
  {
    icon: Plane,
    title: "Drone Pilot Training",
    description: "Comprehensive training program covering basic to advanced drone operations",
    duration: "12 weeks",
    location: "Multiple Locations",
    schedule: "Flexible Batches",
    features: [
      "Flight operations",
      "Safety protocols",
      "Maintenance",
      "Certification"
    ],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Users,
    title: "Community Outreach",
    description: "Bringing drone technology awareness to rural communities",
    duration: "Ongoing",
    location: "Rural Areas",
    schedule: "Monthly Events",
    features: [
      "Workshops",
      "Demonstrations",
      "Local partnerships",
      "Impact assessment"
    ],
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Laptop,
    title: "Tech Innovation Lab",
    description: "Hands-on experience with cutting-edge drone technology",
    duration: "16 weeks",
    location: "Tech Hubs",
    schedule: "Weekly Sessions",
    features: [
      "Programming",
      "Data analysis",
      "Project work",
      "Industry mentorship"
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
  }
];

export function FeaturedPrograms() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding py-16 lg:py-24 w-full">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-4">Featured Programs</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to empower communities through technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div 
                key={program.title} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{program.duration}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-4 h-4" />
                      <span>{program.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary">{program.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="space-y-3 mb-6 mt-auto">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                      <span>{program.schedule}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                      <span>Certification Provided</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <Link 
                      to="/programs" 
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                    >
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link 
            to="/programs" 
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}