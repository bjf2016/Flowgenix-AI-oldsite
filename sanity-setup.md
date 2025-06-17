# Sanity CMS Setup Guide for Flowgenix AI Blog

## Quick Setup Instructions

### 1. Create Sanity Schemas
In your Sanity Studio, create these document types:

#### Post Schema (post.js)
```javascript
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(200)
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.'
            }
          ]
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60)
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160)
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`
      })
    }
  }
}
```

#### Category Schema (category.js)
```javascript
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
```

#### Author Schema (author.js)
```javascript
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    }
  }
}
```

### 2. Environment Variables
Your environment variables are already configured:
- SANITY_PROJECT_ID
- SANITY_DATASET 
- SANITY_API_TOKEN

### 3. Creating Content
1. Go to your Sanity Studio
2. Create an Author first
3. Create Categories (AI, Business, Technology, etc.)
4. Create Blog Posts with:
   - Compelling titles
   - SEO-friendly slugs
   - Engaging excerpts
   - High-quality images
   - Rich content using the block editor

### 4. Sample Content Structure
**Categories to create:**
- AI Consulting
- Business Automation  
- Digital Transformation
- Industry Insights
- Technology Trends

**Sample blog post ideas:**
- "5 Ways AI Can Transform Your Small Business Operations"
- "The ROI of AI: Measuring Success in Business Automation"
- "Getting Started with AI: A Practical Guide for SMBs"
- "AI Ethics in Business: Building Trust Through Transparency"

## Your Blog System Features

✅ **Homepage Integration**: Recent posts display on your homepage
✅ **Blog Index Page**: Full blog listing at /blog
✅ **Individual Post Pages**: Dynamic routing at /blog/[slug]
✅ **Category Filtering**: Browse posts by category
✅ **SEO Optimization**: Meta titles and descriptions
✅ **Responsive Design**: Mobile-friendly layout
✅ **Rich Content**: Support for images, headings, and formatted text
✅ **Author Attribution**: Author profiles with images
✅ **Error Handling**: Graceful fallbacks when content isn't available

## Blog URLs
- Main blog: https://your-site.com/blog
- Individual posts: https://your-site.com/blog/your-post-slug
- Homepage: Shows 3-4 most recent posts

## Next Steps
1. Add the schemas to your Sanity Studio
2. Create your first author profile
3. Add some categories
4. Publish your first blog post
5. Your website will automatically display the content!