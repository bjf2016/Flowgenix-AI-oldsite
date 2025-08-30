// src/lib/content-extractor.ts
import { client } from "./sanity";
import * as cheerio from "cheerio";

export interface ContentChunk {
  id: string;
  type: "page" | "blog" | "service";
  title: string;
  content: string;
  url: string;
  metadata: {
    section?: string;
    category?: string;
    publishedAt?: string;
    excerpt?: string;
  };
  embedding?: number[];
}

// Website pages to crawl and index
const WEBSITE_PAGES = [
  { url: "/", type: "page", title: "Homepage", section: "home" },
  {
    url: "/#about",
    type: "page",
    title: "About FlowGenixAI",
    section: "about",
  },
  {
    url: "/#services",
    type: "page",
    title: "AI Services Overview",
    section: "services",
  },
  {
    url: "/#success-stories",
    type: "page",
    title: "Success Stories",
    section: "case-studies",
  },
  {
    url: "/#contact",
    type: "page",
    title: "Contact Information",
    section: "contact",
  },
];

// Service-specific content (extracted from your homepage)
const SERVICE_CONTENT = [
  {
    id: "ai-strategy-consulting",
    type: "service" as const,
    title: "AI Strategy & Consulting",
    content: `Our experts work closely with your team to develop a comprehensive AI strategy aligned with your business objectives. We assess your current processes, identify optimization opportunities, and create a roadmap for successful AI implementation. Services include business process analysis, AI readiness assessment, implementation roadmap, and ROI projections.`,
    url: "/#services",
    metadata: { section: "services", category: "consulting" },
  },
  {
    id: "process-automation",
    type: "service" as const,
    title: "Process Automation",
    content: `Streamline your operations with intelligent automation solutions that reduce manual work, minimize errors, and accelerate business processes. From simple task automation to complex workflow optimization. Services include workflow automation, document processing, email and communication automation, and quality assurance automation.`,
    url: "/#services",
    metadata: { section: "services", category: "automation" },
  },
  {
    id: "data-analytics-insights",
    type: "service" as const,
    title: "Data Analytics & Insights",
    content: `Transform your raw data into actionable insights with advanced analytics and machine learning. Discover patterns, predict trends, and make data-driven decisions that propel your business forward. Services include predictive analytics, business intelligence dashboards, customer behavior analysis, and market trend forecasting.`,
    url: "/#services",
    metadata: { section: "services", category: "analytics" },
  },
  {
    id: "custom-ai-solutions",
    type: "service" as const,
    title: "Custom AI Solutions",
    content: `Tailored AI applications designed specifically for your unique business needs. From chatbots and recommendation systems to predictive models and intelligent decision-making tools. Services include AI-powered chatbots, recommendation engines, computer vision applications, and natural language processing.`,
    url: "/#services",
    metadata: { section: "services", category: "custom-development" },
  },
  {
    id: "training-support",
    type: "service" as const,
    title: "Training & Support",
    content: `Comprehensive training programs and ongoing support to ensure your team can effectively leverage AI tools and maintain optimal performance long after implementation. Services include staff training programs, change management support, ongoing technical support, and performance optimization.`,
    url: "/#services",
    metadata: { section: "services", category: "training" },
  },
  {
    id: "strategic-ai-consulting",
    type: "service" as const,
    title: "Strategic AI Consulting",
    content: `Long-term partnership focused on continuous AI innovation and competitive advantage. We help you stay ahead of industry trends and continuously evolve your AI capabilities. Services include technology roadmap planning, competitive AI analysis, innovation workshops, and quarterly strategy reviews.`,
    url: "/#services",
    metadata: { section: "services", category: "strategy" },
  },
];

// Company information for context
const COMPANY_INFO = {
  id: "company-info",
  type: "page" as const,
  title: "FlowGenixAI Company Information",
  content: `FlowGenixAI is an AI consulting company that transforms businesses through intelligent automation and AI-powered solutions. We specialize in creating seamless AI solutions that integrate naturally into operations, boosting efficiency and unlocking new opportunities for sustainable growth. Our vision is to democratize AI adoption for businesses of all sizes, making intelligent automation accessible, practical, and profitable for every organization ready to embrace the future. Contact: info@flowgenixai.com, Phone: (925) 456-7890, Available Nationwide.`,
  url: "/#contact",
  metadata: { section: "company", category: "info" },
};

export class ContentExtractor {
  private baseUrl: string;

  constructor(baseUrl: string = "https://flowgenixai.com") {
    this.baseUrl = baseUrl;
  }

  // Extract blog posts from Sanity CMS
  async extractBlogPosts(): Promise<ContentChunk[]> {
    try {
      const blogPostsQuery = `
        *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
          _id,
          title,
          slug,
          excerpt,
          content,
          publishedAt,
          author->{name},
          categories[]->{title, slug}
        }
      `;

      const posts = await client.fetch(blogPostsQuery);

      return posts.map((post: any) => ({
        id: `blog-${post._id}`,
        type: "blog" as const,
        title: post.title,
        content:
          this.extractPortableTextContent(post.content) + "\n\n" + post.excerpt,
        url: `/blog/${post.slug.current}`,
        metadata: {
          section: "blog",
          category: post.categories?.[0]?.title || "general",
          publishedAt: post.publishedAt,
          excerpt: post.excerpt,
        },
      }));
    } catch (error) {
      console.error("Error extracting blog posts:", error);
      return [];
    }
  }

  // Extract Portable Text content from Sanity
  private extractPortableTextContent(content: any[]): string {
    if (!content || !Array.isArray(content)) return "";

    return content
      .map((block) => {
        if (block._type === "block" && block.children) {
          return block.children.map((child: any) => child.text || "").join(" ");
        }
        return "";
      })
      .filter((text) => text.trim())
      .join("\n\n");
  }

  // Crawl website pages
  async crawlWebsitePages(): Promise<ContentChunk[]> {
    const chunks: ContentChunk[] = [];

    for (const page of WEBSITE_PAGES) {
      try {
        const url = this.baseUrl + page.url;
        console.log(`Crawling: ${url}`);

        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        // Extract text content, removing scripts and styles
        $("script, style, nav, header, footer").remove();

        let content = "";

        // Extract content based on page section
        if (page.section === "home") {
          content = this.extractHomePageContent($);
        } else if (page.section === "about") {
          content = $("#about").text().trim() || "";
        } else if (page.section === "services") {
          content = $("#services").text().trim() || "";
        } else if (page.section === "case-studies") {
          content = $("#success-stories").text().trim() || "";
        } else if (page.section === "contact") {
          content = $("#contact").text().trim() || "";
        } else {
          content = $("main").text().trim() || $("body").text().trim();
        }

        if (content && content.length > 100) {
          chunks.push({
            id: `page-${page.section}`,
            type: page.type,
            title: page.title,
            content: this.cleanContent(content),
            url: page.url,
            metadata: {
              section: page.section,
            },
          });
        }
      } catch (error) {
        console.error(`Error crawling ${page.url}:`, error);
      }
    }

    return chunks;
  }

  // Extract homepage content more specifically
  private extractHomePageContent($: cheerio.CheerioAPI): string {
    const sections = [];

    // Hero section
    const hero = $("section").first().text().trim();
    if (hero) sections.push(`Hero: ${hero}`);

    // About section
    const about = $("#about").text().trim();
    if (about) sections.push(`About: ${about}`);

    // Services overview
    const services = $("#services").text().trim();
    if (services) sections.push(`Services: ${services}`);

    return sections.join("\n\n");
  }

  // Clean and normalize content
  private cleanContent(content: string): string {
    return content
      .replace(/\s+/g, " ")
      .replace(/\n\s*\n/g, "\n\n")
      .trim();
  }

  // Get all service content
  getServiceContent(): ContentChunk[] {
    return SERVICE_CONTENT;
  }

  // Get company information
  getCompanyInfo(): ContentChunk {
    return COMPANY_INFO;
  }

  // Extract all content for RAG indexing
  async extractAllContent(): Promise<ContentChunk[]> {
    console.log("🔍 Starting content extraction for RAG...");

    const [blogPosts, websitePages] = await Promise.all([
      this.extractBlogPosts(),
      this.crawlWebsitePages(),
    ]);

    const serviceContent = this.getServiceContent();
    const companyInfo = this.getCompanyInfo();

    const allContent = [
      ...blogPosts,
      ...websitePages,
      ...serviceContent,
      companyInfo,
    ];

    console.log(`✅ Extracted ${allContent.length} content chunks:`);
    console.log(`   - Blog posts: ${blogPosts.length}`);
    console.log(`   - Website pages: ${websitePages.length}`);
    console.log(`   - Services: ${serviceContent.length}`);
    console.log(`   - Company info: 1`);

    return allContent;
  }

  // Chunk large content into smaller pieces for better retrieval
  chunkContent(content: string, maxChunkSize: number = 1000): string[] {
    const sentences = content
      .split(/[.!?]+/)
      .filter((s) => s.trim().length > 0);
    const chunks: string[] = [];
    let currentChunk = "";

    for (const sentence of sentences) {
      if (
        currentChunk.length + sentence.length > maxChunkSize &&
        currentChunk.length > 0
      ) {
        chunks.push(currentChunk.trim());
        currentChunk = sentence.trim();
      } else {
        currentChunk += (currentChunk ? ". " : "") + sentence.trim();
      }
    }

    if (currentChunk.trim()) {
      chunks.push(currentChunk.trim());
    }

    return chunks;
  }
}
