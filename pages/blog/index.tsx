
import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { format } from 'date-fns'
import Layout from '../../components/Layout'
import { getSortedPostsData, Post } from '../../lib/blog'

interface BlogProps {
  allPostsData: Post[]
}

const BlogPage: React.FC<BlogProps> = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>AI Insights Blog - Flowgenix AI</title>
        <meta name="description" content="Practical AI knowledge and insights for business leaders. Learn how to implement AI solutions that drive real results for your business." />
        <meta name="keywords" content="AI blog, business insights, automation tips, AI implementation, workflow optimization" />
      </Head>

      <section className="bg-gradient-to-br from-gray-50 to-primary-50 pt-40 lg:pt-48 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-navy-900 mb-6">
              Latest Insights
            </h1>
            <p className="text-xl lg:text-2xl text-primary-600 font-medium mb-8">
              Practical AI knowledge for business leaders
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Stay ahead of the curve with actionable insights, real-world case studies, and practical guides for implementing AI in your business. No jargon, just results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPostsData.map((post) => (
              <article key={post.id} className="blog-post-card group">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <time className="text-sm text-gray-500" dateTime={post.date}>
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </time>
                </div>

                <h2 className="text-xl font-semibold text-navy-900 mb-4 group-hover:text-navy-700 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-navy-700 hover:text-navy-900 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {allPostsData.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                More content coming soon!
              </h3>
              <p className="text-gray-500">
                We're working on creating valuable content for you. Check back soon for the latest insights.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">
              Ready to Implement These Ideas?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get personalized guidance on implementing AI solutions for your specific business needs.
            </p>
            <a href="/#contact" className="cta-button">
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default BlogPage
