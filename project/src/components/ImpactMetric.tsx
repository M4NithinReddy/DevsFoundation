import React from 'react';

interface ImpactMetricProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

export function ImpactMetric({ icon: Icon, value, label }: ImpactMetricProps) {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 card-hover">
      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-light mb-2 sm:mb-3" />
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">{value}</h3>
      <p className="text-xs sm:text-sm md:text-base text-gray-200 text-center">{label}</p>
    </div>
  );
}