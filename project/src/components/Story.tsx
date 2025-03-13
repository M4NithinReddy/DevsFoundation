import React from 'react';

export function Story() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2020 as a division of IPAGE Group, Devs Foundation emerged from a simple yet powerful observation: the transformative potential of drone technology remained inaccessible to many communities that could benefit from it the most.
              </p>
              <p>
                What began as a small initiative to provide drone training to underprivileged students has grown into a comprehensive program that spans across multiple states, touching thousands of lives and transforming communities.
              </p>
              <p>
                Today, we work closely with NGOs, government bodies, and industry partners to create sustainable impact through technology education and skill development.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80"
              alt="Students learning drone technology"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}