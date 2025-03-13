import React from 'react';
import { BlogHero } from '../components/BlogHero';
import { BlogPosts } from '../components/BlogPosts';
import { Newsletter } from '../components/Newsletter';

export function BlogPage() {
  return (
    <div>
      <BlogHero />
      <BlogPosts />
      <Newsletter />
    </div>
  );
}