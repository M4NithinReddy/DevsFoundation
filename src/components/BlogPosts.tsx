import React from 'react';
import { Calendar, User, Tag } from 'lucide-react';

const posts = [
  {
    category: 'Latest News',
    articles: [
      {
        title: 'New Training Center Opens in Rural Maharashtra',
        excerpt: 'Expanding our reach to empower more communities with drone technology education.',
        date: 'March 15, 2024',
        author: 'Sarah Chen',
        tags: ['Training', 'Expansion'],
        image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80'
      },
      {
        title: 'Partnership with State Agriculture Department',
        excerpt: 'Collaborative initiative to enhance farming practices through drone technology.',
        date: 'March 10, 2024',
        author: 'Michael Rodriguez',
        tags: ['Partnership', 'Agriculture'],
        image: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    category: 'Success Stories',
    articles: [
      {
        title: 'From Student to Drone Entrepreneur',
        excerpt: 'How our training program helped Rahul start his own agricultural drone service.',
        date: 'March 8, 2024',
        author: 'Priya Sharma',
        tags: ['Success Story', 'Entrepreneurship'],
        image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    category: 'Tech Insights',
    articles: [
      {
        title: 'Emerging Trends in Agricultural Drone Technology',
        excerpt: 'Latest innovations and applications in precision farming using drones.',
        date: 'March 5, 2024',
        author: 'David Kim',
        tags: ['Technology', 'Innovation'],
        image: 'https://images.unsplash.com/photo-1516737976789-b37b76fda023?auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

export function BlogPosts() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {posts.map((section) => (
          <div key={section.category} className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.articles.map((post) => (
                <div key={post.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                      <User className="w-4 h-4 ml-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center flex-wrap gap-2">
                      <Tag className="w-4 h-4 text-green-600" />
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-sm bg-green-50 text-green-600 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}