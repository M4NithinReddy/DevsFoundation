import React from 'react';

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-16">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600 mb-6 italic">
              "The drone training program changed my life. I now work as a certified drone pilot for agricultural surveys."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Student testimonial"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-blue-800">Rahul Kumar</p>
                <p className="text-gray-600">Program Graduate, 2023</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-gray-600 mb-6 italic">
              "Thanks to Devs Foundation, our village now uses drones for crop monitoring and irrigation planning."
            </p>
            <div className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Community testimonial"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="font-semibold text-blue-800">Priya Patel</p>
                <p className="text-gray-600">Community Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}