import React from 'react';
import { Users, GraduationCap, Globe2, Heart } from 'lucide-react';
import { ImpactMetric } from './ImpactMetric';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/517069880.hd.mp4?s=feac9f5402d60f6137db9bcec5cc7f5c9d5c8b7f&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark/90 to-primary-dark/90 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto container-padding">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight text-white">
            Empowering Lives Through{' '}
            <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent whitespace-nowrap">
              Drone Technology
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Providing free drone training and technology education to underprivileged students and rural communities
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <ImpactMetric 
            icon={Users}
            value="5000+"
            label="Students Trained"
          />
          <ImpactMetric 
            icon={GraduationCap}
            value="100%"
            label="Free Education"
          />
          <ImpactMetric 
            icon={Globe2}
            value="50+"
            label="Rural Communities"
          />
          <ImpactMetric 
            icon={Heart}
            value="25+"
            label="NGO Partners"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary hover:bg-primary-dark rounded-full text-base sm:text-lg font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
            Join Our Initiative
          </button>
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm rounded-full text-base sm:text-lg font-semibold text-white hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
            Watch Our Story
          </button>
        </div>
      </div>
    </div>
  );
}