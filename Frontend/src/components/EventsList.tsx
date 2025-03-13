import React from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const events = [
  {
    title: "Drone Technology Workshop",
    date: "April 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Tech Hub, Mumbai",
    capacity: "50 participants",
    type: "Workshop",
    description: "Hands-on workshop covering basic drone operations and safety protocols.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Rural Outreach Program",
    date: "April 20, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Village Community Center, Maharashtra",
    capacity: "100 participants",
    type: "Community Event",
    description: "Demonstration of drone applications in agriculture and community development.",
    image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Drone Photography Masterclass",
    date: "May 5, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Creative Studio, Mumbai",
    capacity: "30 participants",
    type: "Training",
    description: "Advanced techniques in aerial photography and videography.",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=800&q=80"
  }
];

export function EventsList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:col-span-2">
                  <div className="flex items-center mb-4">
                    <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full text-sm">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2 text-green-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2 text-green-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-green-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-2 text-green-600" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}