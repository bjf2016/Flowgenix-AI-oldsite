import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { config } from "./config";

export const client = createClient({
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  token: config.sanity.apiToken,
  useCdn: true,
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Blog post type definition
export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content: any[];
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  publishedAt: string;
  author?: {
    name: string;
    image?: any;
  };
  categories?: {
    _id: string;
    title: string;
    slug: {
      current: string;
    };
  }[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

// GROQ queries for blog content
export const blogPostsQuery = `
  *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{name, image},
    categories[]->{_id, title, slug},
    seo
  }
`;

export const blogPostQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    mainImage,
    publishedAt,
    author->{name, image},
    categories[]->{_id, title, slug},
    seo
  }
`;

export const recentPostsQuery = `
  *[_type == "post" && publishedAt < now()] | order(publishedAt desc)[0...4] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    categories[]->{_id, title, slug}
  }
`;

export const categoriesQuery = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }
`;

// ADD these new queries to your existing src/lib/sanity.ts file
// (Keep all your existing code, just add these new queries at the bottom)

// Paginated blog posts query
export const paginatedBlogPostsQuery = `
  *[_type == "post" && publishedAt < now() && 
    (!defined($category) || $category in categories[]->slug.current) &&
    (!defined($search) || title match $search + "*" || excerpt match $search + "*")
  ] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{name, image},
    categories[]->{_id, title, slug},
    seo
  }
`;

// Count total posts for pagination
export const countBlogPostsQuery = `
  count(*[_type == "post" && publishedAt < now() && 
    (!defined($category) || $category in categories[]->slug.current) &&
    (!defined($search) || title match $search + "*" || excerpt match $search + "*")
  ])
`;

// Search suggestions query
export const searchSuggestionsQuery = `
  *[_type == "post" && publishedAt < now() && 
    (title match $search + "*" || excerpt match $search + "*")
  ][0...5] {
    title,
    slug
  }
`;

// Posts by category query
export const postsByCategoryQuery = `
  *[_type == "post" && publishedAt < now() && $category in categories[]->slug.current] 
  | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    author->{name, image},
    categories[]->{_id, title, slug},
    seo
  }
`;

// Related posts query
export const relatedPostsQuery = `
  *[_type == "post" && publishedAt < now() && _id != $currentPostId && 
    count(categories[@._ref in *[_id == $currentPostId][0].categories[]._ref]) > 0
  ] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    categories[]->{_id, title, slug}
  }
`;

// Blog post with reading time calculation
export interface BlogPostWithMeta extends BlogPost {
  readingTime?: number;
  wordCount?: number;
}

// Helper function to calculate reading time
export function calculateReadingTime(content: any[]): number {
  if (!content) return 0;

  const wordsPerMinute = 200;
  let wordCount = 0;

  const countWords = (blocks: any[]): void => {
    blocks.forEach((block) => {
      if (block._type === "block" && block.children) {
        block.children.forEach((child: any) => {
          if (child.text) {
            wordCount += child.text.split(/\s+/).length;
          }
        });
      }
    });
  };

  countWords(content);
  return Math.ceil(wordCount / wordsPerMinute);
}

// Helper function to create search parameters
export function createSearchParams(
  searchQuery?: string,
  category?: string,
): string {
  const params = [];
  if (searchQuery) {
    params.push(`"${searchQuery}"`);
  }
  return params.join(" ");
}
