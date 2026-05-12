// Sanity schema definitions for Greynab
// Phase A: schemas defined here, deployed via `npx sanity deploy` once account exists

import type { SchemaTypeDefinition } from 'sanity';

const work: SchemaTypeDefinition = {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (r: any) => r.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r: any) => r.required() },
    { name: 'client', title: 'Client', type: 'string' },
    { name: 'capability', title: 'Capability', type: 'string', options: { list: ['Creative', 'Production', 'Both'] } },
    { name: 'industry', title: 'Industry', type: 'string', options: { list: ['Finance', 'Hospitality', 'Retail', 'FMCG', 'Gov/Cultural', 'Tech', 'F&B', 'Tourism', 'Luxury', 'Corporate', 'Other'] } },
    { name: 'services', title: 'Services delivered', type: 'array', of: [{ type: 'reference', to: [{ type: 'service' }] }] },
    { name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'overview', title: 'Overview (rich text)', type: 'array', of: [{ type: 'block' }] },
    { name: 'metrics', title: 'Metrics', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', type: 'string' }, { name: 'value', type: 'string' },
    ] }] },
    { name: 'testimonial', title: 'Testimonial', type: 'object', fields: [
      { name: 'quote', type: 'text' }, { name: 'author', type: 'string' }, { name: 'role', type: 'string' },
    ] },
    { name: 'youtubeUrl', title: 'YouTube URL (for production reels)', type: 'url' },
    { name: 'color', title: 'Brand color', type: 'string' },
    { name: 'featured', title: 'Featured on homepage', type: 'boolean' },
    { name: 'order', title: 'Display order', type: 'number' },
  ],
};

const service: SchemaTypeDefinition = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'capability', title: 'Capability', type: 'string', options: { list: ['Creative', 'Production', 'Both'] } },
    { name: 'positioning', title: 'Positioning (~120 words)', type: 'text' },
    { name: 'whatsIncluded', title: "What's included", type: 'array', of: [{ type: 'string' }] },
    { name: 'icon', title: 'Service icon', type: 'image' },
    { name: 'order', title: 'Display order', type: 'number' },
  ],
};

const insight: SchemaTypeDefinition = {
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'heroImage', title: 'Hero image', type: 'image' },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
    { name: 'author', title: 'Author', type: 'string' },
  ],
};

export const schemaTypes = [work, service, insight];
