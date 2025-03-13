import React from 'react';

const partners = [
  {
    category: 'NGO Partners',
    organizations: [
      { name: 'Rural Development Trust', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80' },
      { name: 'Tech for All Foundation', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80' },
      { name: 'Community Empowerment Alliance', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80' }
    ]
  },
  {
    category: 'Government Bodies',
    organizations: [
      { name: 'Department of Skill Development', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80' },
      { name: 'Rural Innovation Council', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80' },
      { name: 'State Education Board', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80' }
    ]
  }
];

export function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-12 text-center">Our Partners & Collaborators</h2>
        
        <div className="space-y-16">
          {partners.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-bold text-blue-800 mb-8 text-center">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.organizations.map((org) => (
                  <div key={org.name} className="bg-white p-6 rounded-xl shadow-lg text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={org.logo}
                        alt={org.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-blue-800">{org.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}