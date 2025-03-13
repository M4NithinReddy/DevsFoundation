import React, { useState } from 'react';
import { DollarSign, PieChart, Users, School } from 'lucide-react';

const impactMetrics = [
  {
    icon: School,
    amount: '$500',
    description: 'Sponsors complete drone training for one student'
  },
  {
    icon: Users,
    amount: '$2,000',
    description: 'Funds a community awareness program'
  },
  {
    icon: PieChart,
    amount: '$5,000',
    description: 'Establishes a rural training center'
  }
];

export function DonateSection() {
  const [amount, setAmount] = useState('100');
  const presetAmounts = ['50', '100', '250', '500'];

  return (
    <section id="donate" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-green-50 rounded-full mb-4">
            <DollarSign className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Support Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation helps us provide free drone technology education to underprivileged students
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Make a Donation</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Amount
                </label>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition
                        ${amount === preset 
                          ? 'bg-green-600 text-white' 
                          : 'bg-white text-gray-600 hover:bg-green-50'}`}
                      onClick={() => setAmount(preset)}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
                Donate Now
              </button>
              <p className="text-sm text-gray-600 text-center">
                Secure payment powered by Stripe. Tax deductible in the US.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Your Impact</h3>
            <div className="space-y-6">
              {impactMetrics.map((metric) => {
                const Icon = metric.icon;
                return (
                  <div key={metric.amount} className="flex items-start bg-white p-6 rounded-xl shadow-sm">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-800" />
                    </div>
                    <div className="ml-4">
                      <p className="text-xl font-bold text-blue-800">{metric.amount}</p>
                      <p className="text-gray-600">{metric.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">Transparency & Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-green-600 mb-2">85%</p>
              <p className="text-gray-600">Directly funds education programs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600 mb-2">10%</p>
              <p className="text-gray-600">Operations & administration</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600 mb-2">5%</p>
              <p className="text-gray-600">Technology & infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}