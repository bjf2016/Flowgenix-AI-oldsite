import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const token = import.meta.env.PUBLIC_SANITY_API_TOKEN;

if (!projectId || !dataset) {
  console.error(
    "❌ Sanity client config error: Missing required environment variables",
  );
  throw new Error(
    "Sanity configuration is incomplete: projectId and dataset are required.",
  );
}

export const client = createClient({
  projectId,
  dataset,
  token,
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
