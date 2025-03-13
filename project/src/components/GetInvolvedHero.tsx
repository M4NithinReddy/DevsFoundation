import React from 'react';

export function GetInvolvedHero() {
  return (
    <div className="relative pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?auto=format&fit=crop&w=2400&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark/90 to-primary-dark/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto container-padding py-24 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
          Join us in our mission to empower communities through drone technology education
        </p>
      </div>
    </div>
  );
}