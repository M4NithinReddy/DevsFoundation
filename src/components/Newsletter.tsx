import React, { useState } from 'react';
import { Mail, Bell, Shield, Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: Bell,
      title: 'Event Updates',
      description: 'Be the first to know about upcoming training programs and workshops'
    },
    {
      icon: Shield,
      title: 'Impact Stories',
      description: 'Regular updates on how our initiatives are transforming communities'
    },
    {
      icon: Send,
      title: 'Monthly Digest',
      description: 'Curated content about drone technology and community development'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated with Our Journey
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join our newsletter and be part of our mission to empower communities through technology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div key={feature.title} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Subscribe to Newsletter</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email"
                    />
                    <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    Subscribe Now
                  </button>
                  <p className="text-center text-sm text-gray-400">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}